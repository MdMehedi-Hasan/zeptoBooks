import React, { useState } from "react";
import { FaSearch, FaHome, FaHeart, FaBars } from "react-icons/fa";
import logo from "../../../public/MainLogo.png";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = ({ setIsSearch, setSearchItem }) => {
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
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden md:flex md:ml-6 items-center relative w-full max-w-md">
            <input
              type="text"
              className="border border-gray-300 rounded py-2 px-4 w-full pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
              placeholder="Search..."
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <span className="absolute left-4 text-gray-400">
              <LuSearch
                className="w-5 h-5 cursor-pointer"
                onClick={() => setIsSearch(true)}
              />
            </span>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-500 flex items-center"
            >
              <FaHome className="mr-2" /> Home
            </Link>
            <Link
              to="/wishlist"
              className="text-gray-700 hover:text-indigo-500 flex items-center"
            >
              <FaHeart className="mr-2" /> Wishlist
            </Link>
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
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-500 flex items-center justify-center"
            >
              <FaHome className="mr-2" /> Home
            </Link>
            <Link
              to="/wishlist"
              className="text-gray-700 hover:text-indigo-500 flex items-center justify-center"
            >
              <FaHeart className="mr-2" /> Wishlist
            </Link>
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
