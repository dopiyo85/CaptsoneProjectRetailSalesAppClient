import React, { useState } from "react";

const Inventory = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (event) => {
    event.preventDefault();
    const productName = event.target.elements.productName.value;
    const productQuantity = event.target.elements.productQuantity.value;
    setProducts([...products, { name: productName, quantity: productQuantity }]);
  };

  return (
    <div>
      <h1>Inventory</h1>
      <form onSubmit={addProduct}>
        <input type="text" name="productName" placeholder="Product Name" />
        <input type="number" name="productQuantity" placeholder="Quantity" />
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
