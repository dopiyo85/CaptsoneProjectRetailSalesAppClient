import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './components/Home';
import Faqs from './components/Faqs';


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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/FAQs">FAQs</Link>
            </li>

          </ul>
        </nav>

        <ErrorBoundary>
          <Routes>
            <Route path="/about" element={<About />}> </Route>
            <Route path="/dashboard" element={<Dashboard />}>
            </Route>
            <Route path="/faqs" element={<Faqs />}> </Route>
            <Route path="/" element={<Home />}> </Route>

          </Routes>
        </ErrorBoundary>

        <footer>


          {/* <span>CAPSTONE &trade;</span>
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="https://web.facebook.com/SafaricomPLC" target="blank" title="facebook"><i class="bi bi-facebook text-light mx-1 mx-md-3"></i></a>
              </li>
              <li>
                <a href="https://twitter.com/safaricom_care?lang=en" target="blank" title="twitter"><i class="bi bi-facebook text-light mx-1 mx-md-3"></i></a>
              </li>
              <li>
                <a href="https://www.instagram.com/safaricomplc_/" target="blank" title="instagram"><i class="bi bi-instagram text-light mx-1 mx-md-3"></i></a>
              </li>
            </ul>
          </div> */}
          <div class="container-fluid d-flex text-light">
            <span>CAPSTONE &trade;</span>

            <span class="navbar-brand fs-6 ms-auto">Follow Us:</span>
            <a href="https://www.instagram.com/safaricomplc_/" target="blank" title="instagram"><i class="bi bi-instagram text-light mx-1 mx-md-3"></i></a>
            <a href="https://web.facebook.com/SafaricomPLC" target="blank" title="facebook"><i class="bi bi-facebook text-light mx-1 mx-md-3"></i></a>
            <a href="http://m.me/SafaricomZuri" target="blank" title="whatsapp"><i class="bi bi-whatsapp text-light mx-1 mx-md-3"></i></a>
            <a href="https://www.tiktok.com/@safaricomplc?lang=en" target="blank" title="tiktok"><i class="bi bi-tiktok text-light mx-1 mx-md-3"></i></a>
          </div>

          {/* <nav class="navbar fixed-bottom navbar-dark bg-primary">
        
        <div class="container-fluid d-flex text-light">
          <span>CAPSTONE &trade;</span>

          <span class="navbar-brand fs-6 ms-auto">Follow Us:</span>
          <a href="https://www.instagram.com/safaricomplc_/"target="blank"title="instagram"><i class="bi bi-instagram text-light mx-1 mx-md-3"></i></a>
          <a href="https://web.facebook.com/SafaricomPLC"target="blank"title="facebook"><i class="bi bi-facebook text-light mx-1 mx-md-3"></i></a>
          <a href="http://m.me/SafaricomZuri" target="blank"title="whatsapp"><i class="bi bi-whatsapp text-light mx-1 mx-md-3"></i></a>
          <a href="https://www.tiktok.com/@safaricomplc?lang=en"target="blank"title="tiktok"><i class="bi bi-tiktok text-light mx-1 mx-md-3"></i></a>
        </div>
      </nav> */}

          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>Email: contact@onlineapp.com</li>
              <li>Phone: 555-555-5555</li>
              <li>Address: 123 Main Street, Anytown USA</li>
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


// function Home() {
//   return <h1>Welcome to the Online App</h1>;
// }

// function About() {
//   return <h1>About Us</h1>;
// }

// function Dashboard() {
//   const [dashboard, setDashboard] = useState(null);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5005/api/dashboard')
//       .then(res => setDashboard(res.data))
//       .catch(err => console.log(err));

//     axios.get('http://localhost:5005/api/products')
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
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Routes>

//         <footer>
//           <div>
//             <h4>Follow Us</h4>
//             <ul>
//               <li>
//                 <a href="https://www.facebook.com/">Facebook</a>
//               </li>
//               <li>
//                 <a href="https://www.twitter.com/">Twitter</a>
//               </li>
//               <li>
//                 <a href="https://www.instagram.com/">Instagram</a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4>Contact Us</h4>
//             <ul>
//               <li>Email: contact@onlineapp.com</li>
//               <li>Phone: 555-555-5555</li>
//               <li>Address: 123 Main Street, Anytown USA</li>
//             </ul>
//           </div>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import './App.css';

// function Home() {
//   return <h1>Welcome to the Online App</h1>;
// }

// function About() {
//   return <h1>About Us</h1>;
// }

// function Dashboard() {
//   const [dashboard, setDashboard] = useState(null);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5005/api/dashboard')
//       .then(res => setDashboard(res.data))
//       .catch(err => console.log(err));

//     axios.get('http://localhost:5005/api/products')
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
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './App.css';

// // function App() {
// //   const [dashboard, setDashboard] = useState(null);
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:5005/api/dashboard')
// //       .then(res => setDashboard(res.data))
// //       .catch(err => console.log(err));

// //     axios.get('http://localhost:5005/api/products')
// //       .then(res => setProducts(res.data))
// //       .catch(err => console.log(err));
// //   }, []);

// //   return (
// //     <div>
// //       {dashboard &&
// //         <>
// //           <h1>{dashboard.name}</h1>
// //           <p>{dashboard.description}</p>
// //         </>
// //       }

// //       <ul>
// //         {products.map(product => (
// //           <li key={product._id}>
// //             <h2>{product.name}</h2>
// //             <p>{product.description}</p>
// //             <p>${product.price}</p>
// //             <p>{product.quantity} in stock</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // function App() {
// // //   const [dashboard, setDashboard] = useState({});
// // //   const [products, setProducts] = useState([]);

// // //   useEffect(() => {
// // //     axios.get('http://localhost:5005/api/dashboard')
// // //       .then(res => setDashboard(res.data))
// // //       .catch(err => console.log(err));

// // //     axios.get('http://localhost:5005/api/products')
// // //       .then(res => setProducts(res.data))
// // //       .catch(err => console.log(err));
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <h1>{dashboard.name}</h1>
// // //       <p>{dashboard.description}</p>

// // //       <ul>
// // //         {products.map(product => (
// // //           <li key={product._id}>
// // //             <h2>{product.name}</h2>
// // //             <p>{product.description}</p>
// // //             <p>${product.price}</p>
// // //             <p>{product.quantity} in stock</p>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // // import React from 'react';
// // // import './App.css';
// // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // import { Container } from 'reactstrap';

// // // import Inventory from './components/Inventory';
// // // import ShopLocator from './components/ShopLocator';
// // // import AgentManagement from './components/AgentManagement';
// // // import Invoice from './components/Invoice';
// // // import Receipt from './components/Receipt';
// // // import Dashboard from './components/Dashboard';
// // // import Home from './components/Home'; // Import the Home component

// // // const App = () => {
// // //   return (
// // //     <Router>
// // //       <Container>
// // //         <Routes>
// // //           <Route exact path="/" element={<Home />} /> {/* Add this new Route element */}
// // //           <Route path="/dashboard" element={<Dashboard />} />
// // //           <Route path="/inventory" element={Inventory} />
// // //           <Route path="/shop-locator" element={ShopLocator} />
// // //           <Route path="/agent-management" element={AgentManagement} />
// // //           <Route path="/invoice" element={Invoice} />
// // //           <Route path="/receipt" element={Receipt} />
// // //         </Routes>
// // //       </Container>
// // //     </Router>
// // //   );
// // // };

// // // export default App;
