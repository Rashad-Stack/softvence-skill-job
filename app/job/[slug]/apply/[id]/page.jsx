import { singleJobData } from "@/service/api";
import JobApplicationForm from "../_components/JobApplicationForm";

export async function generateMetadata({ params }) {
  const { slug } = await params;
   const job = await singleJobData({ slug });
  return {
    title: `Apply for ${job.title} Job | Softvence`,
    description: `Submit your application for the ${job.title} position. Join our team and explore career opportunities at Softvence.`,
    keywords: [
      `${job.title} job application`,
      "job application form",
      "career opportunities",
      `${job.title} careers`,
      "apply for jobs",
    ],
    openGraph: {
      title: `Apply for ${job.title} Job | Softvence`,
      description: `Submit your application for the ${job.title} position at Softvence.`,
      url: `https://yourdomain.com/jobs/apply/${job.title}`,  // Replace with your real URL structure
      siteName: 'Softvence',
      images: [
        {
          url: 'https://yourdomain.com/og-image-job-apply.png', // Replace with your actual image URL
          width: 1200,
          height: 630,
          alt: `Apply for ${job.title} job`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Apply for ${job.title} Job | Softvence`,
      description: `Apply now for the ${job.title} job at Softvence.`,
      images: ['https://yourdomain.com/og-image-job-apply.png'], // Replace this
    },
  };
}

export default async function JobFormPage({ params }) {
  const { slug, id } = await params;
   const job = await singleJobData({ slug });

  return (
    <main className="container mx-auto max-w-4xl py-10 mt-20 px-4 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Apply for Job:{" "}
        <span className="text-green-700 capitalize">{job.title}</span>
      </h1>

      {/* Application Form */}
      <JobApplicationForm id={id} />
    </main>
  );
}
