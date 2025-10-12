import React from 'react';
import footer_logo from '../assets/logo_big.png';
import instagram_icon from '../assets/instagram_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';
import pintester_icon from '../assets/pintester_icon.png';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-16 px-6 md:px-16 flex flex-col items-center gap-12">
      
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src={footer_logo} alt="Shopper Logo" className="h-12 w-12 object-contain" />
        <span className="text-3xl md:text-4xl font-bold text-gray-800">SHOPPER</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center gap-10 text-gray-700 font-medium text-lg">
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Company</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Products</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Offices</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">About</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="flex gap-4">
        {[instagram_icon, pintester_icon, whatsapp_icon].map((icon, i) => (
          <div key={i} className="p-3 border border-gray-200 rounded-full hover:shadow-md transition-shadow cursor-pointer">
            <img src={icon} alt="Social Icon" className="h-6 w-6 object-contain" />
          </div>
        ))}
      </div>

      {/* Divider and Copyright */}
      <div className="flex flex-col items-center gap-4 w-full">
        <hr className="w-3/4 border-none h-[3px] bg-gray-300 rounded" />
        <p className="text-gray-600 text-center text-sm">
            Copyright © 2023 - All Rights Reserved.
        </p>
    </div>


    </footer>
  );
};

export default Footer;
