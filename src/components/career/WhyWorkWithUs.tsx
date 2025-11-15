// =====================================
// 1️⃣ WhyWorkWithUs.tsx (Separate Component)
// =====================================

import React from "react";

const WhyWorkWithUs: React.FC = () => {
  return (
    <section
      id="why-work-with-us"
      className="w-full py-16 bg-white px-4 md:px-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#233BA7] mb-6">
          Why Work With Nexify Digital?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Nexify Digital is a leading IT company in Delhi providing website development, web
          design, mobile app development, SEO, and digital marketing services. Join a modern,
          growing tech team.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[ 
            {
              title: "Professional Growth",
              desc: "Work on challenging projects and level up your IT skills.",
            },
            {
              title: "Learning Culture",
              desc: "Daily learning, mentoring, and exposure to new technologies.",
            },
            {
              title: "Flexible Work",
              desc: "Enjoy flexible working hours and remote work options.",
            },
            {
              title: "Friendly Team",
              desc: "Collaborate with a supportive, creative, and energetic team.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl shadow-sm p-6 hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold text-[#233BA7] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;