import JobApplicationForm from "../_components/JobApplicationForm";

export default function JobFormPage({ params }) {
  const { slug } = params;

  return (
    <div className="container mx-auto max-w-4xl py-10 px-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Apply for Job:{" "}
        <span className="text-green-700 capitalize">{slug}</span>
      </h1>

      {/* Application Form */}
      <JobApplicationForm slug={slug} />
    </div>
  );
}
