
import React, { useState, useEffect } from "react";

const cardData = [
  { text: "120+", subtext: "Projects Delivered", bg: "#3249b0", textColor: "text-white" },
  { text: "80+", subtext: "Happy Clients", bg: "#465FD4", textColor: "text-white" },
  { text: "25+", subtext: "Mobile Apps", bg: "#19277a", textColor: "text-white" },
  { text: "15+", subtext: "Years Experience", bg: "#D6DFFF", textColor: "text-black" },
  { text: "100%", subtext: "Client Satisfaction", bg: "#2A3EAA", textColor: "text-white" },
  { text: "10+", subtext: "Team Members", bg: "#CFA9FF", textColor: "text-white" },
  { text: "24/7", subtext: "Support Available", bg: "#2a3eaa", textColor: "text-white" },
  { text: "30+", subtext: "In-house Tools", bg: "#d6dfff", textColor: "text-black" },
  { text: "200k+", subtext: "Lines of Code", bg: "#465fd4", textColor: "text-white" },
  { text: "Top Rated", subtext: "On Clutch & GoodFirms", bg: "#3c54c2", textColor: "text-white" }
];

// Shuffle Function
function shuffleArray(array: typeof cardData) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const Demo: React.FC = () => {
  const [cards, setCards] = useState(cardData);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(shuffleArray);
    }, 2000); // every 2 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <section className="flex flex-col md:flex-row w-full h-auto md:h-screen relative">
      <div className="absolute hidden sm:block h-full max-w-4xl px-12 lg:px-16 pt-48">
         <div>
          <h1 className="text-white font-bold leading-tight mb-7 font-poppins tracking-tighter pt-62 sm:pt-80 md:pt-62 lg:pt-62 xl:pt-24 text-3xl  md:text-5xl xl:text-7xl">
            Driving Success<br />
            Through Expert<br />
            IT Consulting Services
          </h1>
          <p className="text-white text-xs md:text-base xl:text-xl font-normal mt-3 font-poppins">
            Agility, Ingenuity, Reliability: Powering Progress.
          </p>
         </div>
      </div>
      {/* Pehla Card - 25% width - Hidden on Mobile */}
      <div className="hidden md:block md:w-1/3 bg-[#273aa0] text-white px-8 justify-center items-center pt-56">
        
      </div>
      <div className="w-full md:w-3/4 bg-[#273aa0] text-white shadow-md">

        {/* 1st row - 4 cards */}
        <div className="flex transition-all duration-500">
          {cards.slice(0, 4).map((item, index) => (
            <div key={index} style={{ backgroundColor: item.bg }} className={`font-semibold w-full h-48 sm:h-61.5 flex justify-center items-center ${index === 0 ? "rounded-bl-2xl" : ""} transition-all duration-500`}>
              <div className="text-center">
                <h3 className={`${item.textColor} font-bold text-lg sm:text-xl`}>{item.text}</h3>
                <p className={`${item.textColor} text-sm sm:text-base`}>{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2nd row - 3 cards */}
        <div className="flex transition-all duration-500">
          <div className="bg-transparent w-full h-48 sm:h-61.5"></div>
          {cards.slice(4, 7).map((item, index) => (
            <div key={index} style={{ backgroundColor: item.bg }} className={`font-semibold w-full h-48 sm:h-61.5 flex justify-center items-center transition-all duration-500 ${index === 0 ? "rounded-bl-2xl" : ""} `}>
              <div className="text-center">
                <h3 className={`${item.textColor} font-bold text-lg sm:text-xl`}>{item.text}</h3>
                <p className={`${item.textColor} text-sm sm:text-base`}>{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 3rd row - 2 cards */}
        <div className="flex transition-all duration-500">
          <div className="bg-transparent w-full h-48 sm:h-61.5"></div>
          <div className="bg-transparent w-full h-48 sm:h-61.5"></div>
          {cards.slice(7, 9).map((item, index) => (
            <div key={index} style={{ backgroundColor: item.bg }} className={`font-semibold w-full h-48 sm:h-61.5 flex justify-center items-center transition-all duration-500 ${index === 0 ? "rounded-bl-2xl" : ""}`}>
              <div className="text-center">
                <h3 className={`${item.textColor} font-bold text-lg sm:text-xl`}>{item.text}</h3>
                <p className={`${item.textColor} text-sm sm:text-base`}>{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>

       

        {/* Mobile Heading */}
        <div className="block sm:hidden bg-transparent p-4 rounded-md relative bottom-30">
          <h1 className="text-white font-bold leading-tight font-poppins tracking-tighter pt-56 md:pt-0 text-4xl ">
            Driving Success<br />
            Through Expert<br />
            IT Consulting Services
          </h1>
          <p className="text-white text-xs md:text-base xl:text-xl font-normal mt-3 font-poppins">
            Agility, Ingenuity, Reliability: Powering Progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Demo;
