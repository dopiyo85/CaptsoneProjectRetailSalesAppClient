import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>Welcome to our store</h1>
        <p>Shop the latest products from our collection</p>
      </div>
      <div className="cta">
        <Link to="/dashboard" className="button">Shop Now</Link>
      </div>
      <footer>
        <ul>
          {/* <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li> */}
        </ul>
      </footer>
    </div>
  );
};

export default Home;
