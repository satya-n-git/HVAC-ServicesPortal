import React from "react";

const Services = () => {
  const services = [
    {
      title: "AC Installation",
      description: "Installation of new air conditioning units",
    },
    {
      title: "Maintenance",
      description: "Regular maintenance for optimal performance",
    },
    {
      title: "Repair",
      description: "Repair of broken or malfunctioning units",
    },
    {
      title: "Refrigerant Replacement",
      description: "Refrigerant replacement and topping up",
    },
    {
      title: "Duct Cleaning",
      description: "Duct cleaning to improve air quality",
    },
    {
      title: "Thermostat Installation",
      description: "Thermostat installation and replacement",
    },
    {
      title: "Filter Replacement",
      description: "Filter replacement for better airflow",
    },
    { title: "Leak Detection", description: "Leak detection and repair" },
    {
      title: "System Upgrades",
      description: "System upgrades to more efficient models",
    },
    {
      title: "Emergency Services",
      description: "Emergency repair services available 24/7",
    },
    {
      title: "VRF Projects",
      description: "Implementation of Variable Refrigerant Flow systems",
    },
    {
      title: "Concealed Piping",
      description: "Expert installation of concealed piping systems",
    },
  ];

  return (
    <section className="font-poppins min-h-screen text-primary bg-primary_bg py-24">
      <div className="container mx-auto">
        <h1 className="text-6xl text-secondary font-bold mb-12 text-center">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          We offer a wide range of air conditioning and HVAC services to meet your needs, from installations to emergency repairs. Our experienced technicians ensure high-quality service and your comfort year-round.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl text-cyan-700 font-bold mb-2">{service.title}</h3>
              <hr className="border-cyan-300 mb-2" />
              <p className="text-gray-800">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
