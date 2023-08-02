import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './styles/shoppingCart.css';
import InvoicePage from './InvoicePage';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const [checkoutStarted, setCheckoutStarted] = useState(true);
  const [checkoutError, setCheckoutError] = useState('');
  const [savedInvoiceId, setSavedInvoiceId] = useState(null);
  const navigate = useNavigate();

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleCheckout = async () => {
    // Prepares the data to create an invoice
    const invoiceData = {
      customerName: 'John Doe',
      product: cartItems.map((item) => item.name).join(', '),
      quantity: cartItems.length,
      totalPrice,
      date: new Date(),
      agent: 'Agent Name',
      shop: 'Shop Name',
      companyName: 'Company Name',
    };

    try {
      // Sends the invoice data to the backend for saving in the database
      const response = await fetch('/api/invoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(invoiceData),
      });

      if (response.ok) {
        // Gets the saved invoice ID from the response
        const data = await response.json();
        const savedInvoiceId = data._id;
        // Sets the checkoutStarted state to true to show the InvoicePage component
        setCheckoutStarted(true);
        // Stores the saved invoice ID in the state to pass it to the InvoicePage component
        setSavedInvoiceId(savedInvoiceId);
        // Navigates to the InvoicePage with the generated invoiceId as a parameter
        navigate(`/invoicepage/${savedInvoiceId}`);
      } else {
        // Handles error response from the server
        console.error('Error during checkout:', response.statusText);
        setCheckoutError('Error during checkout. Please try again later.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      // Handles network or other errors
      setCheckoutError('Error during checkout. Please try again later.');
    }
  };

  return (
    <div className="shopping-cart">
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'orange', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', fontWeight: 'bold' }}>SHOPPING CART</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>Kshs.{item.price}</td>
                  <td>
                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="2" style={{ textAlign: 'right', fontWeight: 'bold' }}>
                  Total Price: Ksh. {totalPrice}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="total-price">
            {!checkoutStarted && <button onClick={handleCheckout}>Checkout</button>}
          </div>
          {checkoutError && <p>{checkoutError}</p>}
          {checkoutStarted && <InvoicePage invoiceId={savedInvoiceId} totalPrice={totalPrice} />}
        </>
      )}
    </div>
  );
};

export default ShoppingCart;