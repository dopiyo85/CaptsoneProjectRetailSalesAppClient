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
      .get("https://captsoneprojectretailsalesappbackend.onrender.com/api/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    // Fetch sales agents data
    axios
      .get("https://captsoneprojectretailsalesappbackend.onrender.com/api/salesAgent")
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
      data.quantity = parseInt(data.quantity);
      const { salesAgent, product,...otherData } = data;
      const agentName = selectedSalesAgent;
  
      // Fetch the product details based on the selected product name
      const selectedProduct = products.find((p) => p.name === product);
  
      if (!selectedProduct) {
        alert('Selected product not found.');
        return;
      }
  
      // Combine the sales agent's name and the rest of the form data
      const requestData = {
        ...otherData,
        agentName,
        product: selectedProduct.name, 
      };

      console.log('Request Data:', requestData);

      // Your API endpoint to create a quotation
      const response = await axios.post(
        'https://captsoneprojectretailsalesappbackend.onrender.com/api/quotation',
        requestData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log('Quotation response:', response.data);

      // Check if the response contains an error message
      if (response.data.error) {
        console.error('Error creating quotation:', response.data.error);
        alert('Error creating quotation: ' + response.data.error);
        return;
      }

      // Store the quotation data to be used for PDF generation
      setGeneratedQuotationData(response.data);

      reset();
      setSelectedSalesAgent('');
      alert('Quotation created successfully!');
    } catch (error) {
      console.error('Error creating quotation:', error);
      alert('Error creating quotation: ' + error.message); // Display the error message
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="quotation-form">
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'orange', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', fontWeight: 'bold' }}>CREATE QUOTATION</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Customer Name:</label>
          <input
            type="text" name="customerName"
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
            type="number" name="quantity"
            {...register("quantity", { required: true, min: 1 })}
          />
        </div>
        <div className="form-group">
          <label>Company Name:</label>
          <input type="text" name="companyName"{...register("companyName", { required: true })} />
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
            type="text" name="shopName"
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
