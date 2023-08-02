import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "./CartContext";
// Imports the required modules from react-table
import { useTable, useFilters } from "react-table";
import "./styles/dashboard.css"; // Import custom CSS styles

const deviceImageStyle = {
  width: "200px",
  height: "200px",
};

function Dashboard() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      console.log("Fetching data from the server...");

      axios
        .get("http://localhost:5005/api/products")
        .then((res) => {
          // Limiting to 12 products
          setProducts(res.data.slice(0, 12));
          // Clear the message if the user is logged in
          setMessage("");
        })
        .catch((err) => console.log(err));
    } else {
      setMessage("Please log in to view products.");
    }
  }, []);

  //Define the table columns and data
  const columns = React.useMemo(
    () => [
      {
        Header: "Product",
        // This is the key of the product's name in the data
        accessor: "name",
        Cell: ({ row }) => (
          <div className="product-card">
            <div className="product-info">
              <div className="product-image">
                <img
                  src={row.original.image}
                  alt="Product"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="product-name">{row.original.name}</div>
              <div className="product-description">{row.original.description}</div>
              <div className="product-price">Price: Ksh. {row.original.price}</div>
              <div className="product-quantity">Quantity: {row.original.quantity} in stock</div>
              <div className="product-action">
                <button onClick={() => addToCart(row.original)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ),
      },
    ],
    [addToCart]
  );

  //Creates the table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // Function for applying the search filter
    setFilter,
    // Uses the "useFilters" hook for filtering
  } = useTable({ columns, data: products }, useFilters);

  return (
    <div className="container">
      <h2 className="dashboard-heading">DASHBOARD</h2>
      {/* Displays the message if there's any */}
      {message && <div className="message">{message}</div>}

      {/* Adds search input */}
      <input
        type="text"
        placeholder="Search phone..."
        onChange={(e) => setFilter("name", e.target.value)}
        style={{ width: "350px" }} // Adjusts the width of the search phone as needed
      />

      {/* Renders the table */}
      <div className="product-container">
        {rows.map((row) => {
          prepareRow(row);
          return (
            <div key={row.id}>
              {row.cells.map((cell) => {
                return <div {...cell.getCellProps()}>{cell.render("Cell")}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;