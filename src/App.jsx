import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import { CartProvider } from './pages/CartContext';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Cart from './pages/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Items from './pages/Items';
import Contact from './pages/Contact';

import './App.css';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem('token'))

  );

  useEffect(() => {
    const handler = () => {
      setIsAuthenticated(Boolean(localStorage.getItem('token')));

    };
    window.addEventListener('authStateChanged', handler);
    return () => window.removeEventListener('authStateChanged', handler);
  }, []);

  return (
    <CartProvider>
      <ScrollToTop />
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />  


      <Navbar isAuthenticated={isAuthenticated} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/items" element={<Items />} />

        <Route
          path="/cart"
          element={isAuthenticated ? <Cart /> : <Navigate replace to="/login" />}
        />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
