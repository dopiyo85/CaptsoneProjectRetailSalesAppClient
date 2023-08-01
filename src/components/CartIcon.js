import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);

  // Calculate the total number of items in the cart
  const totalItems = cartItems.length;

  return (
    <div className="cart-icon">
      <i className="fa fa-shopping-cart"></i>
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </div>
  );
};

export default CartIcon;