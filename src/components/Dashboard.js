import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('Fetching data from the server...'); // Add this console.log statement

    axios
      .get('https://captsoneprojectretailsalesappbackend.onrender.com/api/products')
      .then((res) => setProducts(res.data.slice(0, 6))) // Limiting to 6 products
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (productId) => {
    // Implement your logic to add the product to the cart
    console.log(`Added product with ID ${productId} to cart`);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <tbody>
          {renderRows(products, addToCart)}
        </tbody>
      </table>
    </div>
  );
}

function renderRows(products, addToCart) {
  const rows = [];
  for (let i = 0; i < products.length; i += 3) {
    const rowProducts = products.slice(i, i + 3);
    const row = (
      <tr key={i}>
        {rowProducts.map((product) => (
          <React.Fragment key={product._id}>
            <td>
              <div>
                <div>{product.name}</div>
                <div>
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <div>{product.description}</div>
                <div>Price: Ksh. {product.price}</div>
                <div>Quantity: {product.quantity} in stock</div>
                <button onClick={() => addToCart(product._id)}>Add to Cart</button>
              </div>
            </td>
          </React.Fragment>
        ))}
      </tr>
    );
    rows.push(row);
  }
  return rows;
}

export default Dashboard;