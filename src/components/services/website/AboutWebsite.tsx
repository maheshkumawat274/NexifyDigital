
import "./AboutWebsite.css"; // Ensure you create this CSS file for animations

const AboutWebsite = () => {
  return (
    <section id="about-website-development" aria-label="About Nexify Digital website development services">
      <h1 className="text-[#273AA0] text-center mt-8 font-bold text-3xl">About Website Development</h1>
    <div className="flex flex-col lg:flex-row items-center justify-center px-2 md:px-20 py-16">
      
      {/* Left Side Image */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img
          src="/imgs/nexify-digital-team-india.jpg"
          alt="Nexify Digital web development team working in India"

          className="rounded-lg shadow-lg w-full max-w-md"
        />
        
        <div className="absolute top-1/2 right-[60px] transform -translate-y-1/2 about-circle">
          <img src="/imgs/about-circle.svg" alt="Free Website Consultation icon"
           className="w-20 md:w-24" />
        </div>
      </div>
      {/* Right Side Content */}
      <div className="w-full lg:w-1/2  mt-10 md:mt-0 md:pl-10 px-2 sm:px-14 md:px-6 ">
        <h2 className="text-4xl font-bold mt-2">
          Build a Website that Grows Your Business
        </h2>
        <p className="text-gray-600 mt-4">
          We craft high-performance, responsive websites that reflect your brand and engage your audience. As a trusted website development company in India and Delhi NCR, we deliver custom web solutions designed to help businesses grow online.

        </p>
        <ul className="mt-6 space-y-2">
          <li className="flex items-center gap-2 font-semibold">
            ✅ Custom Website Design & Development
          </li>
          <li className="flex items-center gap-2 font-semibold">
            ✅ Mobile-Responsive and User-Friendly Interfaces
          </li>
          <li className="flex items-center gap-2 font-semibold">
            ✅ Fast Loading Speed & Optimized Performance
          </li>
          <li className="flex items-center gap-2 font-semibold">
            ✅ Secure Hosting & Seamless Deployment
          </li>
          <li className="flex items-center gap-2 font-semibold">
            ✅ Ongoing Maintenance & Support
          </li>
        </ul>
        <a href="tel:+916376228917">
          <button 
          aria-label="Call Nexify Digital for website development consultation"
          title="Free Website Consultation"

          className="mt-6 bg-[#273AA0] cursor-pointer hover:underline text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2739a0] transition">
          Get a Free Website Consultation →
        </button>
        </a>
      </div>
      </div>
    </section>
  );
};

export default AboutWebsite;

