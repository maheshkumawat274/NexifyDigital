import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const PricingInfo: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20 lg:px-36 text-gray-800" id="pricing-info">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Transparent & Flexible Pricing</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">
          At NexifyDigital, we believe every project is unique. Instead of fixed prices,
          we offer customized pricing based on your specific requirements, features, and timelines.
        </p>
      </div>

      <div className="max-w-3xl mx-auto text-center text-gray-700">
        <p className="mb-6 text-base md:text-lg leading-relaxed">
          Whether you're looking for a simple landing page, a full-featured business website, or an
          advanced eCommerce platform, we tailor our services to fit your goals and budget.
          Our team will consult with you to understand your vision and provide a quote that reflects
          the value and effort involved — no hidden costs, just honest collaboration.
        </p>
        <p className="text-base md:text-lg font-medium text-gray-800">
          Want to discuss your project and get an estimate?
        </p>

        {/* Contact buttons */}
        <div className="flex justify-center mt-6 gap-6">
          <a
            href="tel:+916376228917" // replace with your actual number
            className="flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-md transition duration-300"
          >
            <FaPhoneAlt />
            Call Now
          </a>
          <a
            href="https://wa.me/916376228917" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md transition duration-300"
          >
            <FaWhatsapp />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingInfo;
