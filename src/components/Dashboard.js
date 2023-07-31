import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "./CartContext";

const deviceImageStyle = {
  width: "200px",
  height: "200px",
};

function Dashboard() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState(""); // State variable for the message

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      console.log("Fetching data from the server...");

      axios
        .get("http://localhost:5005/api/products")
        .then((res) => {
          setProducts(res.data.slice(0, 12)); // Limiting to 12 products
          setMessage(""); // Clear the message if user is logged in
        })
        .catch((err) => console.log(err));
    } else {
      setMessage("Please log in to view products.");
    }
  }, []);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      {/* Display the message if there's any */}
      {message && <div className="message">{message}</div>}
      <div className="product-container">
        <table>
          <tbody>{renderRows(products, addToCart)}</tbody>
        </table>
      </div>
    </div>
  );
}

function renderRows(products, addToCart) {
  const rows = [];
  const productsPerRow = 6; // Display 6 devices in each row

  for (let i = 0; i < products.length; i += productsPerRow) {
    const rowProducts = products.slice(i, i + productsPerRow);
    const row = (
      <tr key={i}>
        {rowProducts.map((product) => (
          <React.Fragment key={product._id}>
            <td>
              <div>
                <div>{product.name}</div>
                <div>
                  <img src={product.image} alt={product.name} style={deviceImageStyle} />
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
