
// =====================================
// 2️⃣ JobSearchFilter.tsx (Working Search Component)
// =====================================

import React, { useState } from "react";

interface JobSearchFilterProps {
  onSearch: (query: string) => void; // send search text to parent
}

const JobSearchFilter: React.FC<JobSearchFilterProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query.trim().toLowerCase()); // send cleaned value
  };

  return (
    <section
      id="job-search-filter"
      className="w-full py-12 bg-[#F3F4F6] px-4 md:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#233BA7] mb-6 text-center">
          Find Your Opportunity
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-white p-6 rounded-2xl shadow-sm">
          {/* Search Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search job title, skills or keywords..."
            className="flex-1 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#233BA7]"
          />

          <button
            onClick={handleSearch}
            className="bg-[#233BA7] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-900 transition-all w-full md:w-auto"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobSearchFilter;
