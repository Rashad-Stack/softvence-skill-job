"use client";

import axiosInstance from "@/lib/axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function JobApplicationForm({ id, job }) {
  const fieldsArray = Object.entries(job?.fields);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("jobId", id);
      formData.append("fullName", data.name);
      formData.append("email", data.email);
      formData.append("phoneNumber", data.phone);
      formData.append("expectSalary", parseInt(data.salary));
      formData.append("githubUrl", data.github);
      formData.append("cv", data.resume);

      const fixedKeys = ["name", "email", "phone", "salary", "github", "resume"];
      const othersFields = {};
      Object.entries(data).forEach(([key, value]) => {
        if (!fixedKeys.includes(key)) othersFields[key] = value;
      });
      formData.append("othersFields", JSON.stringify(othersFields));

      await axiosInstance.post("/job/application/create", formData);
      toast.success("Application submitted successfully!");
      reset();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to submit application.");
    }
  };

  return (
    <section className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto space-y-6 border border-gray-200" aria-labelledby="job-application-form-title">
      <h2 id="job-application-form-title" className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
        Apply for This Job - Job Application Form
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-describedby="job-application-description"
        className="space-y-6"
      >
        <p id="job-application-description" className="sr-only">
          Fill out the form to submit your application for the job opening. Required fields are marked with an asterisk (*).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{
            id: "name",
            label: "Full Name",
            type: "text",
            placeholder: "Your full name",
            validation: {
              required: "Name is required",
              minLength: { value: 3, message: "Name must be at least 3 characters" },
            }
          }, {
            id: "email",
            label: "Email",
            type: "email",
            placeholder: "you@example.com",
            validation: {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
            }
          }, {
            id: "phone",
            label: "Phone Number",
            type: "tel",
            placeholder: "e.g. 01234567890",
            validation: {
              required: "Phone number is required",
              pattern: { value: /^[0-9]{11,15}$/, message: "Enter a valid phone number" },
            }
          }, {
            id: "salary",
            label: "Salary Expectation",
            type: "number",
            placeholder: "Expected salary in TK",
            validation: {
              required: "Salary is required",
              validate: v => parseInt(v) > 0 || "Enter a valid number"
            }
          }].map(({ id, label, type, placeholder, validation }) => (
            <div key={id} className="flex flex-col">
              <label htmlFor={id} className="mb-1 font-medium text-gray-700">
                {label} <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                aria-invalid={errors[id] ? "true" : "false"}
                aria-required="true"
                {...register(id, validation)}
                className={`border rounded-lg border-green-300 px-4 py-2 focus:outline-none focus:ring focus:ring-green-400 ${errors[id] ? "border-red-500" : ""}`}
              />
              {errors[id] && <span role="alert" className="text-sm text-red-500 mt-1">{errors[id].message}</span>}
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          <label htmlFor="resume" className="mb-1 font-medium text-gray-700">Upload your CV <span className="text-red-500">*</span></label>
          <small className="mt-2 mb-1 text-yellow-500">
            Upload your CV to Google Drive, make it public, and paste the link here. Private links will disqualify your application.
          </small>
          <input
            id="resume"
            type="url"
            placeholder="https://drive.google.com/your-cv-link"
            {...register("resume", {
              required: "Resume is required",
              pattern: { value: /https:\/\/drive\.google\.com\/.+/, message: "Enter a valid Google Drive link" },
            })}
            className={`border rounded-lg border-green-300 px-4 py-2 focus:outline-none focus:ring focus:ring-green-400 ${errors.resume ? "border-red-500" : ""}`}
          />
          {errors.resume && <span role="alert" className="text-sm text-red-500 mt-1">{errors.resume.message}</span>}
          <small className="text-gray-500 mt-2">
            <a className="text-[#038317] text-sm font-medium underline" href="https://www.youtube.com/watch?v=l8lr-QJ7mdA" target="_blank" rel="noopener noreferrer">
              How to upload your CV on Google Drive
            </a>
          </small>
        </div>

        <div className="flex flex-col">
          <label htmlFor="github" className="mb-1 font-medium text-gray-700">GitHub Profile Link <span className="text-red-500">*</span></label>
          <input
            id="github"
            type="url"
            placeholder="https://github.com/yourusername"
            {...register("github", {
              required: "GitHub profile is required",
              pattern: { value: /^(https?:\/\/)?(www\.)?github\.com\/[A-z0-9_-]+\/?$/, message: "Enter a valid GitHub URL" },
            })}
            className={`border rounded-lg border-green-300 px-4 py-2 focus:outline-none focus:ring focus:ring-green-400 ${errors.github ? "border-red-500" : ""}`}
          />
          {errors.github && <span role="alert" className="text-sm text-red-500 mt-1">{errors.github.message}</span>}
        </div>

        <div className="grid grid-cols-12 gap-4">
          {fieldsArray.map(([key, field]) => {
            const inputType = ["text", "url", "number", "email", "password", "tel", "date"].includes(field.type) ? field.type : "text";
            const validation = field.required ? { required: `${field.title} is required` } : {};

            if (field.type === "select") {
              return (
                <div key={key} className={`flex flex-col mb-4`} style={{ gridColumn: `span ${field.column || 12}` }}>
                  <label htmlFor={key} className="mb-1 font-medium text-gray-700 capitalize">{field.title}</label>
                  <select {...register(key, validation)} id={key} className="border rounded-lg border-green-300 px-4 py-2 focus:outline-none focus:ring focus:ring-green-400">
                    <option value="">Select {field.title}</option>
                    {field.options?.map((opt, i) => <option key={i} value={opt.value}>{opt.label}</option>)}
                  </select>
                  {errors[key] && <span role="alert" className="text-sm text-red-500 mt-1">{errors[key]?.message}</span>}
                </div>
              );
            }

            if (field.type === "radio") {
              return (
                <div key={key} className={`flex flex-col mb-4`} style={{ gridColumn: `span ${field.column || 12}` }}>
                  <label className="mb-1 font-medium text-gray-700 capitalize">{field.title}</label>
                  <div className="flex gap-4">
                    {field.options?.map((opt, i) => (
                      <label key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <input type="radio" value={opt.value} {...register(key, validation)} /> {opt.label}
                      </label>
                    ))}
                  </div>
                  {errors[key] && <span role="alert" className="text-sm text-red-500 mt-1">{errors[key]?.message}</span>}
                </div>
              );
            }

            return (
              <div key={key} className={`flex flex-col mb-4`} style={{ gridColumn: `span ${field.column || 12}` }}>
                <label htmlFor={key} className="mb-1 font-medium text-gray-700 capitalize">{field.title}</label>
                <input
                  type={inputType}
                  id={key}
                  placeholder={field.placeholder || `Enter ${field.title}`}
                  {...register(key, validation)}
                  className={`border rounded-lg border-green-300 px-4 py-2 focus:outline-none focus:ring focus:ring-green-400 ${errors[key] ? "border-red-500" : ""}`}
                />
                {errors[key] && <span role="alert" className="text-sm text-red-500 mt-1">{errors[key]?.message}</span>}
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          aria-label="Submit Job Application"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer"
        >
          Submit Application
        </button>
      </form>
    </section>
  );
}
