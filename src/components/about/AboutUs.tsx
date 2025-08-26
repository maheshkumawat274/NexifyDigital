import React from "react";

const JourneySection: React.FC = () => {
  return (
    <section
      className="bg-white text-gray-800 px-4 md:px-20 py-8 sm:py-16"
      aria-labelledby="exl-journey-heading"
    >
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Column: Title + Icon */}
        <div className="w-full md:w-1/3 flex flex-col items-start">
          <h2
            id="exl-journey-heading"
            className="text-3xl md:text-4xl font-semibold mb-2"
          >
            The NexifyDigital Journey
          </h2>
          <div className="w-12 h-1 bg-[#3647AD] mb-10"></div>
          <div className="flex items-center gap-2 mt-4">
            {/* Arrow Icon */}
            <div className="w-0 h-0 border-l-[20px] border-l-[#3647AD] border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent"></div>
            <div className="w-0 h-0 border-l-[20px] border-l-cyan-900 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent"></div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-2/3 space-y-8">
          <p className="text-lg leading-relaxed">
            NexifyDigital was born from a passion for digital innovation and a vision to empower businesses through technology. As a newly launched digital solutions startup, our mission is clear: to deliver powerful websites, engaging designs, and modern marketing that drives results.
          </p>

          <div>
            <h3 className="text-2xl text-[#3647AD] font-semibold mb-2">
              Innovation from the Start
            </h3>
            <p className="text-lg leading-relaxed">
              We believe that innovation doesn't need to wait for scale. At NexifyDigital, we integrate the latest in web development, graphic design, and digital marketing from day one. Our goal is to help businesses—big or small—grow online with bold, creative, and effective digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
