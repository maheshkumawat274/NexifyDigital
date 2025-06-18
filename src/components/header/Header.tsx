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

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
            contact@nexifydigital.in
          </a>
        </div>
        <nav aria-label="Social Media Links" className="flex space-x-4 text-[#3647AD]">
          <a href="https://www.facebook.com/profile.php?id=61575985723004" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/nexifydigital.in/" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/nexifydigital-solutions/" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="https://x.com/NexifyD" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://www.threads.com/@nexifydigital.in" aria-label="Threads"><SiThreads /></a>
          <a href="#" aria-label="Quora"><SiQuora /></a>
          <a href="#" aria-label="Pinterest"><FaPinterest /></a>
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
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2" aria-label="Nexify Digital Home">
            <img
              src="/imgs/img.png"
              alt="Nexify Digital Logo"
              className="h-12 w-12 rounded-full"
            />
            <span className="text-[#3647AD] font-bold text-xl">NexifyDigital</span>
          </Link>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-8 text-[12px] md:text-[18px]" aria-label="Primary Navigation">
          <ul className="flex gap-7 text-black">
            <li><Link className="hover:border-b-2 border-black" to="/">Home</Link></li>
            <li><Link className="hover:border-b-2 border-black" to="/about">About Us</Link></li>
            <li><Link className="hover:border-b-2 border-black" to="/services">Services</Link></li>
            <li><Link className="hover:border-b-2 border-black" to="/career">Career</Link></li>
            <li><Link className="hover:border-b-2 border-black" to="/contact">Contact Us</Link></li>
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
    
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            <div className="flex justify-between items-center gap-6">
              <p>About Us</p>
              <FiArrowRight />
            </div>
          </Link>
    
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>
            <div className="flex justify-between items-center gap-6">
              <p>Services</p>
              <FiArrowRight />
            </div>
          </Link>
    
          <Link to="/career" onClick={() => setIsMenuOpen(false)}>
            <div className="flex justify-between items-center gap-6">
              <p>Career</p>
              <FiArrowRight />
            </div>
          </Link>
    
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
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
