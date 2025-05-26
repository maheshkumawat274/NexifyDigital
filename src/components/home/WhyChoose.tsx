import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyChoose = () => {
  // Rotating features (EXACTLY as in your image)
  const features = [
    "Vendor-agnostic",
    "Collaborative culture",
    "Ethical practices",
    "Scalable solutions",
    "Long-term partnerships",
    "Continuous improvement",
    "Cost-effective solutions",
    "Data-driven decisions"
  ];

  const [currentFeature, setCurrentFeature] = useState(0);

  // Auto-rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-12 sm:py-0 bg-white text-gray-700 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title + Description (EXACT match) */}
        <h1 className="text-3xl md:text-4xl font-bold  text-center mb-6">
          Why Choose NexifyDigital: Your IT Consulting Partner?
        </h1>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Backed by a highly skilled team and a proven track record, we consult, develop, implement, and integrate advanced IT solutions to unlock the full potential of your business
        </p>

        {/* Animated Feature Showcase (Blur/Unblur Effect) */}
        <div className="relative h-40 bg-gradient-to-r from-[#273aa0]  to-[#273aa0] rounded-lg mb-12 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {features.map((feature, index) => (
              currentFeature === index && (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4">
                    {feature}
                  </h3>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Feature Grid (8 items, 2 rows) - STATIC for reference */}
        <div className="hidden md:grid grid-cols-4 gap-4 mb-12">
          {features.map((feature) => (
            <div key={feature} className="bg-gray-100 p-4 rounded text-center">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;