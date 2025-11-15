import React, { useState } from 'react';

const contentData = {
  consultant: {
    title: 'Talk To Consultant',
    content:
      "Need expert guidance on IT solutions? Our consultants are here to understand your requirements and recommend tailored strategies for web development, software architecture, cloud migration, and digital transformation."
  },
  career: {
    title: 'Career',
    content:
      "Looking to build your career in IT? We offer opportunities in full-stack development, UI/UX, cloud computing, DevOps, and more. Join our team and grow your professional journey with real projects and mentorship."
  },
  support: {
    title: 'Product Support',
    content:
      "Facing issues with your website, app, or software? Our support team is ready to assist with installation, integration, updates, and troubleshooting. Contact us at nexifydigital78@gmail.com"
  }
};

const ContactSection2: React.FC = () => {
  const [selected, setSelected] = useState<'consultant' | 'career' | 'support'>('support');

  return (
    <section id="contact-options" aria-label="Nexify Digital contact options section" className="max-w-6xl mx-auto px-2 py-12 text-gray-700">
      <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">
        Who Would You Like to Connect With?

      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Button Menu */}
        <div role="tablist" className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-8 text-lg">
          {Object.entries(contentData).map(([key, item]) => (
            <button
              key={key}
              role="tab"
              aria-selected={selected === key}
              aria-current={selected === key ? "true" : undefined}
              aria-controls={`${key}-panel`}
              id={`${key}-tab`}
              className={`font-medium cursor-pointer hover:underline focus:outline-none border-2 border-gray-700 rounded-lg px-1 text-center sm:px-3 py-2 transition-colors duration-200 ${
                selected === key ? 'text-white bg-[#273aa0]' : 'text-gray-500'
              }`}
              onClick={() => setSelected(key as 'consultant' | 'career' | 'support')}
            >
              {item.title}
            </button>
          ))}
        </div>
        
        <div
          id={`${selected}-panel`}
          role="tabpanel"
          aria-labelledby={`${selected}-tab`}
          className="bg-[#273aa0] text-white flex justify-center items-center p-6 py-14 rounded-lg flex-1"
        >
          <p className="text-lg leading-relaxed">{contentData[selected].content}</p>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection2;
