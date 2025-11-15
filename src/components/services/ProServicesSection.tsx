
const ProServicesSection = () => {
  return (
    <section id="services-overview" className="relative bg-white pb-8 md:pb-16 overflow-hidden">
      <div className="w-full mx-auto grid lg:grid-cols-2 gap-10 items-stretch relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-600 text-xl">🏠</span>
            <p className="uppercase tracking-wide text-sm font-semibold text-gray-600">
              Our Services
            </p>
          </div>
          <h3 className="text-[#1A3E72] font-bold text-xl sm:text-3xl">Our Professional Web & App Development Services</h3>
          <p className="text-gray-600 text-md sm:text-lg">
            At Nexify Digital, a trusted website development company in Delhi NCR, we offer a complete range of IT and digital services. From creating modern websites as a leading web design company in Delhi to building high-performance apps as a mobile app development company in Delhi, we deliver solutions that support real business growth. We also provide ecommerce website development in Delhi to help brands build a strong online presence with user-focused, innovative technology.

          </p>
           <a
            href="https://wa.me/916376228917"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Nexify Digital — Web & App Development Services"
            title="Contact Nexify Digital on WhatsApp"
            className="px-6 py-2 bg-[#1A3E72] text-white cursor-pointer rounded-sm transform hover:-translate-y-0.5 transition inline-block"
          >
            Let's Talk
          </a>
        </div>

        {/* Right Images */}
        <div className="relative w-full px-10 flex justify-center sm:justify-end items-center">
            {/* Large Image */}
          <img
            src="/imgs/nexify-digital-web-app-services.webp"
            alt="Professional web development services by Nexify Digital — website development company in Delhi NCR"
            className="rounded-2xl shadow-lg w-3/4 relative left-18 md:left-10"
          />

          {/* Small Image (overlap) */}
          <img
            src="/imgs/services-web-development.webp"
            alt="Mobile app development and web design services by Nexify Digital"
            className="absolute left-0 md:-left-4 bottom-0 sm:bottom-4 w-1/2 rounded-2xl shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default ProServicesSection;