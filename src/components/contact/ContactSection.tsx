
const ContactSection = () => {
  return (
    <section className="relative flex flex-col sm:flex-row items-center px-2 sm:px-8 justify-between bg-white overflow-hidden">
      {/* Left Side Text */}
      <div className="p-8 md:p-16 lg:p-24 z-10">
        <div className="relative">
          {/* Gradient Circle */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-400 to-yellow-300 rounded-full opacity-70 -z-10" />
          {/* Gray Circle */}
          <div className="absolute top-10 left-40 w-12 h-12 bg-gray-300 rounded-full opacity-50 -z-10" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800">
            We’d love to hear from you!
          </h1>
        </div>
      </div>

      {/* Right Side Image */}
      <div className=" relative">
        <div className="">
          <img
            src="./imgs/contact-us-banner-desktop.webp"
            alt="Woman working on laptop"
            className="object-cover w-[150%] sm:w-full h-64 sm:h-full"
            loading="lazy"
          />
        </div>
      </div>

    </section>
  );
};

export default ContactSection;
