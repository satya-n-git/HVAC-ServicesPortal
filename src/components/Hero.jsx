import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="relative font-poppins h-screen bg-primary_bg text-white">
      <Navbar />
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 lg:px-32">
        <h1 className="text-4xl lg:text-7xl font-bold text-center leading-tight mb-8">
          Efficient Climate Control with <br />
          Expert <span className="font-extralight">AC Installation</span>, <br />
          VRF Projects, and <span className="font-extralight">Concealed Piping</span> Services
        </h1>
        <div className="max-w-lg bg-white bg-opacity-20 rounded-lg p-6 text-center shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="flex flex-col items-center mb-4">
            <div className="flex items-center mb-3">
              <FontAwesomeIcon icon={faHouse} className="text-gray-300 mr-3" />
              <p className="text-gray-300">Hitech City, Hyderabad, 500081, India</p>
            </div>
            <div className="flex items-center mb-3">
              <FontAwesomeIcon icon={faPhoneVolume} className="text-gray-300 mr-3" />
              <p className="text-gray-300">(+91) 81 414 257 9980</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-300 mr-3" />
              <p className="text-gray-300">satya@domain.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
