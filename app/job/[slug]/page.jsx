import React from 'react';
import Banner from '@/components/JobDetailsComponents/Banner';
import JobRequerment from '@/components/JobDetailsComponents/JobRequerment';
import Location from '@/components/JobDetailsComponents/Location';
import { singleJobData } from '@/service/api';

// 🔹 Dynamic Metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = await singleJobData({ slug });

  return {
    title: `${job.title} | ${job.location} | Apply Now`,
    description: `Apply for ${job.title} in ${job.location}. Salary: ${job.minSalary} - ${job.maxSalary} BDT/month. View full job requirements and responsibilities.`,
    keywords: [
      job.title,
      job.location,
      job.jobType,
      job.jobLevel,
      'job opening',
      'career opportunity',
      'Bangladesh jobs',
    ],
    openGraph: {
      title: `${job.title} - ${job.location}`,
      description: `Exciting opportunity for a ${job.title}. Salary: ${job.minSalary} - ${job.maxSalary} BDT/month.`,
      type: 'article',
      url: `https://yourdomain.com/job/${slug}`, // Replace with your domain
      images: [
        {
          url: 'https://yourdomain.com/og-job.png', // Replace with a real image URL
          width: 1200,
          height: 630,
          alt: `${job.title} cover image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${job.title} | ${job.location}`,
      description: `Apply now for ${job.title} in ${job.location}.`,
      images: ['https://yourdomain.com/og-job.png'], // Replace with a real image
    },
  };
}

// 🔹 Main Job Details Component
export default async function JobDetails({ params }) {
  const { slug } = await params;
  const singleJob = await singleJobData({ slug });
//   console.log(singleJob)

  return (
    <main className='mt-[77px] my-14'>
      {/* Banner Section */}
      <Banner singleJob={singleJob} />

      {/* Job Requirements */}
      <JobRequerment slug={slug} singleJob={singleJob} />

      {/* Location Section */}
      <Location />
    </main>
  );
}



