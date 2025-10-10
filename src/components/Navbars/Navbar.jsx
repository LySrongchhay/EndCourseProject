import React from 'react';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-full px-[100px] py-4 shadow-md bg-white flex items-center justify-between">
      {/* Left: Logo and Brand */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
        <p className="text-xl font-bold text-gray-800">SHOPPER</p>
      </div>

      {/* Center: Navigation Links */}
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link
            to="/"
            className={`cursor-pointer transition duration-200 ${currentPath === "/"
                ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600"
                : "hover:text-blue-600"
              }`}
          >
            Shop
          </Link>
        </li>

        <li>
          <Link
            to="/mens"
            className={`cursor-pointer transition duration-200 ${currentPath === "/mens"
                ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600"
                : "hover:text-blue-600"
              }`}
          >
            Men
          </Link>
        </li>

        <li>
          <Link
            to="/womens"
            className={`cursor-pointer transition duration-200 ${currentPath === "/womens"
                ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600"
                : "hover:text-blue-600"
              }`}
          >
            Women
          </Link>
        </li>

        <li>
          <Link
            to="/kids"
            className={`cursor-pointer transition duration-200 ${currentPath === "/kids"
                ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600"
                : "hover:text-blue-600"
              }`}
          >
            Kids
          </Link>
        </li>
      </ul>

      {/* Right: Login and Cart */}
      <div className="flex items-center space-x-6">
        {/* Login Button */}
        <Link to='/login'>
          <button className="px-5 py-1.5 border border-blue-600 text-blue-600 font-medium rounded-lg 
                  hover:bg-blue-600 hover:text-white hover:shadow-md 
                  active:scale-95 transition-all duration-300 cursor-pointer">
            Login
          </button>
        </Link>

        {/* Cart with badge */}
        <div className="relative cursor-pointer group">
          <Link to='/cart'>
            <img
              src={cart_icon}
              alt="Cart"
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
            />
          </Link>
          <div className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold 
                    rounded-full h-4 w-4 flex items-center justify-center 
                    group-hover:scale-110 transition-transform duration-300">
            0
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
