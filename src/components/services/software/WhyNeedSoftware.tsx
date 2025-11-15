import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBolt, FaUsers, FaChartLine } from 'react-icons/fa';

const WhySoftware: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const points = [
    {
      icon: <FaBolt aria-hidden="true" className="text-4xl text-blue-600" />,
      title: "Boost Efficiency",
      desc: "Automate repetitive tasks and reduce human error to save time and cost — ideal for business automation and workflow optimization.",
    },
    {
      icon: <FaUsers aria-hidden="true" className="text-4xl text-green-600" />,
      title: "Better User Experience",
      desc: "Offer seamless digital services to customers and enhance engagement with custom software designed for real-world use.",
    },
    {
      icon: <FaChartLine aria-hidden="true" className="text-4xl text-purple-600" />,
      title: "Data-Driven Growth",
      desc: "Make informed decisions using real-time analytics and insights powered by modern software development.",
    },
  ];

  return (
    <section
      id="why-you-need-software"
      aria-label="Why businesses need custom software development services in Delhi NCR and India"
      className="bg-white px-4 md:px-20 text-gray-800 py-10"
    >
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-[#273AA0] mb-4">
          Why You Need Software?
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          In today's digital world, software is essential for streamlining operations,
          improving customer service, and staying competitive — whether you are a startup
          or an enterprise in India or Delhi NCR.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {points.map((point, index) => (
          <div
            key={index}
            role="article"
            className="bg-gray-100 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <div className="mb-4">{point.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
            <p className="text-gray-600">{point.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySoftware;
