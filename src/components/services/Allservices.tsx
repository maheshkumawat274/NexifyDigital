
const IndustrySolutions = () => {
  // Industries data (same as your image)
  const industries = [
    "Events and Conference",
    "Automotive and Transportation",
    "Health and Medical",
    "Insurance",
    "Legal",
    "Recreation and Entertainment",
    "Fashion and Accessories",
    "Education",
    "Heavy Equipments",
    "Retail and E-Commerce",
    "Jewelry Website",
    "Finance",
    "Home and Repair",
    "Professional Services",
    "Tech",
    "Warehouse Management",
    "Food and Beverages",
    "Industrial",
    "Real Estate",
    "Tourism and Hospitality"
  ];

  // Why We Stand Out features (static, no animation)
  const standOutFeatures = [
    { title: "Agility", description: "Faster Turn Around time" },
    { title: "Ingenuity", description: "Innovative Solution Provider" },
    { title: "Reliability", description: "Collaboration and Trust" }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Tailored Solutions for Leading Sectors
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At NexifyDigital, we take immense pride in our capability to deliver tailored web excellence.
          </p>
        </div>

        {/* First Row of Industries (Top 9) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {industries.slice(0, 9).map((industry, index) => (
            <div key={index} className="p-4 rounded-lg border border-gray-200 bg-gray-50 text-center">
              <h3 className="font-medium text-gray-800">{industry}</h3>
            </div>
          ))}
        </div>

        {/* Why We Stand Out Section (Static) */}
        <div className="my-12 bg-[#3647AD] rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why We Stand Out?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {standOutFeatures.map((feature, index) => (
              <div key={index} className="p-4">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row of Industries (Remaining) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8">
          {industries.slice(9).map((industry, index) => (
            <div key={index} className="p-4 rounded-lg border border-gray-200 bg-gray-50 text-center">
              <h3 className="font-medium text-gray-800">{industry}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;