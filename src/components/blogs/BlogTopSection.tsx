import React from 'react';

const BlogTopSection: React.FC = () => {
  return (
    <div 
      id="blog-hero"
      aria-label="Nexify Digital Blog — Latest Tech News, Web Development Insights and Digital Growth Strategies"
      className="relative w-full h-[70vh] md:h-[70vh] flex items-center justify-center text-center text-white"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/imgs/nexify-digital-blog-section.avif')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl p-6 space-y-6">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Nexify Digital Blog
        </h1>

        <p className="text-xl sm:text-3xl font-semibold text-blue-300">
          Latest Tech Insights, Web Development Trends & Digital Growth Guides
        </p>

        <p className="text-sm sm:text-xl text-gray-200">
          Stay updated with expert articles on websites, apps, software development,
          digital marketing and industry technology trends.
        </p>
      </div>
    </div>
  );
};

export default BlogTopSection;
