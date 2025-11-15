import React from "react";
import {
  FaSearch,
  FaBullhorn,
  FaGlobe,
  FaChartLine,
  FaUserFriends,
  FaLock,
  FaRocket,
  FaHandsHelping,
  FaDollarSign,
  FaMobileAlt,
  FaChartPie,
  FaCogs,
} from "react-icons/fa";

// ❌ Remove: JSX.Element from here
// ✅ Use ReactNode or no type for `icon`, or just skip typing if preferred
const reasons = [
  {
    title: "Increase Online Visibility",
    description: "Appear in search results when users are actively looking for your services or products.",
    icon: <FaSearch />,
  },
  {
    title: "Target the Right Audience",
    description: "Digital ads and SEO help you reach customers who are most likely to convert.",
    icon: <FaBullhorn />,
  },
  {
    title: "Expand Global Reach",
    description: "Digital marketing breaks geographical barriers, helping you target global markets.",
    icon: <FaGlobe />,
  },
  {
    title: "Boost Website Traffic",
    description: "SEO drives consistent organic traffic, while ads bring instant visibility.",
    icon: <FaChartLine />,
  },
  {
    title: "Build Customer Trust",
    description: "High rankings and great content make your business look more trustworthy.",
    icon: <FaUserFriends />,
  },
  {
    title: "Stay Ahead of Competitors",
    description: "Outperform competitors who aren’t investing in digital marketing or SEO.",
    icon: <FaLock />,
  },
  {
    title: "Faster Business Growth",
    description: "With better reach and targeted campaigns, digital marketing speeds up your growth.",
    icon: <FaRocket />,
  },
  {
    title: "24/7 Online Presence",
    description: "Your website and campaigns work round-the-clock to promote your brand.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Improve ROI",
    description: "Digital campaigns are measurable and optimized, offering better return on investment.",
    icon: <FaDollarSign />,
  },
  {
    title: "Measurable Results",
    description: "Track clicks, conversions, and traffic with tools like Google Analytics.",
    icon: <FaChartPie />,
  },
  {
    title: "Automation & Scaling",
    description: "Leverage tools and automation to manage and scale your campaigns efficiently.",
    icon: <FaCogs />,
  },
  {
    title: "Stronger Customer Relationships",
    description: "Email marketing, social engagement, and content help build lasting relationships.",
    icon: <FaHandsHelping />,
  },
];

const WhyNeedSEO: React.FC = () => {
  return (
    <div className="px-4 md:px-60 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1979] mb-4">
        Why Do Your Businesses Need SEO & Digital Marketing Services?
      </h2>
      <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
        From visibility and customer trust to global growth and measurable ROI — SEO and digital marketing are essential for business success in today’s world.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className="bg-blue-50 hover:bg-white border border-blue-100 hover:shadow-xl p-6 rounded-xl transition duration-300 text-left"
          >
            <div className="text-3xl text-blue-700 mb-3 hover:animate-bounce">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#0B1979] mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyNeedSEO;
