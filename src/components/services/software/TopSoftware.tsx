// import React from 'react';

// const SoftwareTopsection: React.FC = () => {
//   return (
//     <div
//     id="software-development-company-delhi"
//       aria-label="Custom software development company in Delhi NCR by Nexify Digital"
//      className="relative w-full h-[70vh] md:h-[70vh] flex items-center justify-center text-center text-white">
//       {/* Background image with overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url('/imgs/software-development-company-delhi-india.jpeg')`, // Replace with your actual image path
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-60"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-3xl p-6 space-y-6">
//         <h1 className="text-3xl sm:text-5xl font-bold">
//           Custom Software Development Solutions
//         </h1>

//         <h2 className="text-xl sm:text-3xl font-semibold text-blue-300">
//           Scalable, secure & intelligent software tailored to your business
//         </h2>

//         <p className="text-sm sm:text-xl text-gray-200">
//           We build robust software solutions for web, desktop, and enterprise systems — streamlining your operations and driving digital transformation for long-term growth.
//         </p>

//         <div className="flex justify-center flex-wrap gap-4 pt-4">
//           <a href="tel:+916376228917">
//             <button className="px-6 py-3 bg-[#273AA0] text-white font-medium rounded-md hover:bg-[#2739a0ec] transition-colors cursor-pointer hover:underline">
//               Free Consultation
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SoftwareTopsection;

import React from 'react';

const SoftwareTopsection: React.FC = () => {
  return (
    <div
      id="software-development-company-delhi"
      aria-label="Custom software development company in Delhi NCR by Nexify Digital"
      className="relative w-full h-[70vh] md:h-[70vh] flex items-center justify-center text-center text-white"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/imgs/software-development-company-delhi-india.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Invisible SEO alt text for background */}
      <span className="sr-only">
        Nexify Digital – software development company in Delhi NCR, India
      </span>

      {/* Content */}
      <div className="relative z-10 max-w-3xl p-6 space-y-6">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Custom Software Development Solutions
        </h1>

        <h2 className="text-xl sm:text-3xl font-semibold text-blue-300">
          Scalable, secure & intelligent software tailored to your business
        </h2>

        <p className="text-sm sm:text-xl text-gray-200">
          As a trusted software development company in Delhi NCR, we build
          robust web, desktop, and enterprise software solutions that improve
          efficiency, streamline operations, and support long-term digital
          transformation.
        </p>

        <div className="flex justify-center flex-wrap gap-4 pt-4">
          <a
            href="tel:+916376228917"
            title="Free software development consultation – Nexify Digital"
            aria-label="Call Nexify Digital for custom software development consultation"
          >
            <button className="px-6 py-3 bg-[#273AA0] text-white font-medium rounded-md hover:bg-[#2739a0ec] transition-colors cursor-pointer hover:underline">
              Free Consultation
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SoftwareTopsection;
