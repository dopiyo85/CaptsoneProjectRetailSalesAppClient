import React, { useState } from "react";
import { createRoot } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./styles.css";
import Home from "./components/Home";
import Faqs from "./components/Faqs";
import ShoppingCart from "./components/ShoppingCart";
import About from "./components/AboutUs";
import Dashboard from "./components/Dashboard";
import Quotation from "./components/quotation";
import Register from "./components/Register";
import Login from "./components/Login";
import { CartProvider } from "./components/CartContext";
import { UserProvider, useUserContext } from "./components/UserContext"; 
import Footer from "./components/Footer";

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
    const { setUser } = useUserContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle user login
  const handleLogin = async (formData) => {
    try {
      const response = await fetch("http://localhost:5005/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle login error (e.g., invalid credentials)
        const errorData = await response.json();
        console.log(errorData.error);
        return;
      }

      const data = await response.json();
      setUser(data.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5005/api/user/logout", {
        method: "POST",
      });

      if (response.ok) {
        setUser(null);
        setIsLoggedIn(false);
      } else {
        // Handle logout error
        console.log("Error logging out.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CartProvider>
      <UserProvider>
        <Router>
          <div>
          <nav className="navbar navbar-expand-lg navbar-light "style={{ backgroundColor: "#00c000" }}>
              <div className="container-fluid">
                <Link to="/" className="navbar-brand text-light">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFxu27SOpo6W4mFQtXd1UQShj_rRi5FhNdg&usqp=CAU"
                    alt="Safaricom Online Sales App"
                    className="me-2"
                    style={{ height: "60px", width: "60px", borderRadius: "50%" }}
                  />
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
                      <Link to="/" className="nav-link btn btn-light" aria-current="page">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link btn btn-light">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard" className="nav-link btn btn-light">
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/faqs" className="nav-link btn btn-light">
                        FAQs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/quotation" className="nav-link btn btn-light">
                        Quotation
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/register" className="nav-link btn btn-light">
                        Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link btn btn-light">
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
                    <button className="btn btn-light me-2 ms-2" type="submit">
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
                <Route path="/login" element={<Login handleLogout={handleLogout} />} />
                <Route path="/footer" element={<Footer />} />
              </Routes>
            </ErrorBoundary>

            </div>
      {/* Footer */}
      <Footer />
        </Router>
      </UserProvider>
    </CartProvider>
  );
}

export default App;
