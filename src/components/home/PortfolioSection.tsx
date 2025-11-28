import React from "react";

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className=" pb-10 sm:pb-16 px-4 md:px-16">
      <div className="pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            Our Web Design & Development Portfolio

          </h2><hr/>
      </div>
      
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        
        {/* Left Image */}
        <div className="w-full h-full">
          <img
            src="/imgs/nexifydigital-web-portfolio.webp"
            alt="Nexify Digital web design and development portfolio"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
           Innovative Digital Solutions
          </h2>
          <p className="text-gray-600 mb-6 text-md sm:text-lg leading-relaxed">
            At <span className="font-semibold text-[#233BA7]">NexifyDigital</span>, 
            we craft eco-friendly, business-focused, and innovative digital solutions. 
            From sleek corporate websites to creative portfolios and user-friendly platforms, our projects 
            reflect our expertise as a web development company in India — designed to deliver impact, 
            performance, and growth for businesses of every scale.
            
          </p>
          <a
            href="https://portfolio.nexifydigital.in/"
            target="_blank"
            title="View Nexify Digital's Web Development Portfolio"
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
