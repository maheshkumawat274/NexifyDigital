import React from "react";
import { FaCogs, FaShieldAlt, FaUsers, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaCogs className="text-4xl text-blue-600 group-hover:rotate-12 transition-transform duration-300" />,
    title: "Custom Software Solutions",
    description: "We deliver tailored software that meets your business needs with high performance and scalability.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-green-600 group-hover:scale-110 transition-transform duration-300" />,
    title: "Secure & Reliable",
    description: "Security-first development to ensure your data and systems remain safe and operational.",
  },
  {
    icon: <FaUsers className="text-4xl text-purple-600 group-hover:-translate-y-2 transition-transform duration-300" />,
    title: "Client-Centric Approach",
    description: "We prioritize your goals to deliver solutions that ensure satisfaction and long-term growth.",
  },
  {
    icon: <FaChartLine className="text-4xl text-orange-500 group-hover:rotate-180 transition-transform duration-300" />,
    title: "Growth-Oriented Results",
    description: "Focused on delivering measurable business outcomes and ROI from day one.",
  },
];

const WhyChooseSoftware: React.FC = () => {
  return (
    <section className="bg-white pt-16 px-4 md:px-12">
      <h2 className="text-4xl font-bold text-center text-[#273AA0] mb-12">
        Why Choose Our Software Development Services?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-gray-100 rounded-xl shadow-md p-6 text-center transition duration-300 hover:shadow-xl hover:bg-white"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#273AA0] mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSoftware;
