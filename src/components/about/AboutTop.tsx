import React from 'react';

const AboutTop: React.FC = () => {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden"
      aria-label="Our Company Values"
    >
      {/* Background Image */}
      <img
        src="./imgs/About-Us-Banner-desktop.webp"
        alt="Company Office with Core Values"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#3647AD] via-transparent to-transparent z-10" />

      {/* Text Overlay */}
      <div className="absolute bottom-5 left-0 w-full z-20 text-center px-4">
        <h1 className="text-white text-2xl md:text-4xl font-semibold drop-shadow-lg">
          Committed to Excellence Through Our Values.
        </h1>
      </div>
    </section>
  );
};

export default AboutTop;
