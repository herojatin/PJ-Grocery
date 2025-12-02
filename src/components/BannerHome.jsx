import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiTruck, FiShield, FiClock, FiGift } from 'react-icons/fi';
import { adminNavbarStyles } from '../assets/adminStyles';
import bannerFood from '../assets/bannerFood.avif';

const BannerHome = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm) {
      if (onSearch) {
        const searchWords = trimmedTerm.toLowerCase().split(/\s+/);
        onSearch(searchWords.join(''));
      } else {
        navigate(`/items?search=${encodeURIComponent(trimmedTerm)}`);
      }
      setSearchTerm('');
    }
  };

  // Example feature list
  const features = [
    { icon: <FiTruck />, text: 'Fast Delivery' },
    { icon: <FiShield />, text: 'Quality Guaranteed' },
    { icon: <FiClock />, text: '24/7 Service' },
    { icon: <FiGift />, text: 'Exciting Offers' },
  ];

  return (
    <div className="relative overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-teal-50 to-white"></div>

      {/* Decorative Circles */}
      <div className="hidden sm:block absolute top-6 left-6 w-20 h-20 rounded-full bg-teal-100 opacity-30"></div>
      <div className="hidden md:block absolute bottom-12 right-28 w-32 h-32 rounded-full bg-green-200 opacity-30"></div>
      <div className="hidden lg:block absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-lime-200 opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10 mt-8 sm:mt-10 lg:mt-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              <span className="flex items-center justify-center text-sm sm:text-base">
                <FiTruck className="mr-2" /> Free delivery on orders over ₹500
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Fresh{' '}
              <span className="italic text-green-600">Groceries</span>
              <br /> Delivered to Your Door
            </h1>

            <p className={adminNavbarStyles.paragraph}>
              Discover the freshest produce, top-quality groceries, and everyday essentials — 
              all delivered straight to your doorstep with ease and convenience.
            </p>

            {/* Search Box */}
            <form onSubmit={handleSubmit} className={adminNavbarStyles.form}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search for Dry Fruits,Cereals,dairy..."
                className="w-full sm:w-2/3 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className={adminNavbarStyles.searchButton}
              >
                <FiSearch className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </form>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
                >
                  <div className="text-teal-600 text-2xl mb-1">{f.icon}</div>
                  <span className="text-sm font-medium text-gray-700">
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className='relative flex justify-center'>
            <div className={adminNavbarStyles.imageContainer}>
              <div className={adminNavbarStyles.imageInner}>
                <img src={bannerFood} alt="Banner" className='object-cover w-full h-full'/>
              </div>
            </div>

             <div className="hidden sm:block absolute -top-4 -right-4 w-20 h-20 rounded-full bg-mint-200 opacity-20"></div>
   <div className="hidden md:block absolute -bottom-4 -left-4 w-28 h-28 rounded-full bg-teal-100 opacity-20"></div>
   <div className="hidden lg:block absolute top-1/4 -left-6 w-20 h-20 rounded-full bg-seafoam-100 opacity-20"></div>

          </div>
        </div>
      </div>

      {/* Animations or custom styles */}
      <style>{adminNavbarStyles?.customCSS || ''}</style>
    </div>
  );
};

export default BannerHome;
