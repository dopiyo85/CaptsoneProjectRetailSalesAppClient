import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import QuotationPDF from "./QuotationPDF";
import './styles/quotation.css';

const Quotation = () => {
  const { register, handleSubmit, reset } = useForm();
  const [products, setProducts] = useState([]);
  const [salesAgents, setSalesAgents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSalesAgent, setSelectedSalesAgent] = useState("");
  const [shopName, setShopName] = useState("");
  const [generatedQuotationData, setGeneratedQuotationData] = useState(null);

  useEffect(() => {
    // Fetch products data
    axios
      .get("http://localhost:5005/api/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    // Fetch sales agents data
    axios
      .get("http://localhost:5005/api/salesAgent")
      .then((res) => {
        setSalesAgents(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const selectedAgent = salesAgents.find(
      (agent) => agent.name == selectedSalesAgent
    );
    if (selectedAgent) {
      setShopName(selectedAgent.shop.shopName);
    } else {
      setShopName("");
    }
  }, [selectedSalesAgent, salesAgents]);

  const onSubmit = async (data) => {
    try {
      // Extract the sales agent's name and product ID from the form data
      const { salesAgent, product, ...otherData } = data;
      const agentName = selectedSalesAgent;
      const productId = product; // Use the selected product, not the string 'salesAgent'

      // Combine the sales agent's name and product ID with the rest of the form data
      const requestData = {
        ...otherData,
        agentName,
        productId,
      };

      // Your API endpoint to create a quotation
      const response = await axios.post('http://localhost:5005/api/Quotation', requestData);
      console.log('Quotation response:', response.data);

      // Store the quotation data to be used for PDF generation
      setGeneratedQuotationData(response.data);

      reset();
      setSelectedSalesAgent('');
      alert('Quotation created successfully!');
    } catch (error) {
      console.error('Error creating quotation:', error);
      alert('Error creating quotation');
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="quotation-form">
      <h2>Create Quotation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Customer Name:</label>
          <input
            type="text"
            {...register("customerName", { required: true })}
          />
        </div>
        <div className="form-group">
          <label>Product:</label>
          <select {...register("product", { required: true })}>
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product._id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            {...register("quantity", { required: true, min: 1 })}
          />
        </div>
        <div className="form-group">
          <label>Company Name:</label>
          <input type="text" {...register("companyName", { required: true })} />
        </div>
        <div className="form-group">
          <label>Sales Agent:</label>
          <select
            {...register("salesAgent", { required: true })}
            value={selectedSalesAgent}
            onChange={(e) => setSelectedSalesAgent(e.target.value)}
          >
            <option value="">Select a sales agent</option>
            {salesAgents.map((salesAgent) => (
              <option key={salesAgent._id} value={salesAgent.name}>
                {salesAgent.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Shop Name:</label>
          <input
            type="text"
            value={shopName}
            {...register("shopName", { required: true })}
          />
        </div>
        <button type="submit">Create Quotation</button>
      </form>

      {/* Render the PDF viewer below the form */}
      <div className="pdf-viewer">
        {generatedQuotationData && <QuotationPDF quotationData={generatedQuotationData} />}
      </div>
    </div>
  );
};

export default Quotation;
