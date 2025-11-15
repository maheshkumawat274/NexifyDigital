import React, { useState } from "react";

const services = [
  {
    title: "Business Website",
    description: "Professional websites for startups, SMEs, and enterprises to represent their brand, services, and mission online.",
    image: "/imgs/business.jpg",
  },
  {
    title: "eCommerce Website",
    description: "Fully functional online stores with product catalogs, secure payments, and user-friendly interfaces to boost online sales.",
    image: "/imgs/portfolio2.jpg",
  },
  {
    title: "Portfolio Website",
    description: "Showcase your creative work with modern and elegant portfolio sites for designers, developers, artists, and freelancers.",
    image: "/imgs/home.jpg",
  },
  {
    title: "Educational Website",
    description: "Web platforms for schools, coaching centers, and ed-tech businesses with features like course listings and online learning.",
    image: "/imgs/job-search-career-advice-stories.jpg",
  },
  {
    title: "Blog / News Website",
    description: "Content-driven websites for bloggers, journalists, or news agencies to share regular posts, updates, and media.",
    image: "/imgs/online-message-blog.jpg",
  },
  {
    title: "Custom Web Portal",
    description: "Tailor-made portals like real estate listings, job boards, booking systems, and other business-specific solutions.",
    image: "/imgs/IT-Infra.jpg",
  },
  {
    title: "Landing Page",
    description: "High-converting single-page websites for product launches, campaigns, or lead generation.",
    image: "/imgs/images.jpeg",
  },
  {
    title: "NGO / Charity Website",
    description: "Websites for non-profits and charities to share their mission, collect donations, and engage supporters.",
    image: "/imgs/ngo.jpg",
  },
  {
    title: "Event Website",
    description: "Websites for conferences, weddings, concerts, and events with RSVP, ticketing, and schedules.",
    image: "/imgs/people-festival (1).jpg",
  },
  {
    title: "Healthcare / Clinic Website",
    description: "Websites for doctors, clinics, and hospitals with services info, appointment booking, and contact details.",
    image: "/imgs/appointment.jpg",
  },
  {
    title: "Restaurant / Food Ordering Website",
    description: "Websites for restaurants and cafés with menus, online orders, reservations, and delivery options.",
    image: "/imgs/restaurant-interior (1).jpg",
  },
  {
    title: "Real Estate Website",
    description: "Websites with searchable property listings, agent details, and inquiry forms for real estate businesses.",
    image: "/imgs/complex-aerial-view-city (1).jpg",
  },
  {
    title: "Travel / Tour Website",
    description: "Tourism websites with destination highlights, booking systems, and tour package showcases.",
    image: "/imgs/full-shot-travel-concept-with-landmarks (1).jpg",
  },
  {
    title: "Resume / Personal Website",
    description: "Personal branding or resume websites for individuals to showcase their skills, experience, and portfolio.",
    image: "/imgs/job-search-career-advice-stories.jpg",
  },
  {
    title: "Matrimonial Website",
    description: "Matchmaking platforms for users to create profiles, search, and connect for marriage purposes.",
    image: "/imgs/MatrimonialCases.jpg",
  },
  {
    title: "Directory Listing Website",
    description: "Websites to list businesses, professionals, or services with categories, reviews, and contact options.",
    image: "/imgs/pexels-cottonbro-5077049 (1).jpg",
  },
  {
    title: "Forum / Community Website",
    description: "Interactive community sites with user discussions, Q&A, groups, and social features.",
    image: "/imgs/pexels-jibarofoto-2774556 (1).jpg",
  },
  {
    title: "Job Portal Website",
    description: "Job board websites for employers and job seekers with profile creation, listings, and applications.",
    image: "/imgs/img-main-careers-2018_1.webp",
  },
  {
    title: "SAAS Product Website",
    description: "Websites to promote and provide access to Software-as-a-Service products with feature details and subscriptions.",
    image: "/imgs/home.jpg",
  },
  {
    title: "Membership Website",
    description: "Websites with login-restricted content, subscription plans, and exclusive access for members.",
    image: "/imgs/ngo.jpg",
  },
  {
    title: "Government / Municipal Website",
    description: "Websites for local or government authorities to share updates, services, and public information.",
    image: "/imgs/pexels-israyosoy-28624858 (1).jpg",
  },
  {
    title: "Gym / Fitness Website",
    description: "Websites for gyms and fitness coaches with class schedules, trainer info, and membership options.",
    image: "/imgs/pexels-willpicturethis-1954524 (1).jpg",
  },
  {
    title: "Construction / Builder Website",
    description: "Websites for contractors and builders to showcase past projects, services, and contact information.",
    image: "/imgs/pexels-mikael-blomkvist-8961030 (1).jpg",
  },
  {
    title: "Law Firm Website",
    description: "Professional websites for lawyers and legal firms to present services, experience, and client testimonials.",
    image: "/imgs/pexels-pavel-danilyuk-8112115 (1).jpg",
  },
  {
    title: "Salon / Spa Website",
    description: "Websites for beauty salons and spas with service listings, gallery, and online booking.",
    image: "/imgs/salon.jpg",
  },
  {
    title: "Car Dealer / Automotive Website",
    description: "Websites for car dealers with vehicle listings, filters, pricing, and inquiry forms.",
    image: "/imgs/car.jpg",
  },
  {
    title: "Hotel / Resort Booking Website",
    description: "Booking-enabled websites for hotels and resorts with room availability, pricing, and online reservations.",
    image: "/imgs/hotel.jpg",
  },
  {
    title: "Crypto / Blockchain Website",
    description: "Modern websites for cryptocurrency projects, tokens, wallets, and blockchain-based platforms.",
    image: "/imgs/crypto.jpg",
  },
  {
    title: "Finance / Loan / Investment Website",
    description: "Websites for financial services, investment firms, loan providers, and advisors to showcase services and build trust.",
    image: "/imgs/loan.jpg",
  },
  {
    title: "Photography Website",
    description: "Beautiful gallery websites for photographers to display their portfolio and attract clients.",
    image: "/imgs/photography.jpg",
  },
];


const TypesWebsite: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Show only first 9 or all based on state
  const visibleServices = showAll ? services : services.slice(0, 9);

  return (
    <section id="types-of-websites" className="bg-gray-100 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <h1 className="text-[#273AA0] font-bold text-lg">Our Website Solutions</h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-bold mt-2">
              We Build <span className="block">Every Type of Website You Need — Custom Web Development Company in India</span>
            </h1>
          </div>

           <a
          href="https://portfolio.nexifydigital.in" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer" aria-label="portfolio"
          >   
            <button aria-label="Visit Nexify Digital portfolio"
              title="Portfolio - Nexify Digital"
              className="mt-8 px-6 py-3 cursor-pointer bg-[#273AA0] text-white font-bold rounded-full hover:bg-[#2739a0ee] transition">
              Visit Portfolio &#8599;
            </button>
          </a>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-left transition-transform duration-300 hover:shadow-2xl group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <span className="bg-[#273AA0] text-white p-2 rounded-full h-12 w-12 flex justify-center items-center transition-transform duration-300">
                  <span className="inline-block text-3xl group-hover:rotate-45 transition-transform duration-300">
                    &#8599;
                  </span>
                </span>
              </div>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <div className="relative overflow-hidden mt-4 rounded-lg">
                <img
                  src={service.image}
                  alt={`${service.title} created by Nexify Digital — website development company in India`}
                  loading="lazy"
                  className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-300 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Button */}
        {services.length > 9 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-[#273AA0] cursor-pointer text-white font-semibold rounded-full hover:bg-[#2739a0e7] transition"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TypesWebsite;
