
import { FaPlus } from "react-icons/fa";

const values = [
  { title: "Customer Success", icon: "📈" },
  { title: "Innovation & Continuous Learning", icon: "💡" },
  { title: "Fun", icon: "🎉" },
  { title: "Trust & Accountability", icon: "🤝" },
  { title: "Team Spirit", icon: "🫱🏻‍🫲🏼" },
  { title: "Work Hard & Fast", icon: "🏃‍♂️" },
  { title: "Freedom With Responsibility", icon: "🚀" },
  { title: "Communication", icon: "💬" },
  { title: "Transparency & Mutual Respect", icon: "🧑‍🤝‍🧑" }
];

const OurValues = () => {
  return (
    <section id="our-values"
    aria-label="Core values of NexifyDigital" className="py-8 px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-700 mb-4">Our Core Values at NexifyDigital
</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10">
          These core values and principles define how NexifyDigital operates and makes decisions. They form the foundation of our culture and shape how we interact with customers, employees, and partners.

        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              aria-label={`Value: ${value.title}`}

              className="bg-white border rounded-xl shadow-md p-6 relative hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {value.title}
              </h3>
              <div className="absolute top-4 right-4 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                <FaPlus className="text-xs" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
