
import { Briefcase, TrendingUp, Users } from "lucide-react";

const ApplySidebar = () => {
  return (
    <div className="
      w-full h-full
      bg-[#233AA7]
      text-white 
      p-6 
      rounded-b-2xl md:rounded-none md:rounded-l-2xl flex items-center
    "
    >

      <div>
        <h3 className="text-xl font-semibold mb-4">Why Work With Us?</h3>

      <div className="space-y-5 text-blue-100 text-sm">

        <div className="flex items-start gap-3">
          <Briefcase size={22} className="text-yellow-300" />
          <p>
            Work on <strong>real client projects</strong> and improve your technical skills faster.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <TrendingUp size={22} className="text-green-300" />
          <p>
            Grow your career with <strong>structured training</strong> and mentorship.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Users size={22} className="text-pink-300" />
          <p>
            Join a <strong>friendly, supportive team</strong> that cares about your success.
          </p>
        </div>

      </div>
      </div>

    </div>
  );
};

export default ApplySidebar;
