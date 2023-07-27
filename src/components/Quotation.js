import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Quotation = () => {
  const { register, handleSubmit, reset } = useForm();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5005/api/products')
      .then(res => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const onSubmit = async (data) => {
    try {
      // Your API endpoint to create a quotation
      const response = await axios.post('http://localhost:5005/api/quotation', data);
      console.log('Quotation response:', response.data);
      reset();
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
            {...register('customerName', { required: true })}
          />
        </div>
        <div className="form-group">
          <label>Product:</label>
          <select {...register('product', { required: true })}>
            <option value="">Select a product</option>
            {products.map(product => (
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
            {...register('quantity', { required: true, min: 1 })}
          />
        </div>
        <div className="form-group">
          <label>Company Name:</label>
          <input
            type="text"
            {...register('companyName', { required: true })}
          />
        </div>
        <div className="form-group">
          <label>Agent Name:</label>
          <input
            type="text"
            {...register('agentName', { required: true })}
          />
        </div>
        <div className="form-group">
          <label>Shop Name:</label>
          <input
            type="text"
            {...register('shopName', { required: true })}
          />
        </div>
        <button type="submit">Create Quotation</button>
      </form>
    </div>
  );
};

export default Quotation;
