import React, { useEffect, useState } from 'react';
import './career.css'
const texts = [
  'Design',
  'Develop',
  'Grow',
  'Innovate',
];

const images = [
  './imgs/career-at-nexify-digital1.png',
  './imgs/career-at-nexify-digital.webp',
  './imgs/job-search-career-advice-stories.jpg',
  './imgs/career-at-nexify-digital4.jpg',
];

const TopSectionCareer: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="career-section" className="pb-10 flex items-center justify-center px-6 md:px-20 bg-white z-30">
     
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl">
        <div className="text-center md:text-left mb-8 md:mb-0 max-w-xl mt-10 sm:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-[#3647AD] transition-all duration-500">{texts[index]}</span>{' '}<br/>
            <span className="text-gray-600">your career with Nexify Digital</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            At our company, we’re looking for passionate individuals who want to grow and make an impact in tech.
          </p>
        </div>

        <div className="relative w-72 h-72 md:w-96 md:h-96">
         
         <div className="absolute top-[-20px] left-[-20px] w-full h-full border-2 border-gray-300 rounded-full animate-spin-slow flex z-10" style={{ animationDuration: '10s' }}></div>
          
          {/* Rotating yellow dot on top of gray circle */}
          <div className="orbit-container">
            <div className="orbit-dot"></div>
          </div>
          
          <img
            src={images[index]}
            alt={`Career at Nexify Digital – ${texts[index]} your career`}

            className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl flex relative z-10"
          />


        </div>
       



      </div>
    </section>
  );
};

export default TopSectionCareer;


// Add this to your tailwind.config.js:
// extend: {
//   animation: {
//     'spin-slow': 'spin 8s linear infinite',
//   },
// }
