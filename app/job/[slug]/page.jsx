import React from 'react';
import Banner from '@/components/JobDetailsComponents/Banner';
import JobRequerment from '@/components/JobDetailsComponents/JobRequerment';
import Location from '@/components/JobDetailsComponents/Location';
import { singleJobData } from '@/service/api';

// 🔹 Metadata with Canonical Tag
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
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/job/${slug}`,
      images: [
        {
          url: '/lara.png',
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
  const job = await singleJobData({ slug });

  // 🔸 Structured Data (JSON-LD Schema.org)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    identifier: {
      "@type": "PropertyValue",
      name: "Softvence",
      value: job.id,
    },
    datePosted: new Date(job.createdAt).toISOString(),
    employmentType: job.jobType,
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
        addressLocality: job.location,
        addressCountry: "BD",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "BDT",
      value: {
        "@type": "QuantitativeValue",
        minValue: job.minSalary,
        maxValue: job.maxSalary,
        unitText: "MONTH",
      },
    },
  };

  return (
    <main className="mt-[77px] my-14">
      {/* ✅ Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ✅ Page Content */}
      <Banner singleJob={job} />
      <JobRequerment slug={slug} singleJob={job} />
      <Location />
    </main>
  );
}
