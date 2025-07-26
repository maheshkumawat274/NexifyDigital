
import { FaCut, FaPalette, FaMusic, FaClosedCaptioning, FaVideo, FaBuilding } from 'react-icons/fa';

const services = [
  {
    icon: <FaCut className="text-4xl text-red-500" />,
    title: "Video Cutting & Trimming",
    description: "Remove unwanted parts, add smooth transitions, and make your video clean and professional.",
  },
  {
    icon: <FaPalette className="text-4xl text-blue-500" />,
    title: "Color Grading",
    description: "Give your video a cinematic look with professional color correction and grading.",
  },
  {
    icon: <FaMusic className="text-4xl text-green-500" />,
    title: "Sound Sync & Music",
    description: "Add background music, voiceovers, and sync sound for better storytelling.",
  },
  {
    icon: <FaClosedCaptioning className="text-4xl text-yellow-500" />,
    title: "Text & Subtitles",
    description: "Add titles, animated text, and subtitles in any language for your videos.",
  },
  {
    icon: <FaVideo className="text-4xl text-purple-500" />,
    title: "Reels & Shorts",
    description: "We edit catchy reels, YouTube shorts, and TikToks to boost your online presence.",
  },
  {
    icon: <FaBuilding className="text-4xl text-pink-500" />,
    title: "Corporate Videos",
    description: "We create and edit promotional and training videos for companies.",
  },
];

const WhatWeVideo = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#273AA0] ">What We Offer</h2>
        <p className="text-gray-600 mb-10">Explore our video editing services tailored to every business and creator need.</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-left">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeVideo;
