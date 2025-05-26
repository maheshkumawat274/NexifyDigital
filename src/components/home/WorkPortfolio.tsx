import { useRef } from 'react';
import Slider from 'react-slick';
import './workportfolio.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'E-Commerce Website Development',
    description: 'We develop e-commerce websites with filtering, comparison, cart, payments, and user accounts—ideal for fashion, electronics, grocery, and multi-vendor stores.',
    image: './imgs/portfolio1.jpg',
    stats: [
      { value: '3.2s', label: 'Avg Load Time' },
      { value: '42%', label: 'Conversion Rate' },
      { value: '15+', label: 'Monthly Orders' }
    ]
  },
  {
    title: 'Sustainable Fashion E-Commerce',
    description: 'Built an eco-friendly clothing marketplace with fabric traceability, carbon footprint calculator, and recycling program',
    image: './imgs/portfolio2.jpg',
    stats: [
      { value: '85%', label: 'Organic Traffic' },
      { value: '65%', label: 'Mobile Users' },
      { value: '20+', label: 'Eco Brands' }
    ]
  },
  {
    title: 'Multi-Vendor Marketplace',
    description: 'Created a complete marketplace solution with vendor dashboards, commission management, and dispute resolution system',
    image: './imgs/multi-vendor.jpg',
    stats: [
      { value: '80+', label: 'Active Sellers' },
      { value: '10k+', label: 'Monthly Visits' },
      { value: '0.1%', label: 'Dispute Rate' }
    ]
  },
  {
    title: 'Mobile Application Development',
    description: 'Skilled in cross-platform app development: e-commerce, fitness, education, IoT, community apps with real-time sync, offline mode, and secure payments.',
    image: './imgs/Importance-of-mobile-apps.jpg',
    stats: [
      { value: '100%', label: 'Custom Solutions' },
      { value: 'Secure', label: 'Data Encryption' },
      { value: 'Multi-Platform', label: 'iOS & Android' }
    ]
  },
  {
    title: 'Gaming Application Development',
    description: 'Experienced in 2D/3D game development including Ludo, Color Trading, and casual apps with multiplayer, in-app purchases, and cross-platform support.',
    image: './imgs/1717049768-2991.webp', 
    stats: [
      { value: 'Engaging', label: 'Game Mechanics' },
      { value: 'Optimized', label: 'Performance' },
      { value: 'Scalable', label: 'Architecture' }
    ]
  },
  {
    title: 'Enterprise Business Software',
    description: 'Developed comprehensive management solution with integrated CRM, inventory control, and accounting modules',
    image: './imgs/Top-6-Software-Development-Methodologies.jpg',
    stats: [
      { value: '200+', label: 'Enterprise Clients' },
      { value: '95%', label: 'System Uptime' },
      { value: '40%', label: 'Efficiency Gain' }
    ]
  }
];

const PortfolioSection = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="portfolio-section min-h-screen relative px-2 bg-white text-gray-700">
      <div className="pt-12 bg-white z-10">
        <h1 className="text-4xl font-bold text-center mb-4">What We Do</h1>
        <p className="text-lg max-w-3xl mx-auto text-center">
          👉 Explore our diverse portfolio at NexifyDigital to see how we deliver innovative and scalable IT solutions across industries.
        </p>
      </div>

      <div className="mt-12 px-2 md:px-10 relative">
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="outline-none">
              <div className="portfolio-card w-full  sm:h-auto bg-gray-100 rounded-xl flex flex-col md:flex-row overflow-hidden">
                {/* Content */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="stat-item">
                        <span className="text-xl font-bold text-blue-600">{stat.value}</span>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PortfolioSection;