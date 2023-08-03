import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/productList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://captsoneprojectretailsalesappbackend.onrender.com/api/products')
      .then(res => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product" key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
