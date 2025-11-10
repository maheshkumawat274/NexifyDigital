import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaTelegramPlane,
  FaWhatsapp
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { SiQuora, SiThreads } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import AnimatedBtn from "../btns/AnimatedBtn";
import { FaChevronDown } from "react-icons/fa6";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

   
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* --- Top Header --- */}
      <div className="bg-[#EDEDE9] text-sm py-2 px-6 justify-between items-center hidden md:flex ">
        <div className="flex space-x-4 text-[#3647AD]">
          <a
            href="tel:+916376228917"
            className="flex items-center hover:underline"
          >
            <FaPhoneAlt className="mr-2" />
            +91-6376228917
          </a>
          <a
            href="mailto:contact@nexifydigital.in"
            className="flex items-center hover:underline"
          >
            <FaEnvelope className="mr-2" />
            nexifydigital78@gmail.com
          </a>
        </div>
        <nav aria-label="Social Media Links" className="flex space-x-4 text-[#3647AD]">
          <a href="https://www.facebook.com/profile.php?id=61575985723004" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/nexifydigital.in/" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/nexifydigital-solutions/" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/@NexifyDigital-78" aria-label="YouTube"><FaYoutube /></a>
          <a href="https://x.com/NexifyD" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://www.threads.com/@nexifydigital.in" aria-label="Threads"><SiThreads /></a>
          <a href="#" aria-label="Quora"><SiQuora /></a>
          <a href="https://in.pinterest.com/nexifyd" aria-label="Pinterest"><FaPinterest /></a>
          <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
          <a 
          href="https://wa.me/916376228917" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        </nav>
      </div>

      {/* --- Main Header --- */}
      <div
        className={`bg-white px-4 py-3 flex justify-between items-center shadow transition-all duration-300 ${
          isScrolled ? "fixed top-0 w-full z-20" : ""
        }`}
      >
        {/* <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2" aria-label="Nexify Digital Home">
            <img
              src="/imgs/logo11.png"
              alt="Nexify Digital Logo"
              className="w-20 h-20 object-contain bg-amber-300"
            />
          </Link>
        </div> */}
        <div className="flex justify-center items-center gap-3 h-14 mt-2 w-48">
          <Link to="/" className="flex items-center gap-2" aria-label="Nexify Digital Home">
            <img 
              src="/imgs/logo.png"
              alt="Nexify Digital Logo"
            />
            <div></div>
          </Link>
        </div>


        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-8 text-[12px] md:text-[18px]" aria-label="Primary Navigation">
          <ul className="flex gap-7 text-black">
            <li><Link className="hover:border-b-2 border-black" to="/">Home</Link></li>
            <li><Link className="hover:border-b-2 border-black" to="/about-us">About Us</Link></li>
            <li
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link to="/services">
                <span className="hover:border-b-2 border-white cursor-pointer flex items-center gap-1 group">
                  Services <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                </span>
              </Link>
              {isServicesOpen && (
                <div className="absolute top-full left-0 bg-white text-black shadow-xl z-50 border-t-4 border-[#233AA7] animate-slideDown w-[800px] max-w-[95vw] px-6 py-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Website Development",
                        path: "/services/website_development",
                        description: "We build responsive, modern websites tailored to your business needs.",
                      },
                      {
                        title: "App Development",
                        path: "/services/app_development",
                        description: "High-performance mobile apps for both Android and iOS platforms.",
                      },
                      {
                        title: "Software Development",
                        path: "/services/software_development",
                        description: "Custom software solutions designed to automate and grow your business.",
                      },
                      {
                        title: "Digital Marketing",
                        path: "/services/digital_marketing",
                        description: "Boost your online presence with SEO, social media, and paid ads.",
                      },
                      {
                        title: "Video Editing",
                        path: "/services/video_editing",
                        description: "Professional video editing to make your content stand out.",
                      },
                    ].map((service) => (
                      <div key={service.path} className="border border-[#233AA7] rounded-md p-4 hover:bg-[#233AA7] hover:text-white transition-all duration-300 h-full flex flex-col justify-between">
                        <Link to={service.path} className="text-lg font-semibold hover:underline">
                          {service.title}
                        </Link>
                        <Link to={service.path}>
                         <p className="text-sm mt-2">{service.description}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              </li>
            <li><Link className="hover:border-b-2 border-black" to="/career">Career</Link></li>
            <li><Link className="hover:border-b-2 border-black" to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <div>
            <AnimatedBtn/>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Mobile Menu"
            className="text-3xl text-[#3647AD]"
          >
            <HiMenu />
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-3/4 max-w-xs bg-white text-black transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile Navigation Menu"
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
          <h2 className="text-2xl font-bold text-[#3647AD]">NexifyDigital</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Mobile Menu"
            className="text-black text-3xl"
          >
            <IoClose />
          </button>
        </div>

        {/* Mobile Nav Items */}
        <nav className="flex flex-col gap-4 px-6 py-6 font-medium text-lg">
          
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
           <div className="flex justify-between items-center gap-6">
              <p>Home</p>
              <FiArrowRight />
           </div>
          </Link>
    
          <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>
            <div className="flex justify-between items-center gap-6">
              <p>About Us</p>
              <FiArrowRight />
            </div>
          </Link>
    
          {/* <Link to="/services" onClick={() => setIsMenuOpen(false)}>
            <div className="flex justify-between items-center gap-6">
              <p>Services</p>
              <FiArrowRight />
            </div>
          </Link> */}
           {/* Services Dropdown in Mobile */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full"
            >
              <Link to='/services'>
              <span>Services</span>
              </Link>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  isMobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isMobileServicesOpen && (
              <ul className="mt-2 ml-4 space-y-2 text-sm">
                {[
                  ["Website Development", "/services/website_development"],
                  ["App Development", "/services/app_development"],
                  ["Software Development", "/services/software_development"],
                  ["Digital Marketing", "/services/digital_marketing"],
                  ["Video Editing", "/services/video_editing"]
                ].map(([text, path]) => (
                  <li key={path}>
                    <Link
                      to={path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1 hover:underline"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
    
          <Link to="/career" onClick={() => setIsMenuOpen(false)}>
            <div className="flex justify-between items-center gap-6">
              <p>Career</p>
              <FiArrowRight />
            </div>
          </Link>
    
          <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>
            <div className="flex justify-between items-center gap-6">
              <p>Contact Us</p>
              <FiArrowRight />
            </div>
          </Link>
         <div>
           <AnimatedBtn/>
         </div>
        </nav>
      </aside>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-30 z-30"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Header;
