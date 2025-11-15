import "../website/AboutWebsite.css"; // Ensure you create this CSS file for animations

const DigitalSection1 = () => {
  return (
    <div>
      <h1 className="text-[#273AA0] text-center mt-8 font-bold text-4xl">
        Best SEO & Digital Marketing Agency in India
      </h1>

      <section className="flex flex-col lg:flex-row items-center justify-center px-2 md:px-20 py-16">
        {/* Left Side Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src="/imgs/nexify-digital-team-india.jpg"
            alt="Nexify Digital SEO and marketing team in India"
            loading="lazy"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
          <div className="absolute top-1/2 right-[60px] transform -translate-y-1/2 about-circle">
            <img
              src="/imgs/about-circle.svg"
              alt="SEO optimization illustration"
              loading="lazy"
              className="w-20 md:w-24"
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2 mt-10 md:mt-0 md:pl-10 px-2 sm:px-14 md:px-6">
          <h2 className="text-4xl font-bold mt-2">
            Drive Traffic, Rank Higher & Grow Your Business Online
          </h2>
          <p className="text-gray-600 mt-4">
            As a leading digital marketing agency in India, we provide data-driven SEO and marketing strategies that boost your online visibility. From increasing search engine rankings to generating qualified leads, we help businesses thrive in the digital world.
          </p>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-2 font-semibold">
              ✅ Advanced SEO Optimization (On-Page & Off-Page)
            </li>
            <li className="flex items-center gap-2 font-semibold">
              ✅ Google Ads & Paid Campaign Management
            </li>
            <li className="flex items-center gap-2 font-semibold">
              ✅ Social Media Marketing & Branding
            </li>
            <li className="flex items-center gap-2 font-semibold">
              ✅ Content Marketing & Blogging Services
            </li>
            <li className="flex items-center gap-2 font-semibold">
              ✅ Performance Tracking & Monthly Reports
            </li>
          </ul>
          <a href="tel:+916376228917">
            <button className="mt-6 bg-[#273AA0] cursor-pointer hover:underline text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2739a0] transition">
              Get a Free Digital Marketing Consultation →
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default DigitalSection1;
