import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './styles/shoppingCart.css';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
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
                  <td>${item.price}</td>
                  <td>
                    {/* Remove button to remove the product */}
                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
              {/* Display the total price in a separate table row */}
              <tr>
                <td colSpan="2" style={{ textAlign: 'right', fontWeight: 'bold' }}>
                  Total Price: Ksh. {totalPrice}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="total-price">
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
