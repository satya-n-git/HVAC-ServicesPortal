import React from "react";
import { Carousel } from "@material-tailwind/react";

const Projects = () => {
  const projects = [
    {
      title: "Office AC Installation",
      description:
        "Installed an energy-efficient AC system for a corporate office.",
      date: "January 2024",
    },
    {
      title: "VRF System Implementation",
      description:
        "Implemented a Variable Refrigerant Flow system for a retail space.",
      date: "February 2024",
    },
    {
      title: "Residential Duct Cleaning",
      description:
        "Completed duct cleaning service for a residential home to improve air quality.",
      date: "March 2024",
    },
    {
      title: "Concealed Piping Project",
      description:
        "Installed concealed piping in a luxury apartment for better aesthetics.",
      date: "April 2024",
    },
    {
      title: "Emergency Repair Service",
      description:
        "Provided 24/7 emergency repair services for a malfunctioning AC unit.",
      date: "May 2024",
    },
  ];

  return (
    <section className="font-poppins min-h-screen text-primary bg-primary_bg flex flex-col justify-around items-center py-20">
      <h1 className="text-6xl text-secondary font-semibold mb-10">
        Projects
      </h1>
      <div className="max-w-7xl text-center px-8 pb-2 pt-6 bg-white shadow-lg rounded-lg mb-28">
        <p className="text-md lg:text-lg text-gray-600 mb-8">
          Our client, a leader in HVAC solutions, has been transforming spaces
          with innovative air conditioning systems and cutting-edge technology.
          Discover how we enhance comfort and efficiency through our expertly
          executed projects. Showcasing our finest work, each project
          exemplifies our commitment to quality and client satisfaction.
        </p>
        
        <h2 className="text-3xl text-secondary font-semibold mb-4">
          Our Featured Projects
        </h2>

        <Carousel
          className="rounded-lg"
          autoplay={true}
          loop={true}
          interval={3000}
         
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-secondary_bg rounded-md shadow-md mb-8"
            >
              <h3 className="text-2xl text-secondary font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-primary mb-2">{project.description}</p>
              <p className="text-primary italic mb-3">{project.date}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
