import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';  // Fixed the import path
import { OrderProvider } from './context/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <OrderProvider>
      <App />
    </OrderProvider>
  </AuthProvider>
);

reportWebVitals();
