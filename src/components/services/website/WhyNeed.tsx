// components/WhyNeedWebsite.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaUsers, FaChartLine, FaSearch } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaGlobe className="text-3xl text-indigo-500" />,
    title: "Online Presence 24/7",
    desc: "A website allows customers to find you anytime, from anywhere.",
  },
  {
    icon: <FaUsers className="text-3xl text-pink-500" />,
    title: "Build Credibility",
    desc: "A professional website helps build trust and authority in your industry.",
  },
  {
    icon: <FaChartLine className="text-3xl text-yellow-500" />,
    title: "Boost Sales",
    desc: "Websites make it easier to convert visitors into paying customers.",
  },
  {
    icon: <FaSearch className="text-3xl text-green-500" />,
    title: "SEO Visibility",
    desc: "With the right SEO, your website can rank higher in search results.",
  },
];

const WhyNeedWebsite: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#273AA0]">Why You Need a Website</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Whether you're a small business or a growing enterprise, having a website is essential to reaching your audience and scaling up.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNeedWebsite;
