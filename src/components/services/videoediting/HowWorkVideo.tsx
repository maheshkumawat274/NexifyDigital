import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCut, FaBullseye, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaPaperPlane className="text-4xl text-indigo-600 mb-2" />,
    title: "Send Us Your Raw Video",
    description: "Share your footage through Google Drive, WeTransfer, or any platform you prefer.",
  },
  {
    icon: <FaCut className="text-4xl text-pink-600 mb-2" />,
    title: "We Edit Based On Your Needs",
    description: "Our expert editors will enhance your content based on your style and instructions.",
  },
  {
    icon: <FaBullseye className="text-4xl text-yellow-600 mb-2" />,
    title: "Review + Revisions",
    description: "We share a draft for your feedback and offer revisions until you're fully satisfied.",
  },
  {
    icon: <FaRocket className="text-4xl text-green-600 mb-2" />,
    title: "Final Delivery",
    description: "You receive the final high-quality video, ready to share with your audience!",
  },
];

const HowItWorksVideo: React.FC = () => {
  return (
    <section id="how-video-editing-works" className="bg-white py-16 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#273AA0] mb-4">How Our Professional Video Editing Process Works</h2>
      
      {/* Introductory Paragraph */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Our process is simple and client-focused. Whether you're a content creator, business owner, or agency — 
        we ensure your video goes from raw footage to polished masterpiece in four smooth steps.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative z-10 bg-white shadow-xl rounded-2xl p-6 text-center w-full md:w-64"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {step.icon}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </motion.div>
        ))}

        {/* Horizontal line on desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 z-0"></div>
      </div>
    </section>
  );
};

export default HowItWorksVideo;
