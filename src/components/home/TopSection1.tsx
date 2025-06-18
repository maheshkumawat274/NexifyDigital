import React from 'react';

const TopSection1: React.FC = () => {
  
  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/imgs/home.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 flex md:flex-col justify-center items-end md:items-start h-full px-2 md:px-16 text-white">
        <div className="max-w-xl text-center sm:text-start">
          <div>
            <h1 className="text-3xl md:text-7xl font-bold mb-4">Driving Success Through Expert IT Consulting Services</h1>
            <h2 className="text-sm md:text-2xl mb-6">
              Agility, Ingenuity, Reliability: Powering Progress.
            </h2>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TopSection1;