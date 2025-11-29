
import { useState } from "react";

type Card = {
  title: string;
  price: string;
  features: string[];
};

type TabData = {
  id: string;
  name: string;
  cards: Card[];
};

const tabs: TabData[] = [
  // -------------------------------------------
  // WORDPRESS WEBSITE
  // -------------------------------------------
  {
    id: "wordpress",
    name: "WordPress Website",
    cards: [
      {
        title: "Starter WordPress Site",
        price: "₹3,999 – ₹5,999",
        features: [
          "3–5 Pages",
          "Responsive Design",
          "Basic SEO",
          "Contact Form",
          "WhatsApp Chat Button",
          "Speed Optimization",
          "Security Setup",
          "Basic Theme Setup",
          "Content Upload",
          "Google Analytics",
          "7–15 Days Support",
        ],
      },
      {
        title: "Business WordPress Site",
        price: "₹6,999 – ₹9,999",
        features: [
          "5–8 Pages",
          "Custom Theme Setup",
          "Advanced SEO",
          "Mobile Friendly",
          "Speed Optimization",
          "Security Setup",
          "WhatsApp Chat Button",
          "Social Media Integration",
          "Content Upload",
          "Google Analytics",
          "15–30 Days Support",
        ],
      },
      {
        title: "Premium WordPress Site",
        price: "₹10,999 – ₹14,999",
        features: [
          "10+ Pages",
          "Premium Custom Theme",
          "Advanced Speed Optimization",
          "Firewall Security + Backups",
          "Advanced SEO + Schema",
          "Animations & Modern UI",
          "Payment Gateway / Booking",
          "WhatsApp & Chatbot Integration",
          "Google Analytics + Search Console",
          "Content Upload",
          "30–50 Days Support",
        ],
      },
    ],
  },

  // -------------------------------------------
  // WORDPRESS E-COMMERCE
  // -------------------------------------------
  {
    id: "wordpress-ecom",
    name: "WordPress E-Commerce",
    cards: [
      {
        title: "Basic WooCommerce Store",
        price: "₹7,999 – ₹11,999",
        features: [
          "Up to 10 Products",
          "Basic WooCommerce Setup",
          "Responsive Design",
          "Basic Filters",
          "UPI Payment Integration",
          "Basic Cart & Checkout",
          "Categories & Inventory Setup",
          "Basic SEO",
          "Google Analytics",
          "Weekly Backups",
          "7–15 Days Support",
        ],
      },
      {
        title: "Business WooCommerce Store",
        price: "₹12,999 – ₹17,999",
        features: [
          "15–25 Products Upload",
          "Advanced WooCommerce Setup",
          "Custom Shop + Product Pages",
          "Unlimited Categories",
          "Payment Gateway Integration",
          "Advanced Filters",
          "Coupons & Discounts",
          "WhatsApp + Live Chat",
          "Intermediate SEO",
          "Analytics + Pixel Setup",
          "Security + Daily Backups",
          "15–30 Days Support",
        ],
      },
      {
        title: "Premium WooCommerce Store",
        price: "₹18,999 – ₹24,999",
        features: [
          "Up to 50 Products Listing",
          "Advanced Product Search & Filters",
          "Product Variants & Attributes",
          "Shopping Cart & Wishlist",
          "Payment Gateway + UPI Integration",
          "Order Tracking & Dashboard",
          "Sales & Performance Analytics",
          "Coupons & Discount System",
          "Product Reviews & Ratings",
          "SEO Optimization Features",
          "WhatsApp, Email & Social Integration",
          "1 Year Support",
        ],
      },
    ],
  },

  // -------------------------------------------
  // CUSTOM WEBSITE DEVELOPMENT
  // -------------------------------------------
  {
    id: "website-dev",
    name: "Custom Website Development",
    cards: [
      {
        title: "Starter Business Site",
        price: "₹6,999 – ₹10,999",
        features: [
          "Up to 4–6 Pages",
          "Basic Custom UI Design",
          "Fully Responsive Layout",
          "Lightweight Code",
          "Basic Animations",
          "Contact Form Integration",
          "Simple Admin Panel",
          "Basic SEO",
          "Speed Optimization",
          "Google Analytics",
          "7–15 Days Support",
        ],
      },
      {
        title: "Professional Website",
        price: "₹11,999 – ₹14,999",
        features: [
          "6–10 Pages",
          "Modern Custom UI/UX",
          "Advanced Responsive Design",
          "Animations & Interactions",
          "On-Page SEO",
          "Speed Optimization",
          "Email Alerts + Contact Form",
          "Advanced Admin Panel",
          "Blog / News Section",
          "Google Analytics + Search Console",
          "15–30 Days Support",
        ],
      },
      {
        title: "Premium Website",
        price: "₹15,999 – ₹19,999",
        features: [
          "10–16 Pages",
          "High-End UI/UX + Advanced Animations",
          "CMS Integration",
          "Admin Panel (Add/Edit Content)",
          "SEO + Schema",
          "Speed Optimization (90+)",
          "Advanced Forms + Automation",
          "Chatbot + WhatsApp Integration",
          "Security + Backups",
          "Analytics + Search Console",
          "CDN Optimization",
          "30–60 Days Support",
        ],
      },
    ],
  },

  // -------------------------------------------
  // CUSTOM E-COMMERCE WEBSITE (FINAL COMPARISON)
  // -------------------------------------------
  {
    id: "ecommerce",
    name: "Custom E-Commerce Website",
    cards: [
      {
        title: "Basic E-Commerce",
        price: "₹14,999 – ₹19,999",
        features: [
          "Up to 20 Products",
          "Basic Custom UI",
          "Responsive Design",
          "Basic Variants",
          "Basic Filters",
          "Cart System",
          "UPI Payment Integration",
          "Order Email Notifications",
          "Customer Login System",
          "Basic SEO",
          "Basic Speed Optimization",
          "WhatsApp Chat Button",
          "Google Analytics",
          "7–15 Days Support",
        ],
      },
      {
        title: "Standard E-Commerce",
        price: "₹20,999 – ₹29,999",
        features: [
          "Up to 35 Products",
          "Modern Custom UI/UX",
          "Advanced Responsive Design",
          "Product Variants & Attributes",
          "Advanced Search & Filters",
          "Cart & Wishlist",
          "UPI + Cards + Online Payments",
          "Order Management System",
          "Coupons & Discounts",
          "Customer Login & Profile",
          "Standard SEO",
          "Speed Optimization",
          "Analytics + Pixel Setup",
          "WhatsApp & Email Integration",
          "30 Days Support",
        ],
      },
      {
        title: "Premium E-Commerce",
        price: "₹30,999 – ₹39,999",
        features: [
          "Up to 50 Products Listing & Unlimited Categories",
          "Premium Custom UI/UX + Animations",
          "Highly Responsive & Optimized",
          "Unlimited Variants & Attributes",
          "Smart Search & Mega Filters",
          "Cart + Wishlist + Recently Viewed",
          "UPI + Cards + Wallets + Multi-Gateway",
          "Advanced Order Tracking & Dashboard",
          "Coupons, Discounts & Reward System",
          "Customer Account + Address Book",
          "Advanced SEO + Schema",
          "Speed Optimization (90+)",
          "Analytics + Pixel + Conversion API",
          "WhatsApp + Email + Chatbot",
          "CDN + Security + Daily Backups",
          "45–90 Days Support",
        ],
      },
    ],
  },

  // -------------------------------------------
  // LANDING PAGE
  // -------------------------------------------
  {
    id: "landing-page",
    name: "Landing Page",
    cards: [
      {
        title: "Single Landing Page",
        price: "₹1,999 – ₹2,499",
        features: [
          "1 Page",
          "Modern UI",
          "Animations",
          "Conversion Optimized Design",
        ],
      },
      {
        title: "Premium Landing Page",
        price: "₹2,599 – ₹2,999",
        features: [
          "Advanced UI",
          "Copywriting Included",
          "High Conversion Layout",
          "Speed Optimization",
        ],
      },
    ],
  },
  // -------------------------------------------
// APP DEVELOPMENT
// -------------------------------------------
{
  id: "app-dev",
  name: "App Development",
  cards: [
    // ---------------- BASIC APP ----------------
    {
      title: "Basic App",
      price: "₹19,999 – ₹29,999",
      features: [
        "3–5 Screens",
        "Basic UI Design",
        "Login & Signup",
        "Static Pages (About, Contact)",
        "Basic Dashboard",
        "Basic API Integration",
        "Basic Push Notifications",
        "Firebase Analytics Setup",
        "Bug Fixes & Testing",
        "7–15 Days Support"
      ]
    },

    // ---------------- STANDARD APP ----------------
    {
      title: "Standard App",
      price: "₹30,999 – ₹55,999",
      features: [
        "6–12 Screens",
        "Modern UI/UX Design",
        "Login, Signup, OTP Verification",
        "Dynamic Dashboard",
        "Intermediate API Integration",
        "Database Integration (Firebase / MongoDB)",
        "Push Notifications + Alerts",
        "In-App Navigation & Routing",
        "Basic Admin Panel",
        "App Publishing (Play Store)",
        "Testing & Performance Optimization",
        "30 Days Support"
      ]
    },

    // ---------------- PREMIUM APP ----------------
    {
      title: "Premium App",
      price: "₹60,000 – ₹1,50,000",
      features: [
        "12–20+ Screens",
        "Premium Custom UI/UX + Animations",
        "Advanced Authentication (OTP Login)",
        "Fully Dynamic Dashboard",
        "Full API Integration",
        "Real-Time Database",
        "Advanced Admin Panel",
        "Payment Gateway Integration",
        "Geo-Location / Maps / Tracking",
        "Push Notifications + Automation",
        "Chat System Integration",
        "High Performance Optimization",
        "Analytics + Crashlytics Setup",
        "Play Store + App Store Publishing",
        "45–90 Days Support"
      ]
    }
  ]
},
// -------------------------------------------
// SOFTWARE DEVELOPMENT
// -------------------------------------------
{
  id: "software-dev",
  name: "Software Development",
  cards: [
    {
      title: "Basic Software",
      price: "₹24,999 – ₹39,999",
      features: [
        "Basic Custom Dashboard",
        "2–3 Modules",
        "User Login System",
        "Basic CRUD Operations",
        "Simple UI Design",
        "Database Integration",
        "Basic Reporting",
        "Email Alerts",
        "Security Setup",
        "7–15 Days Support"
      ]
    },
    {
      title: "Standard Software",
      price: "₹40,999 – ₹79,999",
      features: [
        "Advanced Dashboard",
        "4–6 Modules",
        "Role Based Login System",
        "API Integration",
        "Advanced UI/UX",
        "Analytics & Reporting",
        "Data Filters & Search",
        "Automation (Email/SMS)",
        "Cloud Database (Firebase/MongoDB)",
        "30 Days Support"
      ]
    },
    {
      title: "Premium Software",
      price: "₹80,000 – ₹2,50,000",
      features: [
        "Premium Dashboard UI/UX",
        "Unlimited Modules",
        "Multi-Role Authentication",
        "Advanced API Integration",
        "CRM / ERP Custom Features",
        "Real-Time Data & Charts",
        "Automation System",
        "Admin Panel + User Management",
        "High Security + Backups",
        "45–90 Days Support"
      ]
    }
  ]
},
// -------------------------------------------
// SEO SERVICES
// -------------------------------------------
{
  id: "seo",
  name: "SEO Services",
  cards: [
    {
      title: "Local SEO",
      price: "₹6,999 – ₹9,999 / month",
      features: [
        "Local Keyword Research",
        "On-Page Optimization",
        "Google My Business Optimization",
        "Local Citations",
        "Basic Backlinks",
        "Monthly Ranking Report",
        "Technical Audit",
        "Support via WhatsApp"
      ]
    },
    {
      title: "National SEO",
      price: "₹12,999 – ₹14,999 / month",
      features: [
        "National Keyword Strategy",
        "On-Page + Technical SEO",
        "High-Quality Backlinks",
        "Content Optimization",
        "Speed Optimization",
        "Keyword Tracking",
        "Competition Analysis",
        "Monthly Reports"
      ]
    },
    {
      title: "E-Commerce SEO",
      price: "₹15,999 – ₹19,999 / month",
      features: [
        "Product Page SEO",
        "Category Optimization",
        "E-Commerce Backlink Strategy",
        "Schema Markup",
        "Technical SEO Fixes",
        "Speed Optimization",
        "Conversion Optimization Tips",
        "Advanced Reporting"
      ]
    }
  ]
},
// -------------------------------------------
// SOCIAL MEDIA MARKETING
// -------------------------------------------
{
  id: "smm",
  name: "Social Media Marketing",
  cards: [
    {
      title: "Basic SMM Plan",
      price: "₹5,999 / month",
      features: [
        "10 Social Media Posts",
        "Basic Captions",
        "2 Reels / Short Videos",
        "Hashtag Strategy",
        "Monthly Insights Report",
        "Platforms: Instagram | Facebook | LinkedIn | YouTube | X (Twitter)",
        "Basic Creative Templates"
      ]
    },
    {
      title: "Standard SMM Plan",
      price: "₹9,999 / month",
      features: [
        "12–15 Posts",
        "4–6 Reels / Shorts",
        "Creative Captions",
        "Custom Graphics",
        "Content Calendar",
        "Instagram | Facebook | LinkedIn | YouTube | X (Twitter)",
        "Monthly Growth Report"
      ]
    },
    {
      title: "Premium SMM Plan",
      price: "₹14,999 – ₹19,999 / month",
      features: [
        "20-25 Posts / month",
        "8–10 Reels",
        "Branding-Based Designs",
        "Paid Ads Guidance",
        "Content Strategy",
        "Multi-Platform Management",
        "Influencer Strategy (Optional)",
        "Dedicated Manager"
      ]
    }
  ]
},
// -------------------------------------------
// PAID ADS (GOOGLE & META)
// -------------------------------------------
{
  id: "paid-ads",
  name: "Paid Ads (Google & Meta)",
  cards: [
    // ---------------- BASIC ADS ----------------
    {
      title: "Starter Ads Plan",
      price: "₹4,999 – ₹6,999 / month",
      features: [
        "Google OR Meta (1 Platform)",
        "Audience Research",
        "Campaign Setup",
        "Ad Copywriting",
        "Basic Creative Design",
        "1–2 Campaigns / Month",
        "Basic A/B Testing",
        "Pixel / Tag Setup",
        "Weekly Performance Report",
        "Email + WhatsApp Support",
        "(Ad Budget: ₹10K–₹20K)"
      ]
    },

    // ---------------- STANDARD ADS ----------------
    {
      title: "Growth Ads Plan",
      price: "₹7,999 – ₹13,999 / month",
      features: [
        "Google + Meta (Both Platforms)",
        "Advanced Audience Targeting",
        "3–5 Campaigns / Month",
        "Ad Copy + Creative Graphics",
        "Landing Page Suggestions",
        "A/B Testing + Optimization",
        "Retargeting Campaign Setup",
        "Pixel + Conversion Tracking",
        "Custom Audience Creation",
        "Weekly + Monthly Reports",
        "Priority Support",
        "(₹20K–₹50K) Ad Budget"
      ]
    },

    // ---------------- PREMIUM ADS ----------------
    {
      title: "Premium Ads Plan",
      price: "₹14,999 – ₹19,999 / month",
      features: [
        "Google + Meta + YouTube Ads",
        "High Budget Ad Management",
        "Full Funnel Strategy",
        "Retargeting + Lookalike Audience",
        "Creative Video Ads (Reels/Shorts)",
        "Copywriting + Creative Strategy",
        "Daily Optimization",
        "Multi-Campaign Scaling",
        "Conversion API + Advance Pixel Setup",
        "ROI & Sales Tracking Dashboard",
        "Competitor Analysis",
        "Priority Support + Strategy Calls",
        "(₹50K+) Ad Budget"
      ]
    }
  ]
},

// -------------------------------------------
// VIDEO EDITING
// -------------------------------------------
{
  id: "video-editing",
  name: "Video Editing",
  cards: [
    {
      title: "Basic Editing",
      price: "₹299 – ₹499 / video",
      features: [
        "Basic Cuts & Transitions",
        "Audio Sync",
        "Light Color Adjustment",
        "Simple Text Overlays",
        "Video Duration Up to 30 sec",
        "1080p Export"
      ]
    },
    {
      title: "Standard Editing",
      price: "₹599 – ₹799 / video",
      features: [
        "Smooth Transitions",
        "Color Correction",
        "Cinematic Text & Graphics",
        "Basic Motion Effects",
        "Sound Enhancement",
         "Video Duration Up to 60 sec",
         "Normal subtitles included",
        "1080p / 4K Export"
      ]
    },
    {
      title: "Premium Editing",
      price: "₹899 – ₹1,599 / video",
      features: [
        "Advanced Motion Graphics",
        "Cinematic Transitions",
        "Green Screen Cleanup",
        "Custom Animations",
        "Sound Mixing + Effects",
        "Video Duration Up to 2 min",
        "Professional Subtitles",
        "4K Export",
        "Revisions Included"
      ]
    }
  ]
},

];

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("wordpress");
  const currentTab = tabs.find((t) => t.id === activeTab);

  return (
    <section className="w-full px-4 md:px-16 py-10 bg-white">
      <h2 className="text-center text-gray-700 text-4xl font-bold mb-2">Pricing</h2>
      <p className="text-center text-gray-700 text-md mb-10">We offer premium quality services at costs that are much lower compared to the current market rates.</p>
      <div className=" mx-auto justify-center items-center">
        
       {/* TABS */}
      <div className="flex overflow-x-auto whitespace-nowrap gap-4 border-b pb-2 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md border flex-shrink-0 ${
              activeTab === tab.id
                ? "bg-[#233AA7] text-white  border-[#233AA7]"
                : "bg-white text-gray-700 hover:bg-[#233AA7] hover:text-white border-gray-300 cursor-pointer"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>


        {/* CARDS */}
        <div className="w-full px-0 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {currentTab?.cards.map((card, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-lg font-bold text-[#233AA7] mb-4">
                {card.price}
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                {card.features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span>•</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button  className="w-full mt-4 px-4 py-2 bg-[#233AA7] text-white rounded-md hover:underline">
                <a href="tel:6376228917">Get Started</a>
                
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
