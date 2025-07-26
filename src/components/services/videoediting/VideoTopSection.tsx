import React from 'react';

const VideoTopSection: React.FC = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[70vh] flex items-center justify-center text-center text-white">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/imgs/videoeditor.jpg')`, // Replace with your actual image path
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl p-6 space-y-6">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Professional Video Editing Services
        </h1>

        <h2 className="text-xl sm:text-3xl font-semibold text-blue-300">
          Create stunning visuals that capture attention and tell your story
        </h2>

        <p className="text-sm sm:text-xl text-gray-200">
          From YouTube videos and promotional reels to business ads and cinematic edits — we turn your raw footage into compelling content that resonates with your audience.
        </p>

        <div className="flex justify-center flex-wrap gap-4 pt-4">
          <a href="tel:+916376228917">
            <button className="px-6 py-3 bg-[#273AA0] text-white font-medium rounded-md hover:bg-[#2739a0ec] transition-colors cursor-pointer hover:underline">
              Free Consultation
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoTopSection;
