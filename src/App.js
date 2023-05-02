import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/shop-locator" component={ShopLocator} />
          <Route path="/agent-management" component={AgentManagement} />
          <Route path="/invoice" component={Invoice} />
          <Route path="/receipt" component={Receipt} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
