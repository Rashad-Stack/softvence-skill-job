"use client";

import axiosInstance from "@/lib/axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function JobApplicationForm({ id, job }) {
  // console.log("job", job)

  const fieldsArray = Object.entries(job?.fields);
  // console.log("fields array", fieldsArray)



  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data -->", data)
    try {
      const formData = new FormData();
      formData.append("jobId", id);
      formData.append("fullName", data.name);
      formData.append("email", data.email);
      formData.append("phoneNumber", data.phone);
      formData.append("expectSalary", parseInt(data.salary));
      formData.append("githubUrl", data.github);
      // formData.append("cpProfile", data.others || "");
      formData.append("cv", data.resume);

      // Dynamically add other fields except fixed ones
      const fixedKeys = ["name", "email", "phone", "salary", "github", "resume"];
      const othersFields = {};

      Object.entries(data).forEach(([key, value]) => {
        if (!fixedKeys.includes(key)) {
          othersFields[key] = value;
        }
      });
      formData.append("othersFields", JSON.stringify(othersFields));


      console.log(formData);

      const response = await axiosInstance.post("/job/application/create", formData);

      toast.success("Application submitted successfully!");
      reset();
    } catch (error) {
      console.error("Upload Error:", error);
      toast.error(
        error?.response?.data?.message || "Failed to submit application."
      );
    }
  };

  return (
    <section
      aria-labelledby="job-application-form-title"
      className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto space-y-6 border border-gray-200"
    >
      <h2
        id="job-application-form-title"
        className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center"
      >
        Apply for This Job - Job Application Form
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        role="form"
        aria-describedby="job-application-description"
        className="space-y-6"
      >
        <p id="job-application-description" className="sr-only">
          Fill out the form to submit your application for the job opening. Required fields are marked with an asterisk (*).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="mb-1 font-medium text-gray-700"
            >
              Full Name <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className={`border rounded-lg border-green-300 px-4 py-2 focus:outline-none focus:ring focus:ring-green-400 ${errors.name ? "border-red-500" : ""
                }`}
              placeholder="Your full name"
            />
            {errors.name && (
              <span role="alert" className="text-sm text-red-500 mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-1 font-medium text-gray-700"
            >
              Email <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className={`border rounded-lg border-green-300 px-4 py-2 focus:outline-none focus:ring focus:ring-green-400 ${errors.email ? "border-red-500" : ""
                }`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <span role="alert" className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="mb-1 font-medium text-gray-700"
            >
              Phone Number <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              aria-required="true"
              aria-invalid={errors.phone ? "true" : "false"}
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{11,15}$/,
                  message: "Enter a valid phone number",
                },
              })}
              className={`border rounded-lg border-green-300 px-4 py-2 focus:outline-none focus:ring focus:ring-green-400 ${errors.phone ? "border-red-500" : ""
                }`}
              placeholder="e.g. 01234567890"
            />
            {errors.phone && (
              <span role="alert" className="text-sm text-red-500 mt-1">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="salary"
              className="mb-1 font-medium text-gray-700"
            >
              Salary Expectation <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              id="salary"
              type="number"
              min="1"
              aria-required="true"
              aria-invalid={errors.salary ? "true" : "false"}
              {...register("salary", {
                required: "Salary is required",
                validate: (value) =>
                  !isNaN(value) && parseInt(value) > 0 || "Enter a valid number",
              })}
              className={`border rounded-lg border-green-300 px-4 py-2 focus:outline-none focus:ring focus:ring-green-400 ${errors.salary ? "border-red-500" : ""
                }`}
              placeholder="Expected salary in TK"
            />
            {errors.salary && (
              <span role="alert" className="text-sm text-red-500 mt-1">
                {errors.salary.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="resume"
            className="mb-1 font-medium text-gray-700"
          >
            Upload your CV <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <small className="mt-2 mb-1 text-yellow-500">
            Due to security reasons, please upload your CV to Google Drive, make it publicly accessible, and share the public link here. Inaccessible CV links will disqualify your application.
          </small>
          <input
            id="resume"
            type="url"
            aria-required="true"
            aria-invalid={errors.resume ? "true" : "false"}
            {...register("resume", {
              required: "Resume is required",
              pattern: {
                value: /https:\/\/drive\.google\.com\/.+/,
                message: "Enter a valid Google Drive link",
              },
            })}
            className={`border rounded-lg border-green-300 px-4 py-2 focus:outline-none focus:ring focus:ring-green-400 ${errors.resume ? "border-red-500" : ""
              }`}
            placeholder="https://drive.google.com/your-cv-link"
          />
          {errors.resume && (
            <span role="alert" className="text-sm text-red-500 mt-1">
              {errors.resume.message}
            </span>
          )}
          <small className="text-gray-500 mt-2">
            <a
              className="text-[#038317] text-sm font-medium leading-normal underline ml-1"
              href="https://www.youtube.com/watch?v=l8lr-QJ7mdA"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to upload your CV on Google Drive
            </a>
          </small>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="github"
            className="mb-1 font-medium text-gray-700"
          >
            GitHub Profile Link <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="github"
            type="url"
            aria-required="true"
            aria-invalid={errors.github ? "true" : "false"}
            {...register("github", {
              required: "GitHub profile is required",
              pattern: {
                value: /^(https?:\/\/)?(www\.)?github\.com\/[A-z0-9_-]+\/?$/,
                message: "Enter a valid GitHub profile URL",
              },
            })}
            className={`border rounded-lg border-green-300 px-4 py-2 focus:outline-none focus:ring focus:ring-green-400 ${errors.github ? "border-red-500" : ""
              }`}
            placeholder="https://github.com/yourusername"
          />
          {errors.github && (
            <span role="alert" className="text-sm text-red-500 mt-1">
              {errors.github.message}
            </span>
          )}
        </div>

        {fieldsArray &&
          fieldsArray.map(([key, value]) => (
            <div key={key} className="flex flex-col mb-4">
              <label
                htmlFor={key}
                className="mb-1 font-medium text-gray-700 capitalize"
              >
                {key}
              </label>

              <input
                id={key}
                type="url"
                placeholder={value}
                {...register(key, {
                  pattern: {
                    value: /^(https?:\/\/)?[^\s]+$/,
                    message: "Enter a valid URL",
                  },
                })}
                className={`border rounded-lg border-green-300 px-4 py-2 focus:outline-none focus:ring focus:ring-green-400 ${errors?.[key] ? "border-red-500" : ""}`}
              />

              {errors?.[key] && (
                <span role="alert" className="text-sm text-red-500 mt-1">
                  {errors[key].message}
                </span>
              )}
            </div>
          ))
        }

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
