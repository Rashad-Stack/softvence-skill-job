import Link from "next/link";
import arrow from "../assets/images/arrow.png";
import dateIcon from "../assets/images/date.png";
import lara from "../assets/images/lara.png";
import CountdownTimer from "./CountdownTimer";

export default function JobCard() {
  const job = {
    id: 1,
    title: "Laravel Developer",
    company: "Laravel",
    location: "Remote",
    deadline: "2023-09-30",
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[362px]">
      <div className="relative">
        {/* Job image */}
        <img src={lara} alt="" />

        {/* Category badge */}
        {job.category && (
          <div className="py-2 px-4 backdrop-blur-sm bg-white/30 border border-gray-300 text-white text-sm font-semibold absolute top-2 left-2 rounded-full shadow-md">
            <span className="font-pop font-normal text-sm sm:text-base capitalize">
              {job.jobNature.replaceAll("_", " ")}
            </span>
          </div>
        )}
      </div>

      {/* Job details */}
      <div className="p-4 sm:p-5 relative bg-[#F6FFF8]">
        <div className="absolute -top-10 right-2 bg-[#F6FFF8] px-2 py-1 rounded-lg text-xs sm:text-sm text-green-600 font-semibold">
          {job.deadline && <CountdownTimer deadline={job.deadline} />}
        </div>

        <h3 className="text-lg font-medium font-pop text-[#121212] mb-2 truncate">
          {job.title}
        </h3>

        <p className="text-sm text-[#837E7E] font-normal font-pop mb-2">
          {job.jobType?.replace("_", " ")} | {job.jobLevel?.replace("_", " ")} |
          <span className="text-[#151515] font-medium ml-1 capitalize">
            {job.shift?.toLowerCase()}
          </span>
        </p>

        <div className="flex items-center text-sm mb-4 gap-1 text-[#837E7E] font-pop">
          <img src={dateIcon} alt="calendar" className="w-4 h-4" />
          Deadline:
          <span className="ml-1">
            {new Date(job.deadline).toLocaleDateString()}
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex justify-between items-center flex-wrap gap-2">
          <Link
            href={`/job/${job.id}`}
            className="text-green-700 font-medium underline hover:text-green-900 cursor-pointer">
            View Details
          </Link>

          <a
            href={job.googleForm}
            target="_blank"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex gap-2 items-center">
            Apply Now
            <img src={arrow} alt="arrow" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
