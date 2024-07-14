import React from "react";

const Footer = () => {
  return (
    <footer className="font-poppins bg-secondary_bg text-primary py-10">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-center">
        {/* Logo and Company Info */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold">CSS Air Coolings</h2>
          <p className="text-gray-300 mt-2">Your comfort is our priority!</p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <a href="#services" className="text-lg hover:text-secondary transition duration-300">Services</a>
          <a href="#about" className="text-lg hover:text-secondary transition duration-300">About Us</a>
          <a href="#contact" className="text-lg hover:text-secondary transition duration-300">Contact</a>
        </div>

        {/* Copyright Info */}
        <div className="mt-6 md:mt-0">
          <p className="text-gray-300">© {new Date().getFullYear()} CSS Air Coolings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
