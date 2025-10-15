import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger and close icons
import { ShopContext } from '../../contexts/ShopContext';

const Navbar = () => {
  const {getTotalCartItems} = useContext(ShopContext);
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Shop', path: '/' },
    { name: 'Men', path: '/mens' },
    { name: 'Women', path: '/womens' },
    { name: 'Kids', path: '/kids' },
  ];

  return (
    <div className="w-full sticky top-0 bg-white shadow z-50">
      <div className="flex items-center justify-between px-6 md:px-[100px] py-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
          <p className="text-xl font-bold text-gray-800">SHOPPER</p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`cursor-pointer transition duration-200 ${
                  currentPath === link.path
                    ? "text-blue-600 font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Login + Cart */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link to='/login'>
            <button className="px-4 py-1.5 border border-blue-600 text-blue-600 font-medium rounded-lg 
                  hover:bg-blue-600 hover:text-white hover:shadow-md 
                  active:scale-95 transition-all duration-300 cursor-pointer">
              Login
            </button>
          </Link>

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
              {getTotalCartItems()}
            </div>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden ml-2">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4">
          <ul className="flex flex-col space-y-3 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`cursor-pointer transition duration-200 ${
                    currentPath === link.path
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
