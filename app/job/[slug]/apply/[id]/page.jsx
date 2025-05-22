import { singleJobData } from "@/service/api";
import JobApplicationForm from "../_components/JobApplicationForm";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = await singleJobData({ slug });

   if (!job) {
    return {
      title: 'Job Not Found | Softvence',
      description: 'The job you are looking for does not exist or is no longer available.',
    };
  }

  return {
    title: `Apply for ${job?.title} Job | Softvence`,
    description: `Submit your application for the ${job?.title} position. Join our team and explore career opportunities at Softvence.`,
    keywords: [
      `${job?.title} job application`,
      "job application form",
      "career opportunities",
      `${job?.title} careers`,
      "apply for jobs",
    ],
    openGraph: {
      title: `Apply for ${job?.title} Job | Softvence`,
      description: `Submit your application for the ${job?.title} position at Softvence.`,
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/job/${slug}/apply/${job?.id}`,
      siteName: 'Softvence',
      images: [
        {
          url: '/lara.png',
          width: 1200,
          height: 630,
          alt: `Apply for ${job?.title} job`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Apply for ${job?.title} Job | Softvence`,
      description: `Apply now for the ${job?.title} job at Softvence.`,
      images: [`${process.env.NEXT_PUBLIC_DOMAIN}/lara.png`],
    },
    
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/job/${slug}/apply/${job?.id}`,
    },
  };
}

export default async function JobFormPage({ params }) {
  const { slug, id } = await params; 
  const {job, errorMessage} = await singleJobData({ slug });

  if (errorMessage) {
    return (
      <div className="min-h-[calc(100vh-260px)] flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-red-600">{errorMessage}</h1>
        <p className="text-gray-600 mt-2">The job you’re trying to view doesn’t exist or has been removed.</p>
        <Link  href="/" className="mt-6 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition">Go to Home</Link>
      </div>
    );
  }

  return (
    <main className="container mx-auto max-w-4xl py-10 mt-20 px-4 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Apply for Job:{" "}
        <span className="text-green-700 capitalize">{job?.title}</span>
      </h1>

      {/* Application Form */}
      <JobApplicationForm id={id} job={job}/>
    </main>
  );
}
