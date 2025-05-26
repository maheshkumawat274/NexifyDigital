import React, { useState } from 'react';

interface ServiceData {
  title: string;
  description: string;
  items: string[];
}

const services: ServiceData[] = [
  
  {
    title: 'Software Product Engineering',
    description:
      'We specialize in delivering end-to-end software product engineering services, ensuring seamless integration, innovative design, and performance optimization to help businesses stay competitive in the digital landscape.',
    items: [
      'API & Microservices',
      'Cloud Application Development',
      'Custom CRM Software',
      'Custom Software Development',
      'DevOps Consulting Services',
      'Enterprise CMS Solutions',
      'Enterprise Software Development',
      'Microsoft Development',
      'Mobile App Development',
      'Software Consulting',
      'Software Modernization',
      'Software Outsourcing',
      'Software Support and Maintenance',
      'Testing and Quality Assurance',
    ],
  },
  {
    title: 'Website Development',
    description:
      'We build fast, responsive, and SEO-friendly websites tailored to your business needs. From personal portfolios and business websites to e-commerce platforms and custom web portals, we provide complete web development solutions using modern technologies and frameworks.',
    items: [
      'Static and Dynamic Website Development',
      'Custom Business Websites',
      'E-Commerce Website Development',
      'Responsive & Mobile-Friendly Layouts',
      'Landing Page Design & Development',
      'Portfolio Website Design',
      'Blog & News Portal Development',
      'Website Maintenance and Optimization',
      'SEO-Friendly Code Structure',
      'Domain & Hosting Setup Assistance',
      'Cross-Browser Compatibility',
      'CMS Integration (WordPress, Joomla, etc.)',
    ],
  },
  {
    title: 'Digital Experience',
    description:
      'Enhance your brand with engaging digital experiences that captivate users and improve conversions. We specialize in UI/UX design, performance optimization, and building interfaces that offer seamless and interactive user journeys.',
    items: [
      'UI/UX Design & Prototyping',
      'Performance Optimization',
      'Interactive Web Interfaces',
      'Design System Implementation',
      'Conversion-Focused Layouts',
      'User Journey Mapping',
      'Custom Animation and Motion Design',
      'Mobile-First Experience Design',
    ],
  },
  {
    title: 'Remote Team',
    description:
      'Access top-tier development talent without geographical limits. Our remote team services help you build a dedicated offshore team that works in alignment with your business goals, delivering consistent results with transparency and accountability.',
    items: [
      'Dedicated Remote Developers',
      'Agile Team Management',
      'Daily Stand-Ups and Reports',
      'Flexible Hiring Models',
      'Full-Stack Development Support',
      'Project-Based and Long-Term Engagements',
      'NDA & Data Security Compliance',
    ],
  },
  {
    title: 'Hi-Tech',
    description:
      'Stay ahead with advanced technology solutions designed for innovation-driven businesses. We offer AI, ML, IoT, and data science-based development services to support your digital transformation.',
    items: [
      'AI & Machine Learning Integration',
      'IoT Application Development',
      'Big Data Analytics',
      'Blockchain Solutions',
      'AR/VR Application Development',
      'Robotic Process Automation (RPA)',
      'Chatbot Development',
    ],
  },
  {
    title: 'Online Marketing',
    description:
      'Grow your online presence and drive more traffic with our digital marketing services. We use proven strategies in SEO, social media, and content marketing to help your business reach its target audience effectively.',
    items: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Google Ads & PPC Campaigns',
      'Email Marketing Campaigns',
      'Content Strategy & Copywriting',
      'Lead Generation Services',
      'Online Reputation Management',
      'Analytics and Performance Tracking',
    ],
  },
];


const ServicesHome: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className=" px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Comprehensive IT Consulting Services<br />
        <span className="text-[#273aa0]">for all Business Needs</span>
      </h1>

      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg font-semibold text-sm md:text-base transition-all duration-200 ${
                index === selectedIndex
                  ? 'bg-[#273aa0] text-white'
                  : 'bg-gray-100 text-black hover:bg-purple-100'
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="mt-8 border rounded-lg p-6">
          <h3 className="text-xl md:text-2xl font-bold text-[#273aa0] mb-4">
            {services[selectedIndex].title}
          </h3>
          <p className="text-gray-700 mb-6">
            {services[selectedIndex].description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm md:text-base">
            {services[selectedIndex].items.map((item, idx) => (
              <span key={idx} className="text-black hover:underline cursor-pointer">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;