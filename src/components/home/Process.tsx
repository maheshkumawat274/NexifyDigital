
import { motion } from 'framer-motion';

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      title: "Discovery Call",
      description: "We discuss your project requirements, goals, and challenges in a free consultation.",
      icon: "📞",
      color: "bg-blue-100"
    },
    {
      id: 2,
      title: "Requirement Analysis",
      description: "Our team analyzes your needs and prepares a detailed project specification.",
      icon: "🔍",
      color: "bg-purple-100"
    },
    {
      id: 3,
      title: "Proposal & Planning",
      description: "We present a customized solution with timeline, milestones, and pricing.",
      icon: "📑",
      color: "bg-green-100"
    },
    {
      id: 4,
      title: "Development Phase",
      description: "Our experts build your solution with agile methodology and regular updates.",
      icon: "💻",
      color: "bg-yellow-100"
    },
    {
      id: 5,
      title: "Testing & QA",
      description: "Rigorous testing ensures your solution meets quality standards.",
      icon: "🧪",
      color: "bg-red-100"
    },
    {
      id: 6,
      title: "Deployment & Support",
      description: "We launch your solution and provide ongoing maintenance support.",
      icon: "🚀",
      color: "bg-indigo-100"
    }
  ];

  return (
    <section className="py-16 px-2 sm:px-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">
            Our <span className="text-[#273aa0]">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to delivery - our transparent workflow ensures success
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-20'} ${index >= 3 ? 'lg:mt-20' : ''}`}
              >
                <div className={`p-6 rounded-xl shadow-md ${step.color} relative z-10 h-full`}>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white border-4 border-[#273aa0] flex items-center justify-center">
                    <span className="text-[#273aa0] font-bold">{step.id}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;