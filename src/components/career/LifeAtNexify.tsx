

// =====================================
// 5️⃣ LifeAtNexify.tsx (Separate Component)
// =====================================

import React from "react";
import CircularGallery from "../ui/GalleryForCareer";

const LifeAtNexify: React.FC = () => {
  

  return (
    <section
      id="life-at-nexify"
      className="w-full py-10 bg-[#F3F4F6] px-4 md:px-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#233BA7] mb-4">
          Life at Nexify Digital
        </h2>

        <p className="text-gray-600  max-w-2xl mx-auto">
          A workplace where creativity, innovation, and growth come together. Explore our
          environment and team culture at Nexify Digital — a modern IT company in Delhi.
        </p>

        {/* Image Grid */}
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>
      </div>
    </section>
  );
};

export default LifeAtNexify;

