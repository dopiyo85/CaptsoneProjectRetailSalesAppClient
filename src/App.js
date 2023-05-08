import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [dashboard, setDashboard] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5005/api/dashboard')
      .then(res => setDashboard(res.data))
      .catch(err => console.log(err));

    axios.get('http://localhost:5005/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>{dashboard.name}</h1>
      <p>{dashboard.description}</p>

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

export default App;
// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Container } from 'reactstrap';

// import Inventory from './components/Inventory';
// import ShopLocator from './components/ShopLocator';
// import AgentManagement from './components/AgentManagement';
// import Invoice from './components/Invoice';
// import Receipt from './components/Receipt';
// import Dashboard from './components/Dashboard';
// import Home from './components/Home'; // Import the Home component

// const App = () => {
//   return (
//     <Router>
//       <Container>
//         <Routes>
//           <Route exact path="/" element={<Home />} /> {/* Add this new Route element */}
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/inventory" element={Inventory} />
//           <Route path="/shop-locator" element={ShopLocator} />
//           <Route path="/agent-management" element={AgentManagement} />
//           <Route path="/invoice" element={Invoice} />
//           <Route path="/receipt" element={Receipt} />
//         </Routes>
//       </Container>
//     </Router>
//   );
// };

// export default App;
