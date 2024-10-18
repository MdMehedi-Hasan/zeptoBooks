import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../../public/MainLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-white rounded-t-3xl py-8 shadow-[0px_0px_10px_0px_#00000066]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Brand & About */}
          <div className="mb-6 md:mb-0">
            <img src={logo} alt="logo" />
            <p className="text-gray-400">
              Providing reliable service since 2024. We aim to offer
              high-quality solutions for our customers with the best user
              experience.
            </p>
          </div>

          <div className="flex justify-between mt-8">
            <div className="flex space-x-8 mb-6 md:mb-0">
              <Link to="/" className="hover:text-blue-500 font-semibold">
                Home
              </Link>
              <Link to="/wishlist" className="hover:text-blue-500 font-semibold">
                Wishlist
              </Link>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/zeptoapps"
                target="_blank"
                className="text-gray-400 hover:text-blue-500 transform duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/zeptoapps/"
                target="_blank"
                className="text-gray-400 hover:text-sky-600 transform duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transform duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transform duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>© 2024 Zepto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
