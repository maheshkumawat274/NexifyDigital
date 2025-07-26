import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIcons from "../contact/SocialMediaIcons";

const Footer: React.FC = () => {
  return (
    <>
     <section className="w-full bg-[#273aa0] py-4 px-2 pt-10 pb-10 flex items-center justify-center">
        <div className="flex items-center text-white font-bold text-lg sm:text-4xl">
          Need Help ? Chat with Expert Developers!
          <a
            href="https://wa.me/+916376228917"
            className="ml-4 px-6 py-2 bg-white text-[#273aa0] rounded-full hover:scale-105 shadow transition font-bold"
          >
            WHATSAPP
          </a>
        </div>
      </section>
       <footer className="w-full bg-[#273aa0] text-white py-14 px-2 sm:px-14 flex flex-col md:flex-row justify-between items-start text-sm border-t border-[#12130f] gap-4">
        <div className="mb-4 md:mb-0 md:w-1/3">
          <h1 className="text-5xl lg-text-6xl md:text-4xl sm:text-5xl font-bold">NexifyDigital</h1>
          <div className="py-14">
            <SocialMediaIcons/>
          </div>
          <div className="text-lg sm:text-xl text-white">
            With 5+ years of experience and 100+ clients, the instructor has helped many professionals and businesses achieve success in the IT and technology industry.
          </div>
        </div>
        <div className="mb-4 md:mb-0 md:w-1/3 flex justify-start sm:justify-center">
          <div>
            <h1 className="font-bold mb-1 text-2xl sm:text-3xl">Usefull Links</h1>
          <ul className="text-lg">
            <li>
              <Link to='/about'>
                <p className="hover:underline">About Us</p>
              </Link>
            </li>
            <li>
              <Link to='/services'>
                <p className="hover:underline">Services</p>
              </Link>
            </li>
            <li>
              <Link to='/career'>
                <p className="hover:underline">Career</p>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <p className="hover:underline">Contact Us</p>
              </Link>
            </li>
          </ul>
          </div>
        </div>
        <div className="md:w-1/3">
          <h1 className="font-bold mb-1 text-2xl sm:text-3xl">Contact</h1>
          <div className="text-lg">
          <div>Delhi, 110020</div>
          <div>+916376228917</div>
          <div>contact@nexifydigital.in</div>
          <div>nexifydigital78@gmail.com</div>
          </div>
        </div>
      </footer>
      <hr className="text-white"/>
      <div className="font-bold text-xl py-14 text-center bg-[#273aa0] text-white px-2">
        <span>
          © 2025 Nexify Digital. All Rights Reserved.
        </span>
      </div>
    </>
  );
};

export default Footer;