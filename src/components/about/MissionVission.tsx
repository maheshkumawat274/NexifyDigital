

const MissionVisionSection = () => {
  return (
    <section className="bg-white text-gray-700 py-8 sm:py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Our Mission */}
        <div className="relative">
          <div className="absolute left-0 top-2 h-24 w-1 bg-gradient-to-b from-pink-500 to-yellow-500"></div>
          <div className="pl-6">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At NexifyDigital, our mission is to empower businesses by delivering innovative IT solutions that drive efficiency, engagement, and growth. We are committed to leveraging cutting-edge technology and our team's expertise to support our clients in achieving operational excellence.
            </p>
            <p className="text-gray-700">
              We aim to transform the way businesses operate in the digital world by developing scalable, secure, and user-friendly solutions. Through collaboration and a deep understanding of our clients' needs, we help them stay ahead in their industry.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="relative">
          <div className="absolute left-0 top-2 h-24 w-1 bg-gradient-to-b from-pink-500 to-yellow-500"></div>
          <div className="pl-6">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              Our vision at NexifyDigital is to become a global leader in IT services by continuously pushing boundaries and inspiring innovation. We strive to redefine digital transformation with forward-thinking solutions and foster long-term partnerships built on transparency, trust, and exceptional value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
