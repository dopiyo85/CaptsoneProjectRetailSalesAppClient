import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
// import './styles.css';
import Home from './components/Home';
import Faqs from './components/Faqs';
import ShoppingCart from './components/ShoppingCart';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error);
    console.log('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// function Home() {
//   return <h1>Welcome to the Online App</h1>;
// }

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing quality online products to our customers.</p>
    </div>
  );
}

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://captsoneprojectretailsalesappbackend.onrender.com/api/dashboard')
      .then(res => setDashboard(res.data))
      .catch(err => console.log(err));

    axios.get('https://captsoneprojectretailsalesappbackend.onrender.com/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {dashboard &&
        <>
          <h1>{dashboard.name}</h1>
          <p>{dashboard.description}</p>
        </>
      }

      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>{product.quantity} in stock</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand text-light">Safaricom Online Sales App</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link btn btn-success" aria-current="page">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link btn btn-success">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link btn btn-success">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/faqs" className="nav-link btn btn-success">FAQs</Link>
                  </li>
                </ul>
                <form className="d-flex ms-2 me-4">
                  <input className="form-control me-2 ms-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-success me-2 ms-2" type="submit">Search</button>
                  <Link to="/shoppingcart" className="nav-link btn btn-success">Cart</Link>
                </form>
              </div>
            </div>
          </nav>
        </div>


        <ErrorBoundary>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </ErrorBoundary>
        
        <footer id="footer" className="bg-success text-light">
          <div className="container-fluid d-flex">
            <span className="navbar-brand">CAPSTONE &trade;</span>
            <span class="navbar-brand fs-6 ms-auto">Follow Us:</span>
              <div class="social-icons">
                <a href="https://www.instagram.com/safaricomplc_/" target="_blank" rel="noreferrer" title="instagram">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="https://web.facebook.com/SafaricomPLC" target="_blank" rel="noreferrer" title="facebook">
                  <i class="bi bi-facebook"></i> 
                </a> 
                <a href="http://m.me/SafaricomZuri" target="_blank" rel="noreferrer" title="whatsapp">
                  <i class="bi bi-whatsapp"></i>
                </a>
                <a href="https://www.tiktok.com/@safaricomplc?lang=en" target="_blank" rel="noreferrer" title="tiktok">
                  <i class="bi bi-tiktok"></i>
                </a>
              </div>
                      
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>Email: customercare@safaricom.co.ke</li>
              <li>Phone: 100 for prepaid and 200 for postpaid</li>
              <li>Addres: 123 Main Street, Anytown USA</li>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import './App.css';
// import Home from './components/Home';
// import Faqs from './components/Faqs';


// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.log('Error:', error);
//     console.log('Error Info:', errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children;
//   }
// }
// function About() {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>We are a company dedicated to providing quality online products to our customers.</p>
//     </div>
//   );
// }

// function Dashboard() {
//   const [dashboard, setDashboard] = useState(null);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('https://captsoneprojectretailsalesappbackend.onrender.com/api/dashboard')
//       .then(res => setDashboard(res.data))
//       .catch(err => console.log(err));

//     axios.get('https://captsoneprojectretailsalesappbackend.onrender.com/api/products')
//       .then(res => setProducts(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div>
//       {dashboard &&
//         <>
//           <h1>{dashboard.name}</h1>
//           <p>{dashboard.description}</p>
//         </>
//       }

//       <ul>
//         {products.map(product => (
//           <li key={product._id}>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//             <p>{product.quantity} in stock</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About Us</Link>
//             </li>
//             <li>
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//             <li>
//               <Link to="/FAQs">FAQs</Link>
//             </li>

//           </ul>
//         </nav>

//         <ErrorBoundary>
//           <Routes>
//             <Route path="/about" element={<About />}> </Route>
//             <Route path="/dashboard" element={<Dashboard />}>
//             </Route>
//             <Route path="/faqs" element={<Faqs />}> </Route>
//             <Route path="/" element={<Home />}> </Route>

//           </Routes>
//         </ErrorBoundary>

//         <footer>

         
//           <div class="container-fluid d-flex text-light">
//             <span>CAPSTONE &trade;</span>

//             <span class="navbar-brand fs-6 ms-auto">Follow Us:</span>
//             <a href="https://www.instagram.com/safaricomplc_/" target="blank" title="instagram"><i class="bi bi-instagram text-light mx-1 mx-md-3"></i></a>
//             <a href="https://web.facebook.com/SafaricomPLC" target="blank" title="facebook"><i class="bi bi-facebook text-light mx-1 mx-md-3"></i></a>
//             <a href="http://m.me/SafaricomZuri" target="blank" title="whatsapp"><i class="bi bi-whatsapp text-light mx-1 mx-md-3"></i></a>
//             <a href="https://www.tiktok.com/@safaricomplc?lang=en" target="blank" title="tiktok"><i class="bi bi-tiktok text-light mx-1 mx-md-3"></i></a>
//           </div>
        
//           <div>
//             <h4>Contact Us</h4>
//             <ul>
//               <li>Email: customercare@safaricom.co.ke</li>
//               <li>Phone: 100 for prepaid and 200 for postpaid</li>
//               <li>Addres: 123 Main Street, Anytown USA</li>
//             </ul>
//           </div>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;
