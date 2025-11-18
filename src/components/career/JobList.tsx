import React, { useEffect, useState } from "react";
import config from "../../../config";

interface JobType {
  id: number;
  title: string;
  department: string;
  experience: string;
  location: string;
  keywords: string;
}

interface JobListProps {
  searchQuery: string;
  openModal: (jobTitle: string) => void;
}

const JobList: React.FC<JobListProps> = ({ searchQuery, openModal }) => {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch jobs from backend
  useEffect(() => {
    fetch(`${config.API_BASE_URL}/jobs/list.php`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // FILTER JOBS (title + department + keywords)
  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.department} ${job.keywords}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <section id="job-list" className="w-full py-16 bg-white px-4 md:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#233BA7] mb-10 text-center">
          Available Roles at Nexify Digital
        </h2>

        {/* Loading state */}
        {loading && (
          <p className="text-center text-gray-500 py-20">Loading jobs...</p>
        )}

        {/* No jobs */}
        {!loading && filteredJobs.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-600 mb-3">
              No Jobs Found
            </h3>
            <p className="text-gray-500 text-sm">
              Try searching with a different keyword.
            </p>
          </div>
        )}

        {/* Jobs List */}
        {!loading && filteredJobs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
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
