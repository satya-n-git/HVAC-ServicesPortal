import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    let hasErrors = false;
    const newFormErrors = {
      name: false,
      email: false,
      message: false,
    };

    if (formData.name === "") {
      newFormErrors.name = true;
      hasErrors = true;
    }
    if (formData.email === "") {
      newFormErrors.email = true;
      hasErrors = true;
    }
    if (formData.message === "") {
      newFormErrors.message = true;
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(newFormErrors);
      return;
    }

    // Add email sending functionality here
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setFormErrors({
      name: false,
      email: false,
      message: false,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
  };

  return (
    <section className="font-poppins flex flex-col items-center justify-around mx-auto bg-primary_bg min-h-screen py-20">
      <h1 className="text-6xl font-bold text-center text-secondary mb-24">Contact</h1>
      <div className="max-w-7xl w-full bg-white rounded-lg shadow-lg p-10 mb-20">
        <div className="mb-8">
          <h5 className="text-2xl font-semibold text-secondary mb-6">Get in Touch</h5>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faHouse} className="text-secondary mr-4" />
            <p className="text-gray-700">Hitech City, Hyderabad, 500081, India</p>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faPhoneVolume} className="text-secondary mr-4" />
            <p className="text-gray-700">(+91) 81 414 257 9980</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-secondary mr-4" />
            <p className="text-gray-700">satya@domain.com</p>
          </div>
        </div>
        <form onSubmit={sendEmail} noValidate>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            autoComplete="off"
            className={`w-full border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-5 py-4 focus:outline-none focus:ring focus:ring-secondary text-lg transition duration-200 ease-in-out transform hover:shadow-lg hover:-translate-y-1`}
          />
          {formErrors.name && (
            <p className="text-red-500 text-sm mb-2">Please fill out this field</p>
          )}
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="off"
            className={`w-full border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-5 py-4 focus:outline-none focus:ring focus:ring-secondary text-lg transition duration-200 ease-in-out transform hover:shadow-lg hover:-translate-y-1`}
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm mb-2">Please fill out this field</p>
          )}
          <textarea
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            autoComplete="off"
            className={`w-full border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg px-5 py-4 focus:outline-none focus:ring focus:ring-secondary text-lg h-40 resize-none transition duration-200 ease-in-out transform hover:shadow-lg hover:-translate-y-1`}
          />
          {formErrors.message && (
            <p className="text-red-500 text-sm mb-2">Please fill out this field</p>
          )}
          <button className="w-full h-12 bg-secondary text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:bg-sky-400 hover:shadow-lg hover:-translate-y-1 text-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
