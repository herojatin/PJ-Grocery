import React, { useEffect, useRef, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '/src/assets/pj logo.jpg';

import { FiUser, FiMenu, FiX, FiHome, FiUsers, FiMail } from 'react-icons/fi';

import { FaOpencart } from 'react-icons/fa';

import { useCart } from '../pages/CartContext';

import { adminNavbarStyles } from '../assets/adminStyles';



const Navbar = () => {

  const { cartCount } = useCart();

  const location = useLocation();

  const navigate = useNavigate();



  const [activeTab, setActiveTab] = useState(location.pathname);

  const [isLoggedin, setIsLoggedin] = useState(Boolean(localStorage.getItem('token')));

  const [isOpen, setIsOpen] = useState(false);

  const [cartBounce, setCartBounce] = useState(false);

  const [scrolled, setScrolled] = useState(false);



  const mobileMenuRef = useRef(null);

  const prevCartCountRef = useRef(cartCount);



  // FIXED: paths must match App.jsx exactly

  const navItems = [

    { name: 'Home', path: '/', icon: <FiHome /> },

    { name: 'Items', path: '/items', icon: <FiUsers /> },

    { name: 'Contact', path: '/contact', icon: <FiMail /> },

  ];



  // Update active tab on route change

  useEffect(() => {

    setActiveTab(location.pathname);

    setIsOpen(false);

  }, [location]);



  // Scroll effect

  useEffect(() => {

    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);



  // Cart bounce animation

  useEffect(() => {

    if (cartCount > prevCartCountRef.current) {

      setCartBounce(true);

      const timer = setTimeout(() => setCartBounce(false), 800);

      return () => clearTimeout(timer);

    }

    prevCartCountRef.current = cartCount;

  }, [cartCount]);



  // Login state listener

  useEffect(() => {

    const handler = () => {

      setIsLoggedin(Boolean(localStorage.getItem('token')));

    };

    window.addEventListener('authStateChanged', handler);

    return () => window.removeEventListener('authStateChanged', handler);

  }, []);



  // Close sidebar if clicking outside

  useEffect(() => {

    const handleOutsideClick = (e) => {

      if (isOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {

        setIsOpen(false);

      }

    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);

  }, [isOpen]);



  const handleLogout = () => {

    localStorage.removeItem('token');

    window.dispatchEvent(new Event('authStateChanged'));

    navigate('/');

    setIsOpen(false);

  };



  return (

    <nav

      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${

        scrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900/90'

      } text-white`}

    >

      <div className="flex justify-between items-center px-1 py-1">





        {/* Logo */}

        <Link to="/" className="flex items-center space-x-2">

          <img src={logo} alt="Logo" className="h-25 w-25" />

          <span className="font-bold text-xl">PJ</span>

        </Link>



        {/* Desktop Navigation */}

        <div className="hidden md:flex space-x-4">

          {navItems.map((item) => (

            <Link

              key={item.name}

              to={item.path}

              className={`flex items-center px-3 py-2 rounded-lg ${

                activeTab === item.path

                  ? 'bg-emerald-700 text-white'

                  : 'text-emerald-200 hover:bg-emerald-700/50'

              }`}

            >

              <span className="mr-1">{item.icon}</span>

              {item.name}

            </Link>

          ))}

        </div>



        {/* Right Side */}

        <div className="flex items-center space-x-3">



          {/* Login / Logout */}

          {isLoggedin ? (

            <button

              onClick={handleLogout}

              className="flex items-center px-3 py-2 rounded-lg hover:bg-emerald-700"

            >

              <FiUser className="w-5 h-5" />

              <span className="ml-1">Logout</span>

            </button>

          ) : (

            <Link

              to="/login"

              className="flex items-center px-3 py-2 rounded-lg hover:bg-emerald-700"

            >

              <FiUser className="w-5 h-5" />

              <span className="ml-1">Login</span>

            </Link>

          )}



          {/* Cart */}

          <Link to="/cart" className="relative">

            <FaOpencart

              className={`w-6 h-6 transition-transform ${

                cartBounce ? 'animate-bounce' : ''

              }`}

            />

            {cartCount > 0 && (

              <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full px-1">

                {cartCount}

              </span>

            )}

          </Link>



          {/* Mobile Menu Button */}

          <button onClick={() => setIsOpen(true)} className="md:hidden">

            <FiMenu className="w-6 h-6" />

          </button>

        </div>

      </div>



      {/* Dark Overlay */}

      <div

        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${

          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'

        }`}

        onClick={() => setIsOpen(false)}

      />



      {/* Sidebar */}

      <div

        ref={mobileMenuRef}

        className={`fixed top-0 left-0 w-64 h-full bg-emerald-800 z-50 p-4 transform transition-transform duration-300 ${

          isOpen ? 'translate-x-0' : '-translate-x-full'

        }`}

      >

        <button onClick={() => setIsOpen(false)} className="mb-4 text-white">

          <FiX className="w-6 h-6" />

        </button>



        <div className="flex flex-col space-y-3 mt-4">



          {navItems.map((item) => (

            <Link

              key={item.name}

              to={item.path}

              className="flex items-center px-2 py-2 rounded-lg text-white hover:bg-emerald-700"

              onClick={() => {

                setActiveTab(item.path);

                setIsOpen(false);

              }}

            >

              <span className="mr-2">{item.icon}</span>

              {item.name}

            </Link>

          ))}



          {isLoggedin ? (

            <button

              onClick={handleLogout}

              className="flex items-center px-2 py-2 rounded-lg text-white hover:bg-emerald-700 mt-2"

            >

              <FiUser className="mr-2" />

              Logout

            </button>

          ) : (

            <Link

              to="/login"

              className="flex items-center px-2 py-2 rounded-lg text-white hover:bg-emerald-700 mt-2"

              onClick={() => setIsOpen(false)}

            >

              <FiUser className="mr-2" />

              Login

            </Link>

          )}



        </div>

      </div>



      <style>{adminNavbarStyles?.customCSS || ''}</style>

    </nav>

  );

};



export default Navbar;