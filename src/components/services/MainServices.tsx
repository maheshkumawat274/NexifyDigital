import React from 'react';
import { FaCode, FaMobileAlt, FaBullhorn, FaVideo, FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProServicesSection from './ProServicesSection';

const services = [
  {
    title: "Website Development",
    description: "We create responsive, modern websites tailored to your business needs.",
    icon: <FaCode className="text-3xl text-green-500" />,
    link: '/services/website_development',
    aria: "Website Development — website development company in Delhi NCR",
    titleAttr: "Website Development | Nexify Digital",
    bg: "/imgs/services-web-development.webp"
  },
  {
    title: "Mobile App Development",
    description: "High-performance iOS & Android apps with seamless design & functionality.",
    icon: <FaMobileAlt className="text-3xl text-green-500" />,
    link: '/services/app_development',
    aria: "Mobile App Development — mobile app development company in Delhi",
    titleAttr: "Mobile App Development | Nexify Digital",
    bg: "/imgs/mobile-app-development-delhi.jpg"
  },
  {
    title: "Software Development",
    description: "Custom software solutions to automate and grow your business efficiently.",
    icon: <FaLaptopCode className="text-3xl text-green-500" />,
    link: '/services/software_development',
    aria: "Custom Software Development Services",
    titleAttr: "Software Development | Nexify Digital",
    bg: "/imgs/nexify-digital-team-india.jpg"
  },
  {
    title: "Digital Marketing",
    description: "Boost your business online with strategic marketing and lead generation.",
    icon: <FaBullhorn className="text-3xl text-green-500" />,
    link: '/services/digital_marketing',
    aria: "Digital Marketing Services — digital marketing company in Delhi NCR",
    titleAttr: "Digital Marketing Services | Nexify Digital",
    bg: "/imgs/digital-marketing-delhi.jpg"
  },
  {
    title: "Video Editing",
    description: "Creative video editing for your social media, ads, or brand promotions.",
    icon: <FaVideo className="text-3xl text-green-500" />,
    link:'/services/video_editing',
    aria: "Professional Video Editing Services",
    titleAttr: "Video Editing | Nexify Digital",
    bg: "/imgs/video_editing_03video-editing-services.jpg"
  },
];

const MainServices: React.FC = () => {
  return (
    <section id="services" className="py-4 sm:py-16 px-4 md:px-16 bg-white">
      
      <ProServicesSection/>

      <div className="max-w-7xl mx-auto text-start md:text-center">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* LEFT 2 CARDS */}
          <div className="flex flex-col gap-6">
            {services.slice(0, 2).map((service, index) => (
              <Link
                to={service.link}
                key={index}
                title={service.titleAttr}
                aria-label={service.aria}
                className="relative border rounded-xl p-6 shadow hover:shadow-xl transition-all text-center cursor-pointer block overflow-hidden"
              >
               {/* Background Image */}
               <div
                 className="absolute inset-0 bg-cover bg-center"
                 style={{ backgroundImage: `url(${service.bg})` }}
               ></div>
               
               {/* Black Overlay */}
               <div className="absolute inset-0 bg-black opacity-40"></div>
               

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl text-gray-200 font-semibold mb-2">{service.title}</h3>
                  <p className="text-white text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* CENTER BIG CARD */}
          <Link
            to={services[2].link}
            title={services[2].titleAttr}
            aria-label={services[2].aria}
            className="relative h-full border rounded-xl p-10 shadow hover:shadow-xl transition-all text-center flex flex-col justify-center cursor-pointer block overflow-hidden"
          >
            
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${services[2].bg})` }}
            ></div>
            
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            

            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-center mb-4">{services[2].icon}</div>
              <h3 className="text-xl text-white font-semibold mb-2">{services[2].title}</h3>
              <p className="text-white text-sm">{services[2].description}</p>
            </div>
          </Link>

          {/* RIGHT 2 CARDS */}
          <div className="flex flex-col gap-6">
            {services.slice(3, 5).map((service, index) => (
              <Link
                to={service.link}
                key={index}
                title={service.titleAttr}
                aria-label={service.aria}
                className="relative border rounded-xl p-6 shadow hover:shadow-xl transition-all text-center cursor-pointer block overflow-hidden"
              >
               
                {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.bg})` }}
            ></div>
            
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            


                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl text-white font-semibold mb-2">{service.title}</h3>
                  <p className="text-white text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MainServices;
