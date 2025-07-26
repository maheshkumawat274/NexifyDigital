import React from 'react';

const WhyChooseUsWebsite = () => {
  const features = [
    {
      title: '100% Customized Editing',
      description: 'Tailored content to match your brand voice and vision.',
      icon: '🎯',
    },
    {
      title: 'Fast Delivery (24–48 hrs)',
      description: 'Quick turnaround without compromising quality.',
      icon: '⚡',
    },
    {
      title: 'Professional Tools',
      description: 'Adobe Premiere Pro, After Effects & industry-grade software.',
      icon: '💼',
    },
    {
      title: 'Mobile + Desktop Output',
      description: 'Optimized videos for all screen sizes and platforms.',
      icon: '📱',
    },
    {
      title: 'Affordable for Startups',
      description: 'Budget-friendly pricing without hidden costs.',
      icon: '💰',
    },
    {
      title: 'Revisions Support',
      description: 'We offer quick edits and multiple revisions.',
      icon: '🔄',
    },
    {
      title: 'Admin Dashboard Support',
      description: 'Custom dashboard for tracking content and analytics.',
      icon: '🛠️',
    },
    {
      title: '24×7 Availability',
      description: 'Dedicated support team always ready to assist you.',
      icon: '⏰',
    },
  ];

  return React.createElement(
    'div',
    { className: 'bg-white py-20 px-4 sm:px-16' },
    React.createElement(
      'div',
      { className: 'max-w-6xl mx-auto text-center mb-16' },
      React.createElement('h2', { className: 'text-4xl font-bold text-[#273AA0] mb-4' }, 'Why Choose Us'),
      React.createElement(
        'p',
        { className: 'text-lg text-gray-600' },
        'Experience top-tier service backed by speed, quality, and professionalism.'
      )
    ),
    React.createElement(
      'div',
      {
        className: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative',
      },
      features.map((feature, index) =>
        React.createElement(
          'div',
          {
            key: index,
            'data-aos': 'fade-up',
            'data-aos-delay': index * 100,
            className:
              'relative bg-white rounded-2xl shadow-lg p-8 text-left border-l-4 border-[#273AA0] hover:shadow-xl transition-all duration-300',
          },
          React.createElement(
            'div',
            { className: 'flex items-center mb-4' },
            React.createElement(
              'div',
              {
                className:
                  'text-white bg-[#273AA0] rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4',
              },
              index + 1
            ),
            React.createElement('div', { className: 'text-3xl' }, feature.icon)
          ),
          React.createElement('h3', { className: 'text-xl font-semibold text-gray-800 mb-2' }, feature.title),
          React.createElement('p', { className: 'text-gray-600 text-sm leading-relaxed' }, feature.description)
        )
      )
    )
  );
};

export default WhyChooseUsWebsite;
