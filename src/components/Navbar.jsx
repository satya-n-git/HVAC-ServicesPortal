import React from "react";
import { Link } from "react-scroll";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-secondary_bg z-10 font-poppins fixed">
      <div className="max-w-7xl mx-auto px-6 lg:px-32 flex justify-between items-center py-4 text-white">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-2" />
          <h1 className="font-bold text-xl lg:text-2xl tracking-wide">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="cursor-pointer hover:text-white"
            >
              CSS AIR COOLINGS
            </Link>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 lg:space-x-16">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            
            activeClass="active"
            className="cursor-pointer hover:text-white"
          >
            Home
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            className="cursor-pointer hover:text-white"
          >
            Services
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
            activeClass="active"
            className="cursor-pointer hover:text-white"
          >
            Projects
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            
            activeClass="active"
            className="cursor-pointer hover:text-white"
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            activeClass="active"
            className="cursor-pointer hover:text-white"
          >
            Contact
          </Link>
          <Link
            to="faq"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            className="cursor-pointer hover:text-white"
          >
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
