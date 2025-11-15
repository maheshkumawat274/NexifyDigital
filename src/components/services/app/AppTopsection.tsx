import React from 'react';

const AppTopsection: React.FC = () => {
  return (
    <div 
     id="app-development-hero"
      aria-label="Mobile app development company in Delhi, India"
    className="relative w-full h-[70vh] md:h-[70vh] flex items-center justify-center text-center text-white">
      {/* Background image with overlay */}
      <div
      
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/imgs/Mobile-App-Development.avif')`, // Replace with your actual image path
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl p-6 space-y-6">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Custom Mobile App Development
        </h1>

        <h2 className="text-xl sm:text-3xl font-semibold text-blue-300">
          Scalable & high-performance apps tailored to your business goals
        </h2>

        <p className="text-sm sm:text-xl text-gray-200">
          As a leading mobile app development company in Delhi NCR, we build 
          fast, secure, and user-friendly Android, iOS, and cross-platform 
          applications that help businesses grow across India.
        </p>

        <div className="flex justify-center flex-wrap gap-4 pt-4">
          <a href="tel:+916376228917">
            <button aria-label="Call Nexify Digital for mobile app development consultation" className="px-6 py-3 bg-[#273AA0] text-white font-medium rounded-md hover:bg-[#2739a0ec] transition-colors cursor-pointer hover:underline">
              Free Consultation
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppTopsection;
