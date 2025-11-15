import React from "react";
import { FaVideo, FaFilm, FaMagic, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaVideo className="text-4xl text-red-500 group-hover:scale-110 transition-transform duration-300" />,
    title: "Professional Video Editing",
    description:
      "We edit your raw footage into stunning, high-quality videos using cinematic transitions, effects, and music sync.",
  },
  {
    icon: <FaFilm className="text-4xl text-indigo-500 group-hover:rotate-6 transition-transform duration-300" />,
    title: "Reels & Short Videos",
    description:
      "We create engaging Instagram reels, YouTube shorts, and social media videos that grab attention and go viral.",
  },
  {
    icon: <FaMagic className="text-4xl text-yellow-500 group-hover:-translate-y-1 transition-transform duration-300" />,
    title: "Motion Graphics & Effects",
    description:
      "From logo animation to advanced effects, we add motion graphics that elevate your brand’s visual presence.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-green-600 group-hover:scale-105 transition-transform duration-300" />,
    title: "On-site Video Shooting",
    description:
      "We offer video shooting services for events, ads, and brand stories — recorded professionally at your location.",
  },
];

const VideoEditing: React.FC = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-12">
      <h2 className="text-4xl font-bold text-center text-[#273AA0] mb-4">
        Video Editing & Shooting Services
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        We offer complete video solutions — from on-site video shooting to creative editing and post-production. Whether it's a product ad, a social media reel, or a brand story — we make your videos stand out.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-gray-100 rounded-xl shadow-md p-6 text-center transition duration-300 hover:shadow-xl hover:bg-white"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-[#273AA0] mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoEditing;
