import React from 'react';
import { BsDot } from 'react-icons/bs';

const contentPoints = [
  {
    title: 'Design and UX that ensures your app will be loved and used',
    description:
      'We create visually appealing and highly intuitive mobile apps that offer exceptional user experience, keeping users engaged and coming back.',
  },
  {
    title: 'Enterprise-grade development secures reliability and quality',
    description:
      'Our scalable app solutions are built using the latest technologies and best practices, ensuring security, performance, and long-term success.',
  },
  {
    title: 'A proven and tested process guarantees your success',
    description:
      'We follow an agile and transparent process from ideation to launch, ensuring every phase of development is well-planned and effective.',
  },
  {
    title: 'Start-to-end app development agency',
    description:
      'From planning, UI/UX design, development, testing to deployment—we provide full-cycle app development tailored to your business goals.',
  },
];

const AppSection1: React.FC = () => {
  return (
    <div
    id="custom-mobile-app-features"
      aria-label="Why choose Nexify Digital for mobile app development"

     className=" py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/imgs/home-mockup.png" // replace with actual path
            alt="Mobile app interface mockup designed by Nexify Digital"
            loading="lazy"
            className="w-[90%] max-w-md drop-shadow-2xl"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 space-y-8">
          {contentPoints.map((point, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-xl flex-shrink-0">
                <div className='border-1 border-blue-600 rounded-full h-8 w-8 flex justify-center items-center '>
                  {index + 1}
                </div>
                <BsDot className="text-blue-400 text-2xl" />
                <BsDot className="text-blue-400 text-2xl" />
                <BsDot className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppSection1;
