

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

  return (
    <div className="bg-white py-20 px-4 sm:px-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-[#273AA0] mb-4">Why Choose Us</h2>
        <p className="text-lg text-gray-600">
          Experience top-tier service backed by speed, quality, and professionalism.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-left border-l-4 border-[#273AA0]"
          >
            <div className="flex items-center mb-4">
              <div className="text-white bg-[#273AA0] rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                {index + 1}
              </div>
              <div className="text-3xl">{feature.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsWebsite;
