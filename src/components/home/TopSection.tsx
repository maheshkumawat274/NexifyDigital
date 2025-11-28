const TopSection = () => {
  return (
    <section className="w-full py-4 md:py-10 px-4 md:px-16">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-gray-700">

        {/* LEFT CONTENT */}
        <div className="space-y-5">
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Driving Success Through Expert IT Consulting Services</h1>
            <h2 className="text-lg lg:text-2xl mb-6">
              Agility, Ingenuity, Reliability: Powering Progress.
            </h2>
            <p className="text-md lg:text-lg">Reach out to us to turn your business idea into reality with cutting-edge technology and user-friendly design.</p>
          </div>
          

          <button className="px-6 py-3 bg-[#233AA7] cursor-pointer hover:underline text-white rounded-md shadow transition">
            <a
             href="https://wa.me/916376228917"
             target="_blank"
             rel="noopener noreferrer"
             >Contact Now</a>         
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            src="/imgs/Nexify Digital-Top HomePage.png"
            alt="Affordable Pricing"
            className="w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default TopSection;
