import React from "react";
import ApplyForm from "./ApplyForm";
import ApplySidebar from "./ApplySidebar";

const CloseIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

interface JobApplyModalProps {
  isOpen: boolean;
  jobTitle: string | null;
  onClose: () => void;
}

const JobApplyModal: React.FC<JobApplyModalProps> = ({
  isOpen,
  jobTitle,
  onClose,
}) => {

  // Force scroll to top
  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const el = document.getElementById("modal-scroll-container");
        if (el) el.scrollTop = 0;
      }, 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-2 md:px-4">

      {/* MODAL BOX */}
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl relative my-10 md:my-0">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition z-20"
        >
          <CloseIcon />
        </button>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col md:flex-row w-full h-full">

          {/* SIDEBAR (Desktop Left) */}
          <div className="hidden md:block  w-full rounded-l-2xl">
            <ApplySidebar />
          </div>

          {/* SCROLLABLE CONTENT */}
          <div
            id="modal-scroll-container"
            className="w-full md:w-2/3 max-h-[80vh] overflow-y-auto p-3 md:p-5"
          >
            <h2 className="text-2xl font-bold text-[#233AA7] mb-4">
              Apply for {jobTitle}
            </h2>

            <ApplyForm onSuccess={onClose} />

            {/* Mobile sidebar shown below form */}
            <div className="block md:hidden mt-8">
              <ApplySidebar />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobApplyModal;
