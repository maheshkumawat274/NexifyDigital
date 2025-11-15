

// =====================================
// 3️⃣ JobList.tsx (Fully Working With Search Filter)
// =====================================

import React from "react";

interface JobType {
  title: string;
  department: string;
  experience: string;
  location: string;
  keywords: string; // used for search matching
}

interface JobListProps {
  searchQuery: string; // value coming from JobSearchFilter.tsx
  openModal: (jobTitle: string) => void;
}

const JobList: React.FC<JobListProps> = ({ searchQuery, openModal }) => {

  const jobs: JobType[] = [
    {
      title: "Full Stack Developer",
      department: "Development",
      experience: "1-3 Years",
      location: "Remote / WFH",
      keywords: "full stack developer react node javascript website development it company delhi",
    },
    {
      title: "Project Manager",
      department: "Management",
      experience: "2+ Years",
      location: "Delhi NCR",
      keywords: "project manager management team lead web design mobile app development company",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      experience: "Fresher - 2 Years",
      location: "Work From Home",
      keywords: "ui ux designer figma wireframe design website design company nexify digital",
    },
    {
      title: "Graphic Designer",
      department: "Design",
      experience: "1+ Years",
      location: "Remote",
      keywords: "graphic designer photoshop illustrator branding posts logo design",
    },
    {
      title: "Digital Marketing (SEO)",
      department: "Marketing",
      experience: "6 Months - 2 Years",
      location: "Work From Home",
      keywords: "seo digital marketing google ranking keywords social media it company delhi",
    },
  ];

  // FILTER JOBS BASED ON SEARCH TEXT
  const filteredJobs = jobs.filter((job) =>
    job.keywords.toLowerCase().includes(searchQuery)
  );

  return (
    <section id="job-list" className="w-full py-16 bg-white px-4 md:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#233BA7] mb-10 text-center">
          Available Roles at Nexify Digital
        </h2>

        {/* If NO JOBS match search */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-600 mb-3">
              No Jobs Found
            </h3>
            <p className="text-gray-500 text-sm">
              Try searching with a different keyword.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all bg-white"
              >
                <h3 className="text-xl font-semibold text-[#233BA7] mb-2">
                  {job.title}
                </h3>

                <p className="text-gray-600 text-sm mb-1">
                  <strong>Department:</strong> {job.department}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  <strong>Experience:</strong> {job.experience}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  <strong>Location:</strong> {job.location}
                </p>

                <button
                onClick={() => openModal(job.title)}

                  className="w-full bg-[#233BA7] text-white py-3 rounded-xl text-sm font-medium hover:bg-blue-900 transition-all"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobList;