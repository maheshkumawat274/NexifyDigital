import { useState } from "react";

import TopSectionCareer from "../../components/career/TopSectionCareer";
import CareerTop from "../../components/career/CareerTop";
import AboutCareer from "../../components/career/AboutCareer";
import { Helmet } from "react-helmet";
import WhyWorkWithUs from "../../components/career/WhyWorkWithUs";
import JobSearchFilter from "../../components/career/JobSearchFilter";
import JobList from "../../components/career/JobList";
import JobApplyModal from "../../components/career/JobApplyModal";
import LifeAtNexify from "../../components/career/LifeAtNexify";
import CareerFAQ from "../../components/career/CareerFAQ";

const CareerPage = () => {
  // Search text state
  const [searchQuery, setSearchQuery] = useState("");

  // Modal open/close state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Which job user clicked
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  // When user searches
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // When user clicks "Apply Now"
  const handleOpenModal = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <>
      <Helmet>
        <title>Careers at Nexify Digital | Join Our IT & Software Development Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Nexify Digital. Join our team of innovators and work on cutting-edge projects in website, app, and software development."
        />
        <meta
          name="keywords"
          content="Nexify Digital careers, IT jobs, software development jobs, tech company hiring, web development career"
        />
        <meta name="author" content="Nexify Digital" />
        <meta
          property="og:title"
          content="Careers at Nexify Digital - Build Your Future With Us"
        />
        <meta
          property="og:description"
          content="Looking for IT career opportunities? Join Nexify Digital's growing team of tech professionals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexifydigital.in/career" />
        <meta property="og:image" content="https://nexifydigital.in/imgs/IT-Infra.jpg" />
        <link rel="canonical" href="https://nexifydigital.in/career" />
      </Helmet>

      <CareerTop />
      <AboutCareer />
      <TopSectionCareer />
      <WhyWorkWithUs />

      {/* Props required hai → onSearch */}
      <JobSearchFilter onSearch={handleSearch} />

      {/* Props required → searchQuery + openModal */}
      <JobList searchQuery={searchQuery} openModal={handleOpenModal} />

      {/* Modal bhi props leta hai */}
      <JobApplyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        jobTitle={selectedJob}
      />

      <LifeAtNexify />
      <CareerFAQ />
    </>
  );
};

export default CareerPage;
