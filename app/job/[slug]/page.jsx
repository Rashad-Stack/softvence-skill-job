import React from 'react';
import Banner from '@/components/JobDetailsComponents/Banner';
import JobRequerment from '@/components/JobDetailsComponents/JobRequerment';
import Location from '@/components/JobDetailsComponents/Location';
import { singleJobData } from '@/service/api';
import Link from 'next/link';

// 🔹 Metadata with Canonical Tag
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const {job, errorMessage} = await singleJobData({ slug });

   if (!job) {
    return {
      title: 'Job Not Found | Softvence',
      description: 'The job you are looking for does not exist or is no longer available.',
    };
  }

  return {
    title: `${job?.title} | ${job?.location} | Apply Now`,
    description: `Apply for ${job?.title} in ${job?.location}. Salary: ${job?.minSalary} - ${job?.maxSalary} BDT/month. View full job requirements and responsibilities.`,
    keywords: [
      job?.title,
      job?.location,
      job?.jobType,
      job?.jobLevel,
      'job opening',
      'career opportunity',
      'Bangladesh jobs',
    ],
    openGraph: {
      title: `${job?.title} - ${job?.location}`,
      description: `Exciting opportunity for a ${job?.title}. Salary: ${job?.minSalary} - ${job?.maxSalary} BDT/month.`,
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/job/${slug}`,
      images: [
        {
          url: '/lara.png',
          width: 1200,
          height: 630,
          alt: `${job?.title} cover image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${job?.title} | ${job?.location}`,
      description: `Apply now for ${job?.title} in ${job?.location}.`,
      images: [`${process.env.NEXT_PUBLIC_DOMAIN}/lara.png`],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/job/${slug}`,
    },
  };
}

// 🔹 Main Job Details Component
export default async function JobDetails({ params }) {
  const { slug } = await params;
  const {job, errorMessage }= await singleJobData({ slug });
  // Structured Data (JSON-LD Schema.org)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job?.title,
    description: job?.description,
    identifier: {
      "@type": "PropertyValue",
      name: "Softvence",
      value: job?.id,
    },
    datePosted: job?.createdAt ? new Date(job?.createdAt).toISOString() : "",
    employmentType: job?.jobType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Softvence",
      sameAs: process.env.NEXT_PUBLIC_DOMAIN,
      logo: `${process.env.NEXT_PUBLIC_DOMAIN}/logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job?.location,
        addressCountry: "BD",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "BDT",
      value: {
        "@type": "QuantitativeValue",
        minValue: job?.minSalary,
        maxValue: job?.maxSalary,
        unitText: "MONTH",
      },
    },
  };

   if (errorMessage) {
    return (
      <div className="min-h-[calc(100vh-260px)] flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-red-600">{errorMessage}</h1>
        <p className="text-gray-600 mt-2">The job you’re trying to view doesn’t exist or has been removed.</p>
        <Link  href="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Go to Home</Link>
      </div>
    );
  }

  return (
    <main className="mt-[77px] my-14">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Page Content */}
      <Banner singleJob={job} />
      <JobRequerment slug={slug} singleJob={job} />
      <Location />
    </main>
  );
}
