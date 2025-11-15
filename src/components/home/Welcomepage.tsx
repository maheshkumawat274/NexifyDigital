
const WelcomePage = () => {
  return (
    <main className="font-sans text-gray-700">
      {/* Welcome Section */}
      <section className="px-4 md:px-16 py-8 bg-white">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left: Welcome Text */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome To Nexify Digital</h1>
            <p className="text-lg md:text-xl">
              Nexify Digital is your trusted partner for responsive and SEO-friendly website development in Delhi NCR. As a premier web development company, we provide custom website solutions tailored to your business needs, goals, and vision. Our team of experienced web developers
              is committed to guiding you through your online transformation, turning business ideas into powerful web experiences.
              With Nexify Digital, success is not just a destination, it’s a journey we take together.
            </p>
          </div>

          {/* Right: Image + Button */}
          <div className="w-full md:w-1/2 text-center md:text-left flex justify-center items-center">
            <div>
              <img src="./imgs/conversation.webp" alt="Professional team working at Nexify Digital – website development company in Delhi NCR" className="w-full max-w-sm mx-auto md:mx-0 mb-6" />
            <p className="text-xl font-medium">
              Start Your <span className="text-[#273aa0] font-semibold">Personalized Web Journey Now!</span>
            </p>
            <a
            href="https://wa.me/916376228917" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer" aria-label="Chat on WhatsApp with Nexify Digital – web development company in Delhi NCR"
            title="Contact NexifyDigital via WhatsApp">
            <button className="mt-4 px-6 py-2 bg-[#273aa0] text-white rounded hover:bg-[#273aa0] transition-all cursor-pointer">
              Let's Talk
            </button>
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 md:px-16 py-8 bg-white border-t">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech-Adept, Business-Centric: Get To Know Nexify Digital</h2>
        <p className="text-lg max-w-8xl">
          NexifyDigital was founded with the vision of empowering businesses through impactful web solutions as a trusted website development company in Delhi NCR. 
          Our growth is rooted in collaboration, quality, and innovation, helping brands establish a strong digital presence like a leading web design company in Delhi. 
          From startups to enterprises, we provide scalable and tailored web development services, including ecommerce website development in Delhi, with a personal touch. 
          Whether it's building your first website, partnering for mobile app development as a reliable mobile app development company in Delhi, or modernizing an existing platform, 
          we are committed to driving your digital journey forward with the precision and strategy trusted by top SEO companies in Gurgaon.
          
        </p>
      </section>
    </main>
  );
};

export default WelcomePage;
