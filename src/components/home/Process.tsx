import type { FC } from "react";

const steps = [
  {
    number: "01",
    title: "Research",
    description:
      "We analyze your business needs, target audience, and market competition to create a strong project foundation.",
    icon: "📋", // Replace with your own SVG icon
  },
  {
    number: "02",
    title: "Ideation",
    description:
      "We brainstorm creative and effective solutions that align with your goals and vision.",
    icon: "🧠",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We convert ideas into clean, modern, and user-friendly UI/UX designs and wireframes.",
    icon: "🎨",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We develop fast, secure, and fully responsive websites or applications using modern technologies.",
    icon: "⚙️",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "We test every feature to ensure smooth performance, speed, and error-free functionality.",
    icon: "🔍",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We deploy your project with complete optimization and provide support to ensure successful results.",
    icon: "🚀",
  },
];

const ProcessSection: FC = () => {
  return (
    <section className="w-full pb-16 px-4 md:px-16 bg-white">
      {/* TOP HEADING */}
      <h2 className="text-center text-3xl md:text-4xl text-gray-700 font-bold mb-16">
        6 Steps of Development Process
      </h2>

      <div className="relative w-full mx-auto">

        {/* TIMELINE BAR */}
        <div className="absolute top-[80px] left-0 w-full h-4 bg-gray-300 rounded-md z-0"></div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3"
            >
              {/* NUMBER */}
              <span className="text-3xl font-bold text-gray-700">{step.number}</span>

              {/* HEXAGON ICON */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                {/* Blue Hexagon */}
                <div className="absolute w-28 h-28 bg-[#233AA7] clip-hex"></div>

                {/* Inner White Hexagon */}
                <div className="absolute w-20 h-20 bg-white clip-hex shadow-md flex items-center justify-center text-3xl">
                  {step.icon}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="font-semibold">{step.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 px-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
