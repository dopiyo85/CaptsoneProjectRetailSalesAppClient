import React from 'react';
import { createRoot } from 'react-dom/client'; // Change the import path
import './index.css';
import App from './App';
import { UserProvider } from './components/UserContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
