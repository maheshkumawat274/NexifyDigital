
const ContactSection = () => {
  return (
    <section id="contact-section" aria-label="Contact Nexify Digital section"
 className="relative flex flex-col sm:flex-row items-center px-2 sm:px-8 justify-between bg-white overflow-hidden">
      {/* Left Side Text */}
      <div className="p-4 md:p-16 lg:p-24 z-10">
        <div className="relative">
          {/* Gradient Circle */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-400 to-yellow-300 rounded-full opacity-70 -z-10" />
          {/* Gray Circle */}
          <div className="absolute top-10 left-40 w-12 h-12 bg-gray-300 rounded-full opacity-50 -z-10" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800">
            We’d love to hear from you!
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl">
            We’d love to hear from you!
            Connect with Nexify Digital — your trusted partner for website development, app creation, and digital solutions.

            Our team is ready to bring your ideas to life.
          </p>

        </div>
      </div>

      {/* Right Side Image */}
      <div className=" relative">
        <div className="">
          <img
            src="./imgs/contact-nexify-digital-web-app-services.webp"
            alt="Contact Nexify Digital team for website and app development inquiries"
            className="object-cover w-[150%] sm:w-full h-64 sm:h-full"
            loading="lazy"
          />
        </div>
      </div>

    </section>
  );
};

export default ContactSection;
