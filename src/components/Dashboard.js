import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "./CartContext";

function Dashboard() {
  if (localStorage.getItem("user")) {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
      console.log("Fetching data from the server...");

      axios
        .get("http://localhost:5005/api/products")
        .then((res) => setProducts(res.data.slice(0, 6))) // Limiting to 6 products
        .catch((err) => console.log(err));
    }, []);

    return (
      <div className="container">
        <h2>Dashboard</h2>
        <div className="product-container">
          <table>
            <tbody>{renderRows(products, addToCart)}</tbody>
          </table>
        </div>
      </div>
    );
  } else { console.log("Login In") }
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
                  <img src={product.image} alt={product.name}  />
                </div>
                <div>{product.description}</div>
                <div>Price: Ksh. {product.price}</div>
                <div>Quantity: {product.quantity} in stock</div>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
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
