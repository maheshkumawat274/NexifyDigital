const PricingInfoSection = () => {
  return (
    <section className="w-full py-4 md:py-16 px-4 md:px-16 bg-white">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-5">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-700">
            Affordable Pricing for Every Business
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our pricing is designed to be highly affordable and competitive.  
            We offer premium quality services at costs that are much lower  
            compared to the current market rates.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Please note that the prices shown on this page are approximate.  
            The final pricing may increase or decrease depending on your  
            exact project requirements, features, timeline, and complexity.
          </p>

          <button className="px-6 py-3 bg-[#233AA7] cursor-pointer hover:underline text-white rounded-md shadow  transition">
            <a href="tel:6376228917">Get a Custom Quote</a>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            src="/imgs/Pricing-Section-NexifyDigital.png"
            alt="Affordable Pricing"
            className="w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default PricingInfoSection;
