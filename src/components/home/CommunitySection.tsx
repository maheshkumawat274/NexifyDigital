import { Link } from "react-router-dom";

const CommunitySection = () => {
  return (
    <section id="community-work"  className="relative bg-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16">

        {/* Left Image with Circle */}
        <div className="relative md:w-1/2 w-full flex justify-center items-center pt-10">
          {/* Orange Circle Behind Image */}
          <div className="absolute w-[320px] h-[320px] bg-gradient-to-tr from-[#3647AD] to-purple-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />

          {/* Team Image */}
          <img
            src='./imgs/nexify-digital-community-team.png'
            alt="Nexify Digital team collaboration and community culture"
            className="w-[300px] md:w-[350px] object-contain relative top-4 md:top-4 z-10"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">Community & Work Culture at Nexify Digital
</h2>
          <p className="text-gray-500 text-[16px] leading-relaxed mb-10 max-w-xl">
            We are trusted by startups and growing enterprises across India because we deliver innovative digital solutions that simplify operations, boost productivity, and drive real growth through our expert web development, software, and digital services.

          </p>

          {/* Stats Box */}
          <div className="relative right-0 md:right-[250px] lg:right-[400px] top-[0px] md:top-[30px] lg:top-[120px] bg-white rounded-xl shadow-lg px-6 py-6 z-10 w-full sm:w-[400px] md:w-full">
            <div className="flex justify-between items-center gap-6 md:gap-0">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#3647AD]">250+</h3>
                <p className="text-gray-600 mt-1">Happy Customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#3647AD]">300+</h3>
                <p className="text-gray-600 mt-1">People</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#3647AD]">500+</h3>
                <p className="text-gray-600 mt-1">Projects</p>
              </div>
            </div>

            {/* Orange Line + Button */}
            <div className="absolute right-[-50px] bottom-0 h-[4px] w-[80px] bg-[#3647AD] hidden sm:block"></div>
            <button className="absolute right-[0px] sm:right-[-160px] bottom-[-25px] bg-[#3647AD] hover:bg-[#1a30ad]  text-white font-medium py-2 px-4 rounded-md shadow-md cursor-pointer">
              <Link to='/career' aria-label="Join Nexify Digital careers and work culture team">Join Our Team</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
