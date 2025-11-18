import React from "react";

const BlogAbout: React.FC = () => {
  return (
    <section
      id="blog-about"
      className="bg-white text-gray-800 px-4 md:px-20 py-8 sm:py-16"
      aria-labelledby="blog-about-heading"
    >
      <div className="flex flex-col md:flex-row items-start gap-8">

        {/* Left Column: Title + Icon */}
        <div className="w-full md:w-1/3 flex flex-col items-start">
          <h2
            id="blog-about-heading"
            className="text-3xl md:text-4xl font-semibold mb-2"
          >
            About Nexify Digital Blog
          </h2>

          <div className="w-12 h-1 bg-[#3647AD] mb-10"></div>

          <div className="flex items-center gap-2 mt-4">
            <div className="w-0 h-0 border-l-[20px] border-l-[#3647AD] border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent"></div>
            <div className="w-0 h-0 border-l-[20px] border-l-cyan-900 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent"></div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-2/3 space-y-8">

          <p className="text-lg leading-relaxed">
            Welcome to the Nexify Digital Blog — your trusted source for the latest insights in web development, mobile apps, software solutions, digital marketing, UI/UX, and emerging technology trends. We publish expert articles designed to help businesses, startups, and creators stay ahead in the fast-moving digital world.
          </p>

          <div>
            <h3 className="text-2xl text-[#3647AD] font-semibold mb-2">
              What You’ll Find Here
            </h3>
            <p className="text-lg leading-relaxed">
              From in-depth guides to industry news, our blog covers everything that helps you understand how technology impacts modern businesses. Whether you are planning a website, scaling an app, or improving your online presence, our content helps you make smart decisions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-[#3647AD] font-semibold mb-2">
              Why Our Blog Matters
            </h3>
            <p className="text-lg leading-relaxed">
              Every article is written to simplify complex concepts and offer practical advice. We share real case studies, strategies, and insights that reflect our hands-on experience as a web and app development company in India. Our goal is to guide you with authentic, helpful, and result-driven knowledge.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogAbout;
