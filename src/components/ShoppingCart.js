import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './styles/shoppingCart.css';

const ShoppingCart = () => {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <p>Total Price: Ksh. {totalPrice}</p>
          <button>Checkout</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
