
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
    <section id="industry-solutions"  className="py-12 px-4 md:px-16 bg-white">
      <div className="mx-auto">
        {/* Top Section */}
        <div className="w-full grid lg:grid-cols-2 gap-10 items-center mb-12 text-start">

  {/* LEFT CONTENT */}
  <div>
    <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-3">
      Custom Web Solutions for Every Industry | Nexify Digital – A web development company in India
    </h1>

    <p className="text-md md:text-lg text-gray-600">
      At Nexify Digital, we specialize in building modern websites and applications tailored for every industry, backed by the expertise of a leading website development company in Delhi NCR. Our team also delivers seamless mobile and web experiences trusted across India, ensuring each project reflects your brand identity and drives measurable growth. From healthcare and real estate to technology and retail, we provide industry-ready digital solutions that help businesses scale with confidence.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex justify-center">
    <img
      src="/imgs/industry-web-solutions-nexify-digital-india.png"
      alt="Industry-focused web development and digital solutions by Nexify Digital"
      className="rounded-md md:rounded-xl shadow-lg w-full object-cover object-bottom md:h-[350px] lg:h-[380px]"
    />
  </div>

</div>


        {/* First Row of Industries (Top 9) */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {industries.slice(0, 9).map((industry, index) => (
            <li key={index} className="p-4 rounded-lg border border-gray-200 bg-gray-50 text-center">
              <h3 className="font-medium text-gray-800">{industry}</h3>
            </li>
          ))}
        </ul>
        

        {/* Why We Stand Out Section (Static) */}
        <div className="my-12 bg-[#3647AD] rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why choose Nexify Digital – website development company in Delhi NCR</h2>
          
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