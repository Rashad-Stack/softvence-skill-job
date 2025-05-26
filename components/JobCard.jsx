"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import dynamic from "next/dynamic"; // ✅ Import dynamic
import lara from "@/assets/images/lara.png";

// Dynamically import CountdownTimer with SSR disabled
const CountdownTimer = dynamic(() => import("./CountdownTimer"), { ssr: false });

export default function JobCard({ job }) {
  const jobTitle = job?.title || "Job Opportunity";
  const [isExpired, setIsExpired] = useState(false);

  const [formattedDeadline, setFormattedDeadline] = useState("");

  useEffect(() => {
    if (job?.deadline) {
      const date = new Date(job.deadline);
      setFormattedDeadline(date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      }));
    }
  }, [job?.deadline]);

  // check Expired
  useEffect(() => {
    if (!job?.deadline) return;

    const deadlineDate = new Date(job?.deadline);
    const now = new Date();

    // Immediate check
    if (now > deadlineDate) {
      setIsExpired(true);
      return; // no need for interval if already expired
    }

    // Interval for ongoing checking (e.g., countdown or live change)
    const interval = setInterval(() => {
      const now = new Date();
      if (now > deadlineDate) {
        setIsExpired(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [job?.deadline]);

  return (
    <article
      className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[362px]"
      aria-label={`Job card for ${jobTitle}`}
    >
      <div className="relative">
        <Image
          src={lara}
          alt={`${jobTitle} image`}
          className="object-contain w-full"
          placeholder="blur"
          priority
        />

        {job?.category && (
          <div className="py-2 px-4 backdrop-blur-sm bg-white/30 border border-gray-300 text-white text-sm font-semibold absolute top-2 left-2 rounded-full shadow-md">
            <span className="font-pop font-normal text-sm sm:text-base capitalize">
              {job?.jobNature.replaceAll("_", " ")}
            </span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 relative bg-[#F6FFF8]">
        {job?.deadline && (
          <div className="absolute -top-10 right-2 bg-[#F6FFF8] px-2 py-1 rounded-t-lg text-xs sm:text-sm text-green-600 font-semibold">
            <CountdownTimer deadline={job?.deadline} />
          </div>
        )}

        <h2 className="text-lg font-medium font-pop text-[#121212] mb-2 truncate">
          {jobTitle}
        </h2>

        <p className="text-sm text-[#837E7E] font-normal font-pop mb-2">
          {job?.jobNature?.replace("_", " ")} | {job?.jobType?.replace("_", " ")} | {job?.jobLevel?.replace("_", " ")} |
          <span className="text-[#151515] font-medium ml-1 capitalize">
            {job?.shift?.toLowerCase()} Shift
          </span>
        </p>

        <div className="flex items-center text-sm mb-4 gap-1 text-[#837E7E] font-pop">
          <IoCalendarOutline />
          <span>Deadline:</span>
          {formattedDeadline && (
            <time className="ml-1" dateTime={job?.deadline}>
              {formattedDeadline}
            </time>
          )}
        </div>

        <div className="flex justify-between items-center flex-wrap gap-2" >
          <Link
            href={`/job/${job?.slug}`}
            className="text-green-700 font-medium underline hover:text-green-900 cursor-pointer"
            aria-label={`View details for ${jobTitle}`}
          >
            View Details
          </Link>

          <Link
            href={isExpired ? "#" : `/job/${job?.slug}/apply/${job?.id}`}
            onClick={(e) => {
              if (isExpired) {
                e.preventDefault(); // ⛔ Prevent navigation
              }
            }}
            className={`px-4 py-2 rounded-md flex gap-1.5 items-center 
    ${isExpired
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-green-600 hover:bg-green-700 text-white"
              }`}
            aria-disabled={isExpired}
            aria-label={isExpired ? `Deadline passed for ${jobTitle}` : `Apply now for ${jobTitle}`}
          >
            Apply Now
            <FaArrowRightLong className="-rotate-45 text-sm" />
          </Link>
        </div>
      </div>
    </article>
  );
}
