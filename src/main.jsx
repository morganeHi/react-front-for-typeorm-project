import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext';
import './styles/index.css'
import './styles/navbar.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <App />
      </AuthProvider>
  </React.StrictMode>,
);
