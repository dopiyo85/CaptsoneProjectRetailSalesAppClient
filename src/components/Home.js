import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';

const Home = () => {
  return (
    <div className="home">
        <h1>Welcome to our store</h1>
        <p>Shop the latest products from our collection</p>
      <div className="cta">
        <Link to="/dashboard" className="button">Shop Now</Link>
      </div>
      
    </div>
  );
};

export default Home;
