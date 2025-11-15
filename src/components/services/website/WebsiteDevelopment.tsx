import React from 'react';

const HeroWebsite: React.FC = () => {
  return (
    <div id='website development hero section' aria-label="Nexify Digital website development hero section"
 className="relative w-full h-[70vh] md:h-[70vh] flex items-center justify-center text-center text-white">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          
          backgroundImage: `url('/imgs/nexify-digital-website-development-banner.jpg')`, // Replace with your actual image path
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl p-3 sm:p-6 space-y-6">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Website Development Company in India
        </h1>

        <h2 className="text-xl sm:text-3xl font-semibold text-blue-300">
          We build fast, secure & responsive websites for businesses across India
        </h2>

        <p className="text-sm sm:text-xl text-gray-200">
          From static sites and business websites to eCommerce, blogs, and
          portfolio websites — we deliver stunning digital experiences that work
          across all devices.
        </p>

        <div className="flex justify-center flex-wrap gap-4 pt-4">
          <a href="tel:+916376228917">
          <button 
           aria-label="Call Nexify Digital for website development consultation"
           title="Free Website Consultation"
           className="px-6 py-3 bg-[#273AA0] text-white font-medium rounded-md hover:bg-[#2739a0ec] transition-colors cursor-pointer hover:underline">
            Free Consultation
          </button>
          </a>
          <a
          href="https://portfolio.nexifydigital.in" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer" 
            aria-label="View Nexify Digital portfolio"
            title="View Nexify Digital portfolio"

          >
            <button className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-black transition-colors cursor-pointer">
            View Portfolio
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroWebsite;
