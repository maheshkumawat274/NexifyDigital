import  { useEffect, useState } from "react";

const cardStructure = [
  [{ style: "rounded-tl-[40px]" }, {}, { style: "rounded-tr-[40px]" }],
  [{}, {}],
  [{ style: "rounded-bl-[40px] rounded-br-[40px]" }],
];

// Initial content and background styles
const rotatingContent = [
  {
    content: "Transform",
    bg: "bg-[#3249b0] text-white font-semibold text-base md:text-xl flex items-center justify-center",
  },
  {
    content: (
      <div className="text-white flex flex-col items-center justify-center h-full">
        <span className="font-bold text-2xl md:text-3xl tracking-tight font-poppins">Clutch</span>
        <span className="mt-1 text-base md:text-lg font-bold font-poppins">Top B2B</span>
        <span className="text-xs md:text-base mt-1 font-light text-center leading-tight">
          Providers in the Indian<br />
          Emerging Tech Market for<br />
          2024
        </span>
      </div>
    ),
    bg: "bg-[#3c54c2]",
  },
  {
    content: "Convert",
    bg: "bg-[#3f59c9] text-white font-semibold text-base md:text-xl flex items-center justify-center",
  },
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full">
        <span className="font-bold text-sm md:text-xl text-white font-poppins">Attract</span>
      </div>
    ),
    bg: "bg-[#465fd4]",
  },
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="Microsoft"
          className="w-10 md:w-16 mb-2"
        />
        <span className="text-[#273aa0] font-semibold text-xs md:text-base">Microsoft Solutions Partner</span>
        <span className="text-[#273aa0] text-xs">Microsoft Cloud</span>
      </div>
    ),
    bg: "bg-[#d6dfff]",
  },
  {
    content: (
      <div className="text-white flex flex-col items-center justify-center h-full">
        <span className="font-bold text-2xl md:text-3xl tracking-tight font-poppins">Clutch</span>
        <span className="mt-1 text-base md:text-lg font-bold font-poppins">Top 12</span>
        <span className="text-xs md:text-base mt-1 font-light text-center leading-tight">
          Out of 100 top Mobile App<br />
          Developers in India, 2024
        </span>
      </div>
    ),
    bg: "bg-[#2a3eaa]",
  },
];

function TopSection() {
  const [rotatingData, setRotatingData] = useState(rotatingContent);

  useEffect(() => {
  const interval = setInterval(() => {
    setRotatingData((prev) => {
      const newData = [...prev];
      const last = newData.pop();
      if (last !== undefined) {
        newData.unshift(last);
      }
      return newData;
    });
  }, 2000);

  return () => clearInterval(interval);
}, []);


  // Flat data index tracker
  let index = 0;

  return (
    <div className="min-h-screen w-full px-2 bg-[#273aa0] font-sans relative overflow-x-hidden ">
      <div className="max-w-[1560px] mx-auto px-0 flex flex-col md:flex-row items-center justify-center h-screen">
        <div className="flex-1 flex flex-col items-start justify-center h-full px-3 md:px-12 md:text-left min-w-[260px]">
          <h1 className="text-white font-bold leading-tight mb-7 font-poppins tracking-tighter pt-56 md:pt-0 text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl">
            Driving Success<br />
            Through Expert<br />
            IT Consulting Services
          </h1>
          <p className="text-white text-xs md:text-base xl:text-xl font-normal mt-3 font-poppins">
            Agility, Ingenuity, Reliability: Powering Progress.
          </p>
        </div>

        <div className="flex-none flex flex-col items-end justify-center h-full w-full md:w-[420px] lg:w-[600px] xl:w-[800px] max-w-full">
          <div className="flex flex-col h-full justify-between w-full" style={{ maxWidth: 800, maxHeight: 480, aspectRatio: '5/3' }}>
            {cardStructure.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-row h-1/3 min-h-[60px]">
                {row.map((card, colIndex) => {
                  const data = rotatingData[index++];
                  return (
                    <div
                      key={colIndex}
                      className={`flex-1 flex items-center justify-center ${data.bg} ${card.style || ""}`}
                      style={{
                        borderTopLeftRadius: card.style?.includes("tl") ? 40 : 0,
                        borderTopRightRadius: card.style?.includes("tr") ? 40 : 0,
                        borderBottomLeftRadius: card.style?.includes("bl") ? 40 : 0,
                        borderBottomRightRadius: card.style?.includes("br") ? 40 : 0,
                      }}
                    >
                      {data.content}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
