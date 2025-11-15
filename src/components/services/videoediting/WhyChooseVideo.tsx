
import { FaCogs, FaBolt, FaTools, FaMobileAlt, FaRupeeSign, FaSyncAlt } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaCogs className="text-3xl text-indigo-500" />,
    title: "100% Customized Editing",
    description: "We tailor every video to your specific style, brand, and audience.",
  },
  {
    icon: <FaBolt className="text-3xl text-yellow-500" />,
    title: "Fast Delivery (24–48 hrs)",
    description: "Need it fast? We ensure quick turnarounds without compromising quality.",
  },
  {
    icon: <FaTools className="text-3xl text-red-500" />,
    title: "Pro Tools: Premiere Pro & After Effects",
    description: "We use industry-leading tools to bring your vision to life.",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-green-500" />,
    title: "Mobile + Desktop Output",
    description: "Optimized video formats for all devices and platforms.",
  },
  {
    icon: <FaRupeeSign className="text-3xl text-blue-500" />,
    title: "Affordable for Startups",
    description: "High-quality editing that fits your budget — perfect for new businesses.",
  },
  {
    icon: <FaSyncAlt className="text-3xl text-purple-500" />,
    title: "Revisions Support",
    description: "We work with you until you're satisfied with the final result.",
  },
];

const WhyChooseVideo = () => {
  return (
    <section className="px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#273AA0] mb-4">Why Choose Us for Editing</h2>
        <p className="text-gray-600 mb-10">We’re committed to delivering video content that’s fast, flawless, and fully customized.</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-left">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVideo;
