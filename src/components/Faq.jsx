import React, { useState } from "react";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide HVAC installation, maintenance, and repair services.",
    },
    {
      question: "How can I schedule a service?",
      answer: "You can schedule a service through our website or by calling us.",
    },
    {
      question: "What are your service hours?",
      answer: "We are available 24/7 for emergency services and regular hours for maintenance.",
    },
    {
      question: "Do you provide warranties for your services?",
      answer: "Yes, we offer warranties on all our installations and repairs.",
    },
    {
      question: "How do I know if my AC needs servicing?",
      answer: "Common signs include unusual noises, reduced cooling efficiency, and increased energy bills.",
    },
    {
      question: "What brands do you work with?",
      answer: "We work with all major HVAC brands, including Carrier, Trane, and Lennox.",
    },
    {
      question: "Can you assist with energy efficiency audits?",
      answer: "Yes, we provide energy audits to help optimize your HVAC systems for efficiency.",
    },
    {
      question: "Is financing available for large projects?",
      answer: "Yes, we offer financing options for larger installations to suit your budget.",
    },
    {
      question: "What should I do in case of an HVAC emergency?",
      answer: "Contact us immediately for emergency repair services available 24/7.",
    },
    {
      question: "How can I maintain my HVAC system?",
      answer: "Regular maintenance includes changing filters, cleaning ducts, and scheduling annual check-ups.",
    },
  ];

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="font-poppins bg-primary_bg min-h-screen py-20">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-6xl font-bold mb-10 text-center text-secondary">FAQs</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-8">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left bg-secondary_bg rounded-lg shadow-md p-4 focus:outline-none transition-all duration-300 ease-in-out"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-primary">{faq.question}</span>
                <span className="text-primary">{expandedIndex === index ? "-" : "+"}</span>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="p-4 bg-white rounded-b-lg">
                <p className="text-gray-800">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
