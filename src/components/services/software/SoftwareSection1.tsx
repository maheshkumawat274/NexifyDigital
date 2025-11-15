import "../website/AboutWebsite.css"; // Ensure you create this CSS file for animations

const SoftwareSection1 = () => {
  return (
    <div>
      <h1 className="text-[#273AA0] text-center mt-8 font-bold text-4xl">
        Custom Software Development <br /> Solutions Tailored for Your Business
      </h1>

      <section className="flex flex-col lg:flex-row items-center justify-center px-2 md:px-20 py-16">
        {/* Left Side Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src="/imgs/nexify-digital-team-india.jpg"
            alt="Software Development Team"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
          <div className="absolute top-1/2 right-[60px] transform -translate-y-1/2 about-circle">
            <img
              src="/imgs/about-circle.svg"
              alt="Software Icon"
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
            We specialize in delivering customized software solutions for businesses of all sizes. From ERP systems to customer management tools, our software helps streamline operations and drive business growth with cutting-edge technology and expert development.
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
          <a href="tel:+916376228917">
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
