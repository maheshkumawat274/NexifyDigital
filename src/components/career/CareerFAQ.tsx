
// =====================================
// 6️⃣ CareerFAQ.tsx (Separate Component)
// =====================================

import React from "react";

const CareerFAQ: React.FC = () => {
  const faqList = [
    {
      q: "What is the hiring process at Nexify Digital?",
      a: "Our hiring process includes screening, one technical round, and a final HR evaluation.",
    },
    {
      q: "Do you offer Work From Home?",
      a: "Yes, many roles at Nexify Digital support remote and hybrid working models.",
    },
    {
      q: "Are internships available?",
      a: "Yes, we offer internships in development, design, SEO, and marketing.",
    },
    {
      q: "How long does it take to get a response?",
      a: "Usually within 3–5 business days depending on the volume of applications.",
    },
  ];

  return (
    <section
      id="career-faq"
      className="w-full py-16 bg-white px-4 md:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#233BA7] mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqList.map((item, index) => (
            <details
              key={index}
              className="border p-5 rounded-xl bg-gray-50 cursor-pointer group"
            >
              <summary className="font-semibold text-gray-800 flex justify-between">
                {item.q}
              </summary>
              <p className="mt-3 text-gray-600 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerFAQ;