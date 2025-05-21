"use client";
import React from "react";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { TbCalendarMonthFilled, TbUsersGroup } from "react-icons/tb";
import { TfiAlarmClock } from "react-icons/tfi";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";

const formatDate = (date) =>{
  if(!date) return "";
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date))};

const formatLabel = (str) => str?.replace(/_/g, " ");

export default function JobRequerment({ slug, singleJob }) {

  const jobTags = [...new Set(["UI", "laravel", "UX", "Developer", "Frontend"])];
  return (
    <section className="mt-5 container mx-auto lg:relative p-2">

      <div className={`lg:flex lg:justify-between`}>
        {/* LEFT: Job Description */}
        <div className="lg:max-w-1/2 mb-10 lg:mb-0">
          {/* markDown text */}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({...props }) => (
                <h2
                  className="text-[#121212] font-[Poppins] text-2xl font-medium my-4"
                  {...props}
                />
              ),
              p: ({...props }) => (
                <p
                  className="text-[#474747] font-[Poppins] text-base font-normal my-2"
                  {...props}
                />
              ),
              li: ({...props }) => (
                <li
                  className="text-[#474747] font-[Poppins] text-base font-normal list-disc ml-6"
                  {...props}
                />
              ),
            }}
          >
            {singleJob?.description}
          </ReactMarkdown>
        </div>

        {/* RIGHT: Apply Box + Job Overview + Tags */}
        <div className={`lg:max-w-[1/2] relative`}>
          {/* Apply Box */}
          <div className="bg-[#fafffb] p-8 max-w-[488px] mx-auto rounded-3xl border border-[#E1F3E4] mb-8 lg:absolute -top-40">
            <p className="text-[#484848] text-base font-normal leading-[132%] tracking[-0.32px] mb-6">
              Ready to apply? We can't wait to meet you!
            </p>

            <Link
              href={`/job/${slug}/apply/${singleJob?.id}`}
              aria-label="Apply Job"
              className="text-sm sm:text-base bg-[#038317] text-white px-4 py-2 rounded-lg hover:bg-[#40854a] transition font-pop font-semibold w-full text-center block"
            >
              Apply Now
            </Link>

            <p className="text-[#636363] text-center text-base font-normal leading-[132%] tracking[-0.32px] mt-5 mb-6">
              Next, you'll face an assessment to proceed. Apply for one job at a
              time and prepare well.
            </p>
            <p className="text-[#484848] text-center text-[12px] font-normal leading-[132%] tracking[-0.24px]">
              * By applying for this job listing, you agree to our Data
            </p>
          </div>
           {/* Job Overview */}
          <div className="bg-[#fafffb] p-8 md:w-[488px] mx-auto lg:mx-0 rounded-3xl border border-[#E1F3E4] lg:mt-30">
            <h4 className="text-[#121212] text-[20px] font-medium leading-normal mb-7">
              Job Overview
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-5" role="list">
              {[
                {
                  icon: <TbCalendarMonthFilled />,
                  label: "Job Posted",
                  value: formatDate(singleJob?.createdAt),
                },
                {
                  icon: <TfiAlarmClock />,
                  label: "Job Expire",
                  value: formatDate(singleJob?.deadline),
                },
                {
                  icon: <MdOutlineContentPasteSearch />,
                  label: "Job Type",
                  value: formatLabel(singleJob?.jobType),
                },
                {
                  icon: <LuUserRound />,
                  label: "Job Role",
                  value: singleJob?.title,
                },
                {
                  icon: <PiStudent />,
                  label: "Education",
                  value: "Bachelor Degree",
                },
                {
                  icon: <TiDocumentText />,
                  label: "Experience",
                  value: formatLabel(singleJob?.jobLevel),
                },
                {
                  icon: <TbUsersGroup />,
                  label: "Total Vacancies",
                  value: singleJob?.numberOfHiring,
                },
              ].map((item, index) => (
                <li key={index} className="flex flex-col items-center text-center">
                  <span className="text-[#038317] text-2xl p-2 mb-2 rounded-full bg-gradient-to-r from-[#EFFFF2] to-[#A4E8AE]">
                    {item?.icon}
                  </span>
                  <p className="text-[#636363] text-[12px] font-medium mb-0.5">{item?.label}</p>
                  <p className="text-[#121212] text-[12px] font-medium">{item?.value}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Tags */}
          <div className="bg-[#fafffb] p-8 md:w-[488px] mx-auto rounded-3xl border border-[#E1F3E4] mt-8">
            <h4 className="text-[#121212] text-[20px] font-medium mb-7">Job Tags</h4>
            <div className="flex flex-wrap gap-2 text-[#038317] text-[16px] font-medium">
              {jobTags.map((tag, idx) => (
                <p key={idx} className="bg-[#d9ffdf] px-2.5 py-0.5 rounded-md">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
