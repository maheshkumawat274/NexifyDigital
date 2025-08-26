import React from "react";

const PortfolioSection: React.FC = () => {
  return (
    <section className="bg-gray-50 pb-10 sm:pb-16 px-6 md:px-12">
      <div className="pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            Our Portfolio
          </h2><hr/>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        
        {/* Left Image */}
        <div className="w-full h-full">
          <img
            src="/imgs/img-main-careers-2018_1.webp"
            alt="NexifyDigital Portfolio"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
           Innovative Digital Solutions
          </h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            At <span className="font-semibold text-[#233BA7]">NexifyDigital</span>, 
            we craft eco-friendly, business-focused, and innovative digital 
            solutions. From sleek corporate websites to creative portfolios and 
            user-friendly platforms, our projects are designed to deliver impact, 
            performance, and growth for businesses of every scale.
          </p>
          <a
            href="https://portfolio.nexifydigital.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-42 border-1 border-[#233BA7] hover:bg-[#233BA7] text-center text-black hover:text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
