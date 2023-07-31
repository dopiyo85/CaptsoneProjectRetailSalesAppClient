import React from 'react';
//import { Link } from 'react-router-dom';
import './styles/aboutus.css';

function About() {
    return (
      <div className="faq-content">
        <h1>About Us</h1>
        <p>We are a company dedicated to providing quality online products to our customers.</p>
        <hr></hr>
        <h1 className="faq-heading">What is Safaricom Retail Sales App?</h1>
              <p>Safaricom Retail Sales App is application is a digital platform that enables customers to browse and purchase mobile phones and related accessories from the comfort of their homes. This comprehensive app streamlines the entire phone purchasing process, providing customers with a seamless and convenient shopping experience. Let's dive into the various functionalities of this application:</p>

        <h2>View Phone Stock</h2>
        <p>The application provides customers with a user-friendly interface to explore a wide range of available phone models and accessories. Customers can browse through product images, specifications, features, and pricing details.</p>

        <h2>Add to Cart</h2>
        <p>When customers find their desired phones or accessories, they can easily add them to their virtual shopping cart for future reference and to keep track of their intended purchases.</p>

        <h2>Generate Quotation</h2>
        <p>Customers can generate a quotation with the selected items in their cart. This feature allows them to get a clear estimate of the total cost, including any applicable taxes and shipping charges.</p>

        <h2>Place an Order</h2>
        <p>Once customers are satisfied with their selections, they can proceed to place an order. The application will prompt them to provide shipping and contact details for order processing.</p>

        <h2>Mpesa Online Payment</h2>
        <p>The application integrates with the Mpesa payment system, a widely-used mobile payment platform in certain regions. Customers can securely make payments using their Mpesa accounts or other supported payment methods.</p>

        <h2>Choose Pickup Location</h2>
        <p>Customers can choose the physical shop from where they would like to collect their purchased items. The application provides a list of available shops for pickup, enhancing customer flexibility.</p>

        <h2>Select Referring Sales Agent</h2>
        <p>If a sales agent referred the customer to the shop, the customer has the option to select the specific sales agent from a list during the checkout process.</p>

        <h2>System-Generated Invoice</h2>
        <p>Upon successful payment, the application generates an invoice that includes the order details, customer information, payment confirmation, and pickup location. This invoice can be downloaded and emailed to the customer for record-keeping.</p>

        <h2>Account Management</h2>
        <p>The application allows customers to create accounts, log in, and manage their profiles. Registered customers can view their order history, track deliveries, and manage their personal information.</p>

        <h2>Customer Support</h2>
        <p>The app should include a customer support section where users can seek assistance, ask questions, or report any issues related to their orders or account.</p>

        <h2>Wishlist</h2>
        <p>Customers can save desired items to their wishlist for future reference or potential purchase.</p>

        <h2>Reviews and Ratings</h2>
        <p>Customers can leave reviews and ratings for products they have purchased, providing valuable feedback to other potential buyers.</p>

        <h2>Social Sharing</h2>
        <p>Customers can share their purchase details or wishlist items with friends and family through social media platforms.</p>

        <h2>Privacy and Security</h2>
        <p>The application should prioritize customer data privacy and implement robust security measures to ensure secure transactions and protect sensitive information.</p>
      </div>
    );
  }

export default About;
