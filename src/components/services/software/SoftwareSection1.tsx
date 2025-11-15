import "../website/AboutWebsite.css"; // Ensure you create this CSS file for animations

const SoftwareSection1 = () => {
  return (
    <div id="custom-software-development-delhi-ncr"
      aria-label="Custom software development company in Delhi NCR by Nexify Digital">
      <h1 className="text-[#273AA0] text-center mt-8 font-bold text-4xl">
        Custom Software Development <br /> Solutions Tailored for Your Business
      </h1>

      <section className="flex flex-col lg:flex-row items-center justify-center px-2 md:px-20 py-16">
        {/* Left Side Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src="/imgs/nexify-digital-team-india.jpg"
            alt="Nexify Digital software development team in India"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
          <div className="absolute top-1/2 right-[60px] transform -translate-y-1/2 about-circle">
            <img
              src="/imgs/about-circle.svg"
              alt="Nexify Digital software development icon"
              className="w-20 md:w-24"
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2 mt-10 md:mt-0 md:pl-10 px-2 sm:px-14 md:px-6">
          <h1 className="text-4xl font-bold mt-2">
            Build Reliable, Scalable & Smart Software Solutions
          </h1>
          <p className="text-gray-600 mt-4">
            As a trusted software development company in Delhi NCR, we deliver 
            customized and scalable software solutions for businesses of every 
            size. From ERP systems to CRM platforms, our development team builds 
            secure, high-performance applications that streamline operations and 
            support long-term business growth across India.
          </p>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-2 font-semibold">
              ✅ Custom Web & Desktop Application Development
            </li>
            <li className="flex items-center gap-2 font-semibold">
              ✅ CRM & ERP Software Solutions
            </li>
            <li className="flex items-center gap-2 font-semibold">
              ✅ Cloud-Based Systems & API Integration
            </li>
            <li className="flex items-center gap-2 font-semibold">
              ✅ Secure & Scalable Architecture
            </li>
            <li className="flex items-center gap-2 font-semibold">
              ✅ Ongoing Support & Maintenance
            </li>
          </ul>
          <a href="tel:+916376228917"title="Free software development consultation - Nexify Digital"
            aria-label="Call Nexify Digital for software development consultation">
            <button className="mt-6 bg-[#273AA0] cursor-pointer hover:underline text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2739a0] transition">
              Get a Free Software Consultation →
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default SoftwareSection1;
