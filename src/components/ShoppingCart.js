import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './styles/shoppingCart.css';
import InvoicePage from './InvoicePage';
import { useNavigate } from 'react-router-dom';
import ReceiptPage from './ReceiptPage';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const [checkoutStarted, setCheckoutStarted] = useState(true);
  const [checkoutError, setCheckoutError] = useState('');
  const [selectedShop, setSelectedShop] = useState('');
  const [receiptData, setReceiptData] = useState(null);
  const [savedInvoiceId, setSavedInvoiceId] = useState(null);
  const navigate = useNavigate();

  const handleShopSelection = (e) => {
    setSelectedShop(e.target.value);
  };

  const handleMakePayment = async () => {
    try {
      // ... (existing code for API call and response handling)

      if (response.ok) {
        const data = await response.json();
        const savedInvoiceId = data._id;

        setReceiptData({
          customerName: 'John Doe',
          product: cartItems.map((item) => item.name).join(', '),
          quantity: cartItems.length,
          totalPrice,
          date: new Date(),
          agent: 'Agent Name',
          shop: selectedShop,
          companyName: 'Company Name',
        });

        setCheckoutStarted(true);
        setSavedInvoiceId(savedInvoiceId); // Store the savedInvoiceId in the state

        try {
          navigate(`/receipt/${savedInvoiceId}`);
        } catch (error) {
          console.error('Error during navigation:', error);
          setCheckoutError('Error during navigation. Please try again later.');
        }
      } else {
        const errorData = await response.json();
        console.error('Error during checkout:', errorData.error);
        setCheckoutError('Error during checkout. Please try again later.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      setCheckoutError('Error during payment. Please try again later.');
    }
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
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
          <div className="shop-selector">
            <select value={selectedShop} onChange={handleShopSelection} required> 
              <option value="">Select a shop</option>
              <option value="Hub">Hub</option>
              <option value="Galleria">Galleria</option>
              <option value="Digo">Digo</option>
              <option value="Westgate">Westgate</option>
              <option value="Kimathi">Kimathi</option>
              <option value="Sarit">Sarit</option>
              <option value="Eldoret">Eldoret</option>
              <option value="Busia">Busia</option>
            </select>
          </div>
          <hr></hr>
        
          {checkoutError && <p>{checkoutError}</p>}
          {checkoutStarted ? (
            <InvoicePage invoiceId={savedInvoiceId} totalPrice={totalPrice} cartItems={cartItems} />
          ) : (
            <ReceiptPage />
          )}
          <button onClick={handleMakePayment}>MAKE PAYMENT</button>
         
        </>
      )}
    </div>
  );
};

export default ShoppingCart;