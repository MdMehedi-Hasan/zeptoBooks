import React, { useState } from 'react';
import { FaSearch, FaHome, FaHeart, FaBars } from 'react-icons/fa';
import logo from '../../../public/MainLogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="logo" />
          </div>

          {/* Search bar */}
          <div className="hidden md:flex md:ml-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 py-2 pl-8 pr-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <FaSearch className="absolute left-2 top-2 text-gray-500" />
            </div>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-500 flex items-center">
              <FaHome className="mr-2" /> Home
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-500 flex items-center">
              <FaHeart className="mr-2" /> Wishlist
            </a>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              <FaBars className="text-2xl text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-700 hover:text-indigo-500 block flex items-center">
              <FaHome className="mr-2" /> Home
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-500 block flex items-center">
              <FaHeart className="mr-2" /> Wishlist
            </a>
            <div className="relative mt-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-8 pr-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <FaSearch className="absolute left-2 top-2 text-gray-500" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
