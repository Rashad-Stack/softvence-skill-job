"use client";

import React from "react";
import bg from "../../assets/images/job-detail-bg.png";

export default function Banner({ singleJob }) {
  const formatNumber = (num) =>
    num ? new Intl.NumberFormat("en-BD").format(num) : "N/A";

  const formatLabel = (str) => str?.replace(/_/g, " ") || "Not specified";

  return (
    <section
      aria-label="Job Banner"
      className="bg-center bg-cover bg-no-repeat w-full"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container mx-auto p-4">
        <header className="text-white py-24 max-w-2xl mx-auto md:mx-0">
          <p className="text-base font-normal" aria-label="Job Category">
            Developer
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight" aria-label="Job Title">
            {singleJob?.title || "Job Title Unavailable"}
          </h1>

          <p
            className="text-xl md:text-2xl font-semibold mt-2"
            aria-label="Salary Range"
          >
            {formatNumber(singleJob?.minSalary)} - {formatNumber(singleJob?.maxSalary)}
            <span className="text-[#C8C8C8] text-xs ml-1">BDT/Month</span>
          </p>
        </header>

        <div className="flex flex-wrap gap-6 text-white justify-between max-w-2xl mx-auto md:mx-0">
          <div aria-label="Job Location">
            <p className="text-base font-medium">Location</p>
            <p className="text-[#C8C8C8] text-sm">
              {singleJob?.location || "Not specified"}
            </p>
          </div>
          <div aria-label="Job Type">
            <p className="text-base font-medium">Job Type</p>
            <p className="text-[#C8C8C8] text-sm">
              {formatLabel(singleJob?.jobType)}
            </p>
          </div>
          <div aria-label="Experience Level">
            <p className="text-base font-medium">Experience</p>
            <p className="text-[#C8C8C8] text-sm">
              {formatLabel(singleJob?.jobLevel)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}