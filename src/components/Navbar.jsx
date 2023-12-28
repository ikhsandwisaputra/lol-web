import React, { useState, useEffect } from 'react';
import logolol from '../assets/images/lol.png';
const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isGlassEffect, setIsGlassEffect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsGlassEffect(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-opacity-70 backdrop-filter backdrop-blur-md bg-gray-900 p-4 ${
        isGlassEffect ? 'bg-glass' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <img
          src={logolol}
          alt="League of Legends Logo"
          className="h-10"
        />
        {/* Toggle Button untuk Layar Kecil */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="block font-bold font-poppins md:inline-block text-white hover:underline mr-4">Home</a>
          <a href="#" className="block font-bold font-poppins md:inline-block text-white hover:underline mr-4">Champions</a>
          <a href="#" className="block font-bold font-poppins md:inline-block text-white hover:underline mr-4">Items</a>
          <a href="#" className="block font-bold font-poppins md:inline-block text-white hover:underline">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
