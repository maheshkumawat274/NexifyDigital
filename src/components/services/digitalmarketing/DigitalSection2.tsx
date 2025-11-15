import React from "react";
import { FaCheckDouble } from "react-icons/fa";

const reasons = [
  {
    title: "Proven Results",
    content: "We have a track record of delivering tangible results and improving organic traffic for our clients.",
  },
  {
    title: "Industry Knowledge",
    content: "We stay ahead of industry trends, keeping your strategies effective in a constantly evolving landscape.",
  },
  {
    title: "Custom Solutions",
    content: "Our strategies are customized to your business, ensuring they align with your unique goals.",
  },
  {
    title: "Data-Driven Insights",
    content: "Our decisions are based on data analysis, leading to informed and effective adjustments.",
  },
  {
    title: "Transparent Reporting",
    content: "We provide clear, detailed reports on your campaign’s performance, fostering trust and accountability.",
  },
  {
    title: "Cost-Effective Solutions",
    content: "We provide value for your investment by optimizing your digital presence efficiently.",
  },
  {
    title: "Experienced & Multi-Talented Team",
    content: "Our team comprises seasoned professionals with expertise in various digital marketing aspects.",
  },
  {
    title: "Global Reach",
    content: "We help expand your digital presence across the globe with tailored strategies.",
  },
  {
    title: "Holistic Approach",
    content: "We offer a comprehensive suite of services, allowing you to address multiple aspects under one roof.",
  },
  {
    title: "Long-Term Partnership",
    content: "We aim for lasting relationships, ensuring your continued growth and success online.",
  },
];

const WhyPartner: React.FC = () => {
  return (
    <div className="pt-16 px-4 md:px-20 bg-white text-start md:text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1979] mb-4">
        Why Partner with NexifyDigital – The Leading SEO and Digital Marketing Agency in India
      </h2>
      <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
        Don’t settle for good; go for the best. Choose NexifyDigital for your digital marketing and SEO needs in India.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-4 items-start bg-blue-50 hover:bg-white transition duration-300 border border-blue-100 hover:shadow-lg p-6 rounded-xl"
          >
            <div className="text-blue-700 text-xl mt-1 hover:animate-bounce">
              <FaCheckDouble />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-[#0B1979] mb-1">{item.title}:</h3>
              <p className="text-sm text-gray-700">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyPartner;
