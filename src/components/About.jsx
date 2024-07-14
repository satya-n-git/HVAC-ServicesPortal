import React from "react";
import workerImage from "../assets/images/worker-image.jpg";

const About = () => {
  return (
    <section className="font-poppins h-screen text-primary bg-primary_bg flex flex-col justify-center items-center p-20 pt-20">
      <h1 className="text-6xl font-bold mb-8 text-center text-secondary mt-4">About Us</h1>
      <div className="max-w-7xl flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-10">
          <img src={workerImage} alt="Worker" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 mb-4">
            Our client is a leader in HVAC solutions, dedicated to providing top-notch air conditioning and refrigeration services. With years of experience and a team of skilled technicians, we ensure that our clients receive the best service possible. From installation to maintenance, we are committed to enhancing comfort and efficiency in every space we work on.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-4">
            Our mission is to deliver high-quality HVAC services that exceed our clients' expectations. We believe in using the latest technology and industry best practices to ensure that our clients get the most reliable and efficient solutions. Our team is always ready to tackle any challenge, ensuring that every project is completed to the highest standards.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <p className="text-lg text-gray-600 mb-4">
            Whether you need a new AC system installed, regular maintenance, or emergency repairs, our team is here to help. We take pride in our work and are dedicated to providing exceptional service to our clients. Trust us to keep your spaces comfortable and efficient all year round.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 mb-4">
            We value integrity, customer satisfaction, and continuous improvement. Our team is committed to upholding these values in every project we undertake. We strive to build lasting relationships with our clients based on trust and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
