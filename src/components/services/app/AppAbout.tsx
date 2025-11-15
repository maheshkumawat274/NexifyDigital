
import "../website//AboutWebsite.css"; // You can rename this to AboutApp.css if needed

const AboutApp = () => {
 

  return (
    <section id="about-mobile-app-development"
        aria-label="About mobile app development services by Nexify Digital">
      <h1   id="mobile-app-development-heading" className="text-[#273AA0] text-center mt-8 font-bold text-3xl">
        Mobile App Development Company | Nexify Digital
      </h1>

      <div  className="flex flex-col lg:flex-row items-center justify-center px-2 md:px-20 py-16">
        {/* Left Side Image */}
        <div
          className="relative w-full lg:w-1/2 flex justify-center"
          
        >
          <img
            src="/imgs/mobile-app-development-delhi.jpg"
            alt="Custom Mobile App Development by Nexify Digital"
            className="rounded-lg shadow-lg w-full max-w-md"
            loading="lazy"

          />
          <div className="absolute top-1/2 right-[60px] transform -translate-y-1/2 about-circle">
            <img
              src="/imgs/about-circle.svg"
              alt="Mobile App Consultation Icon"
              className="w-20 md:w-24"
              loading="lazy"

            />
          </div>
        </div>

        {/* Right Side Content */}
        <div
          className="w-full lg:w-1/2 mt-10 md:mt-0 md:pl-10 px-2 sm:px-14 md:px-6"
          
        >
          <h2 className="text-4xl font-bold mt-2">
            Turn Your Idea into a Powerful Mobile App
          </h2>
          <p className="text-gray-600 mt-4">
            As a leading <strong>mobile app development company in Delhi NCR</strong>,
            we build high-performance Android and iOS apps designed to enhance
            user experience and boost business growth. From concept to launch,
            our team ensures scalable, secure, and user-friendly mobile
            solutions tailored to your business needs across India.
          </p>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-2 font-semibold">
              ✅ Android & iOS App Development
            </li>
            <li className="flex items-center gap-2 font-semibold">
              ✅ User-Centric UI/UX Design
            </li>
            <li className="flex items-center gap-2 font-semibold">
              ✅ Fast, Scalable & Secure Code
            </li>
            <li className="flex items-center gap-2 font-semibold">
              ✅ Real-time Data Sync & APIs
            </li>
            <li className="flex items-center gap-2 font-semibold">
              ✅ Post-launch Maintenance & Updates
            </li>
          </ul>
          <a href="tel:+916376228917">
            <button aria-label="Request free mobile app development consultation from Nexify Digital" className="mt-6 bg-[#273AA0] cursor-pointer hover:underline text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f2f7a] transition">
              Request Free App Consultation →
            </button>
          </a>
        </div>
      </div>
    </section>
    
  );
};

export default AboutApp;
