import JobApplicationForm from "../_components/JobApplicationForm";

export default async function JobFormPage({ params }) {
  const {slug, id } = await params;
  console.log( id)

  return (
    <div className="container mx-auto max-w-4xl py-10 mt-20 px-4 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Apply for Job:{" "}
        <span className="text-green-700 capitalize">{slug}</span>
      </h1>

      {/* Application Form */}
      <JobApplicationForm id={id}/>
    </div>
  );
}
