import JobApplicationForm from "./_components/JobApplicationForm";

export default function JobFormPage({ params }) {
  const { slug } = params;

  return (
    <div className="container mx-auto max-w-4xl py-10 px-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Apply for Job:{" "}
        <span className="text-green-700 capitalize">{slug}</span>
      </h1>

      {/* Job Description Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">
          Join Sof<span className="text-green-600">t</span>Vence Agency: <br />
          Frontend Developer (Night Shift)
        </h2>
        <p className="text-gray-600 mb-6">
          SoftVence Agency, a top tech company in Dhaka, is looking for a
          Frontend Developer with expertise in Node.js and REST APIs.
        </p>

        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Job Summary</h4>
          <p>
            We are seeking a UI/UX Designer to join our team at Ollyo. In this
            role, you will help craft the visual and interactive elements of our
            software products, ensuring a seamless and intuitive user
            experience. You will collaborate with our product and development
            teams to create innovative, user-centered designs.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Key Responsibilities</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Design intuitive and user-friendly interfaces for our digital products.</li>
            <li>Collaborate with product management and engineering teams on product visuals and experience.</li>
            <li>Develop wireframes, storyboards, and user flows to communicate design ideas.</li>
            <li>Conduct user research and evaluate feedback to refine UI/UX design.</li>
            <li>Apply and maintain design guidelines and standards across all products.</li>
            <li>Stay updated on the latest UI/UX design trends and technologies.</li>
            <li>Visualize complex user scenarios and provide effective design solutions.</li>
            <li>Participate in design reviews and be open to feedback.</li>
            <li>Contribute to a cohesive and consistent brand identity across interfaces.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Why Work With Us:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Collaborative team culture.</li>
            <li>Profit sharing and performance bonuses.</li>
            <li>Unlimited tea and coffee.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Job Details:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Location: Ambon Complex, Mohakhali, Dhaka.</li>
            <li>Hours: Night Shift (10:00 PM - 6:30 AM).</li>
            <li>Salary: 18.5k to 30k BDT (negotiable).</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Benefits for Night Shift:</h4>
          <ul className="list-none space-y-1">
            <li>✔ 20% Basic Extra Salary</li>
            <li>✔ Meal Allowance</li>
            <li>✔ Fast Career Growth</li>
            <li>✔ Priority Leave Approvals</li>
            <li>✔ 2 Festival Bonuses</li>
            <li>✔ Performance Bonuses</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Who Should Apply:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Background in backend development and OOP.</li>
            <li>Experience with Node.js and frontend frameworks.</li>
            <li>Degree in Computer Science or related field preferred.</li>
          </ul>
        </div>
      </section>

      {/* Application Form */}
      <JobApplicationForm slug={slug} />
    </div>
  );
}
