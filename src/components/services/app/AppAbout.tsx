
import "../website//AboutWebsite.css"; // You can rename this to AboutApp.css if needed

const AboutApp = () => {
 

  return (
    <div>
      <h1 className="text-[#273AA0] text-center mt-8 font-bold text-3xl">
        Mobile App Development Company | Nexify Digital
      </h1>

      <section className="flex flex-col lg:flex-row items-center justify-center px-2 md:px-20 py-16">
        {/* Left Side Image */}
        <div
          className="relative w-full lg:w-1/2 flex justify-center"
          
        >
          <img
            src="/imgs/mobile-app-development-delhi.jpg"
            alt="Custom Mobile App Development by Nexify Digital"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
          <div className="absolute top-1/2 right-[60px] transform -translate-y-1/2 about-circle">
            <img
              src="/imgs/about-circle.svg"
              alt="Mobile App Consultation Icon"
              className="w-20 md:w-24"
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
            We specialize in creating custom mobile apps that enhance user
            experience, improve operations, and help your business grow. From
            concept to launch, we develop scalable and secure mobile solutions
            tailored to your needs.
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
            <button className="mt-6 bg-[#273AA0] cursor-pointer hover:underline text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f2f7a] transition">
              Request Free App Consultation →
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutApp;
