
const WelcomePage = () => {
  return (
    <main className="font-sans text-gray-700">
      {/* Welcome Section */}
      <section className="px-4 md:px-20 py-16 bg-white">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left: Welcome Text */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome To NexifyDigital</h1>
            <p className="text-lg md:text-xl">
              NexifyDigital is your trusted partner in all things web. As a premier web development company,
              we provide custom website solutions tailored to your business needs, goals, and vision. Our team of experienced web developers
              is committed to guiding you through your online transformation, turning business ideas into powerful web experiences.
              With NexifyDigital, success is not just a destination, it’s a journey we take together.
            </p>
          </div>

          {/* Right: Image + Button */}
          <div className="w-full md:w-1/2 text-center md:text-left flex justify-center items-center">
            <div>
              <img src="./imgs/conversation.webp" alt="Handshake" className="w-full max-w-sm mx-auto md:mx-0 mb-6" />
            <p className="text-xl font-medium">
              Start Your <span className="text-[#273aa0] font-semibold">Personalized Web Journey Now!</span>
            </p>
            <button className="mt-4 px-6 py-2 bg-[#273aa0] text-white rounded hover:bg-[#273aa0] transition-all">
              Let's Talk
            </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 md:px-20 py-16 bg-white border-t">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech-Adept, Business-Centric: Get To Know Us</h2>
        <p className="text-lg max-w-8xl">
          NexifyDigital was founded with the vision of empowering businesses through impactful web solutions.
          Our growth is rooted in collaboration, quality, and innovation. From startups to enterprises, we provide scalable and tailored
          web development services with a personal touch. Whether it's building your first website or modernizing an existing one,
          we are committed to driving your digital journey forward.
        </p>
      </section>
    </main>
  );
};

export default WelcomePage;
