import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./styles.css";
import Home from "./components/Home";
import Faqs from "./components/Faqs";
import ShoppingCart from "./components/ShoppingCart";
import About from "./components/AboutUs";
import Dashboard from "./components/Dashboard";
import Quotation from "./components/Quotation";
import Register from "./components/Register";
import Login from "./components/Login";
import { CartProvider } from "./components/CartContext";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error:", error);
    console.log("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand text-light">
                Safaricom Online Sales App
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link btn btn-success"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link btn btn-success">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link btn btn-success">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/faqs" className="nav-link btn btn-success">
                      FAQs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/quotation" className="nav-link btn btn-success">
                      Create Quotation
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link btn btn-success">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link btn btn-success">
                      Login
                    </Link>
                  </li>
                </ul>
                <form className="d-flex ms-2 me-4">
                  <input
                    className="form-control me-2 ms-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-success me-2 ms-2" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>

          <ErrorBoundary>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
              <Route path="/quotation" element={<Quotation />} />
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </ErrorBoundary>

          <footer id="footer" className="bg-success text-light">
            <div className="container-fluid d-flex">
              <span className="navbar-brand">CAPSTONE &trade;</span>
              <span className="navbar-brand fs-6 ms-auto">Follow Us:</span>
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/safaricomplc_/"
                  target="_blank"
                  rel="noreferrer"
                  title="instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://web.facebook.com/SafaricomPLC"
                  target="_blank"
                  rel="noreferrer"
                  title="facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="http://m.me/SafaricomZuri"
                  target="_blank"
                  rel="noreferrer"
                  title="whatsapp"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@safaricomplc?lang=en"
                  target="_blank"
                  rel="noreferrer"
                  title="tiktok"
                >
                  <i className="bi bi-tiktok"></i>
                </a>
              </div>
            </div>
            <div>
              <h4>Contact Us</h4>
              <ul>
                <li>Email: customercare@safaricom.co.ke</li>
                <li>Phone: 100 for prepaid and 200 for postpaid</li>
                <li>Address: 123 Main Street, Anytown USA</li>
              </ul>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

createRoot(document.getElementById("root")).render(<App />);

export default App;
