import React from 'react'; 
import './styles/faqs.css';

const Faqs = () => {
  return (
    <div className="faq-container">
      <div className="col-md-4">
        {/* Adds the logo */}
        <div style={{ backgroundColor: 'white', padding: '0', display: 'inline-block' }}>
          <img src="images/safaricom-logo-green.png" alt="Your Logo" className="footer-logo" title="Company logo" />
        </div>
      </div>
      <h1 className="faq-heading">What is an online phone sales App?</h1>
      <hr></hr>
      <div className="faq-content">
        <p>An online phone sales application is a digital platform that enables customers to browse and purchase mobile phones and related accessories from the comfort of their homes. This comprehensive app streamlines the entire phone purchasing process, providing customers with a seamless and convenient shopping experience. Let's dive into the various functionalities of this application:</p>

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

        <h1 className="faq-heading">FAQs (Frequently Asked Questions)</h1>
        <hr></hr>

        <h2>Is my payment information secure on the app?</h2>
        <p>Yes, the application follows industry-standard security protocols to protect your payment information. All transactions are encrypted for enhanced security.</p>

        <h2>Can I cancel or modify my order after payment?</h2>
        <p>Order modifications or cancellations may be possible within a specific time frame after placing the order. Contact customer support for assistance.</p>

        <h2>How can I track the status of my order?</h2>
        <p>You can log in to your account and access the "Order History" section to track the status of your order.</p>

        <h2>Can I return or exchange products if I am not satisfied?</h2>
        <p>Yes, the application has a return and exchange policy. Please review the terms and conditions for eligibility criteria.</p>

        <h2>What payment methods are accepted on the app?</h2>
        <p>The app supports various payment methods, including Mpesa, credit/debit cards, and other electronic payment options.</p>

        <h2>How do I choose a specific sales agent during checkout?</h2>
        <p>You will be provided with a list of referring sales agents, and you can select the appropriate one from the options given.</p>

        <h2>Can I view the physical shop locations available for pickup?</h2>
        <p>Yes, the app will display a list of available shops with their addresses for your convenience.</p>

        <h2>How will I receive my system-generated invoice?</h2>
        <p>The invoice will be available for download after a successful payment. Additionally, you will receive it via email for your records.</p>

        <h2>Is there a warranty for the purchased products?</h2>
        <p>Yes, products typically come with a warranty. Please refer to the product details for specific warranty information.</p>

        <h2>What if I encounter technical issues on the app?</h2>
        <p>For any technical difficulties or support, you can reach out to our customer support team via the "Contact Us" section of the app.
          The above online phone sales application offers a comprehensive and user-friendly solution for customers to buy mobile phones and accessories with ease, flexibility, and security, ultimately enhancing their overall shopping experience.</p>
        <br></br>
      </div>
    </div>
  );
};

export default Faqs;

