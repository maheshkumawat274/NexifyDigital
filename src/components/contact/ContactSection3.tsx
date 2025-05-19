// ContactSection3.tsx
import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

const ContactSection3: React.FC = () => {
  return (
    <div className="min-h-[40vh]  text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">

        {/* Email Section */}
        <div className="bg-[#273aa0] rounded-2xl p-10 flex flex-col justify-center items-center min-w-[300px]">
          <div>
          <p className="text-xs text-gray-400 mb-4 tracking-widest">EMAIL ME</p>
          <a href="mailto:contact@nexifydigital.in" className="text-2xl underline">
          contact@nexifydigital.in
          </a>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="bg-[#273aa0] rounded-2xl py-14 px-2 sm:px-8 flex flex-col justify-center items-center min-w-[300px]">
          <div>
          <p className="text-xs text-gray-400 mb-8 tracking-widest">FIND ME</p>
          <SocialMediaIcons/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactSection3;