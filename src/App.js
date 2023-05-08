import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Inventory from './components/Inventory';
import ShopLocator from './components/ShopLocator';
import AgentManagement from './components/AgentManagement';
import Invoice from './components/Invoice';
import Receipt from './components/Receipt';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route exact path="/" element={Dashboard} />
          <Route path="/inventory" element={Inventory} />
          <Route path="/shop-locator" element={ShopLocator} />
          <Route path="/agent-management" element={AgentManagement} />
          <Route path="/invoice" element={Invoice} />
          <Route path="/receipt" element={Receipt} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
