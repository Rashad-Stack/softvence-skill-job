"use client";

import axiosInstance from "@/lib/axios";
import { useForm } from "react-hook-form";
import CvUpload from "./CvUpload";
import { toast } from "react-toastify";

export default function JobApplicationForm({ id }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data", data)
    try {
      const formData = new FormData();
      formData.append("jobId", id);
      formData.append("fullName", data.name);
      formData.append("email", data.email);
      formData.append("phoneNumber", data.phone);
      formData.append("ExpectSalary", data.salary);
      formData.append("githubUrl", data.github);
      formData.append("cpProfile", data.others || "");
      formData.append("cv", data.resume);

      const response = await axiosInstance.post("/job/application/create", formData);

      console.log("Upload Success:", response.data);
      toast.success("Application submitted successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      toast.error(
        error?.response?.data?.message || "Failed to submit application."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto space-y-6 border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Job Application Form
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.name && (
            <span className="text-sm text-red-500 mt-1">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.email && (
            <span className="text-sm text-red-500 mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register("phone", { required: "Phone number is required" })}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.phone && (
            <span className="text-sm text-red-500 mt-1">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">
            Salary Expectation <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("salary", { required: "Salary is required" })}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.salary && (
            <span className="text-sm text-red-500 mt-1">
              {errors.salary.message}
            </span>
          )}
        </div>
      </div>

      {/* File Upload */}
      {/* <CvUpload register={register} errors={errors} setValue={setValue} /> */}

      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">
          Upload your CV <span className="text-red-500">*</span>
        </label>
        <small className="mt-2 mb-1 text-red-400">
          Due to security concerns, please upload your CV to your Google Drive and set the sharing permissions to public. Then, share the public link with us. Please note that if your CV link is not publicly accessible, your application will not be considered.
        </small>
        <input
          type="url"
          {...register("resume", { required: "Resume is required" })}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.resume && (
          <span className="text-sm text-red-500 mt-1">
            {errors.resume.message}
          </span>
        )}
        <small className="text-gray-500 mt-2">
          See how to upload your CV to Google Drive and make it publicly accessible.
          <a
            className='text-[#038317] text-[16px] font-medium leading-normal underline'
            href="https://www.youtube.com/watch?v=l8lr-QJ7mdA"
            target="_blank"
            rel="noopener noreferrer">
            See Upload Guide
          </a>
        </small>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">
          GitHub Profile Link <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          {...register("github", { required: "GitHub profile is required" })}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.github && (
          <span className="text-sm text-red-500 mt-1">
            {errors.github.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">
          Competitive Programming Profiles
        </label>
        <input
          type="url"
          placeholder="LeetCode, Codeforces, HackerRank, etc."
          {...register("others")}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer"
      >
        Submit Application
      </button>
    </form>
  );
}




