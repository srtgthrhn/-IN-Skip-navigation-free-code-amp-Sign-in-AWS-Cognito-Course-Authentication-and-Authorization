import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Auth from './Auth.jsx';
import { AuthContextProvider } from './GlobalContext';

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  </AuthContextProvider>
)