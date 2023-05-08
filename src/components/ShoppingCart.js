import React from 'react';
import './styles/shoppingCart.css';

const ShoppingCart = ({ items }) => {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? <p>Your cart is empty</p> : (
        <>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <p>Total Price: ${totalPrice}</p>
          <button>Checkout</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
