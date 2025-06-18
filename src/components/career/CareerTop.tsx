

import React from 'react';

const  CareerTop: React.FC = () => {
  
  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/imgs/career.jpg')" }}>
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#3647AD] via-transparent to-transparent" />
      {/* Content */}
      <div className="relative z-10 flex justify-center items-end h-full px-2 md:px-16 text-white">
        <div className="text-center mb-4">
          <h1 className="text-white text-2xl md:text-4xl font-semibold drop-shadow-lg">
            Our reinvention starts with you.
         </h1>
          
        </div>
      </div>
    </section>
  );
};

export default  CareerTop;