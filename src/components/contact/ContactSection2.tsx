import React, { useState } from 'react';

const contentData = {
  consultant: {
    title: 'Talk To Consultant',
    content:
      "Need expert guidance on IT solutions? Our consultants are here to understand your business requirements and recommend tailored strategies for digital transformation, cloud migration, or software architecture."
  },
  career: {
    title: 'Career',
    content:
      "Looking to build your career in IT? We offer opportunities in full-stack development, cloud computing, DevOps, UI/UX design, and more. Join our dynamic team and grow your professional journey with us."
  },
  support: {
    title: 'Product Support',
    content:
      "Facing challenges with your IT systems or tools? Our support team is ready to help you resolve installation, integration, or troubleshooting issues. Email us at contact@nexifydigital.in"
  }
};

const ContactSection2: React.FC = () => {
  const [selected, setSelected] = useState<'consultant' | 'career' | 'support'>('support');

  return (
    <section className="max-w-6xl mx-auto px-2 py-12 text-gray-700">
      <h1 className="text-3xl font-semibold mb-8 text-center md:text-left">
        Who do you need to get in touch with?
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Button Menu */}
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-8 text-lg">
          {Object.entries(contentData).map(([key, item]) => (
            <button
              key={key}
              className={`font-medium hover:underline focus:outline-none border-2 border-gray-700 rounded-lg px-1 text-center sm:px-3 py-2 transition-colors duration-200 ${
                selected === key ? 'text-[#273aa0]' : 'text-gray-500'
              }`}
              onClick={() => setSelected(key as 'consultant' | 'career' | 'support')}
              aria-label={`Select ${item.title}`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-[#273aa0] text-white flex justify-center items-center p-6 py-14 rounded-lg flex-1">
          <p className="text-lg leading-relaxed">
            {contentData[selected].content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection2;
