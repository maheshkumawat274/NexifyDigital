import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIcons from "../contact/SocialMediaIcons";

const Footer: React.FC = () => {
  return (
    <>
      <section className="w-full bg-[#273aa0] py-4 px-2 pt-10 pb-10 flex items-center justify-center text-center">
        <div className="flex flex-col sm:flex-row items-center text-white font-bold text-lg sm:text-3xl gap-4">
          <span>Need Help? Chat with Expert Developers!</span>
          <a
            href="https://wa.me/+916376228917"
            className="px-6 py-2 bg-white text-[#273aa0] rounded-full hover:scale-105 shadow transition font-bold"
          >
            WHATSAPP
          </a>
        </div>
      </section>

      <footer className="w-full bg-[#273aa0] text-white py-14 px-4 md:px-14 flex flex-col md:flex-row justify-between items-start text-sm border-t border-[#12130f] gap-10">
        
        {/* Company Info */}
        <div className="md:w-1/4">
          <h1 className="text-5xl md:text-3xl lg:text-4xl font-bold">NexifyDigital</h1>
          
          <p className="text-md py-4">
            With 5+ years of experience and 100+ clients, the instructor has helped many professionals and businesses achieve success in the IT and technology industry.
          </p>
        </div>

        {/* Useful Links */}
        <div className="md:w-1/4">
          <h1 className="font-bold mb-3 text-2xl sm:text-3xl">Useful Links</h1>
          <ul className="text-md space-y-2">
            <li>
              <Link to="/about-us" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">Services</Link>
            </li>
            <li>
              <Link to="/career" className="hover:underline">Career</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:underline">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="md:w-1/4">
          <h1 className="font-bold mb-3 text-2xl sm:text-3xl">Services</h1>
          <ul className="text-md space-y-2">
            <li className="hover:underline"><Link to='/services/website_development'>Website Development</Link></li>
            <li className="hover:underline"><Link to='/services/services/app_development'>App Development</Link></li>
            <li className="hover:underline"><Link to='/services/software_development'>Software Development</Link></li>
            <li className="hover:underline"><Link to='/services/digital_marketing'>Digital Marketing</Link></li>
            <li className="hover:underline"><Link to='/services/video_editing'>Video Editing</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:w-1/4">
          <h1 className="font-bold mb-3 text-2xl sm:text-3xl">Contact</h1>
          <div className="text-md space-y-2">
            <div>Delhi, 110020</div>
            <div>+91 6376228917</div>
            <div>nexifydigital78@gmail.com</div>
            <div className="py-5">
            <SocialMediaIcons />
          </div>
          </div>
        </div>
      </footer>

      <hr className="text-white" />
      <div className="font-bold text-xl py-8 text-center bg-[#273aa0] text-white px-2 border-t border-[#12130f]">
        © 2025 Nexify Digital. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
