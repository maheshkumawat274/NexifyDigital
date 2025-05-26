import React from "react";

const AboutCareer: React.FC = () => {
  return (
    <section
      className="bg-white text-gray-800 px-4 md:px-20 py-8 sm:py-16"
      aria-labelledby="exl-journey-heading"
    >
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Column: Title + Icon */}
        <div className="w-full md:w-1/3 flex flex-col items-start">
          <h2
            id="exl-journey-heading"
            className="text-3xl md:text-4xl font-semibold mb-2"
          >
            Careers at NexifyDigital
          </h2>
          <div className="w-12 h-1 bg-[#3647AD] mb-10"></div>
          <div className="flex items-center gap-2 mt-4">
            {/* Arrow Icon */}
            <div className="w-0 h-0 border-l-[20px] border-l-[#3647AD] border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent"></div>
            <div className="w-0 h-0 border-l-[20px] border-l-cyan-900 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent"></div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-2/3 space-y-8">
          <p className="text-lg leading-relaxed">
            At NexifyDigital, we are not just building digital solutions—we're building careers. As a fast-growing startup in the world of web development, design, and digital marketing, we believe in empowering individuals to innovate, lead, and grow alongside us.
          </p>

          <div>
            <h3 className="text-2xl text-[#3647AD] font-semibold mb-2">
              Why Join Us?
            </h3>
            <p className="text-lg leading-relaxed">
              From day one, we’ve focused on fostering a collaborative and creative work culture. Whether you’re a developer, designer, marketer, or strategist, NexifyDigital offers an open environment where your ideas matter. We support career growth through mentorship, real-world projects, and the freedom to take ownership of your work.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-[#3647AD] font-semibold mb-2">
              Your Future Begins Here
            </h3>
            <p className="text-lg leading-relaxed">
              Join us in shaping the digital future. We're always on the lookout for passionate, driven, and curious minds ready to make an impact. Discover a career that challenges you, values your voice, and rewards your ambition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCareer;
