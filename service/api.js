"use server";

import axiosInstance from "@/lib/axios";

export async function singleJobData ({slug}) {
     try {
        const data = await axiosInstance.get(`/job/slug/${slug}`);
        return {job: data.data?.data, errorMessage: null};

    } catch (error) {
        if(error.response && error.response.status === 404){
            return {job: [], errorMessage: "No jobs found"};
        }else{
            return {job: [], errorMessage: "Something went wrong. Please try again later"};
        }
    }
}

export async function getAllJOb() {
    try {
        const { data } = await axiosInstance.get("/job/all");
        return {allJobs: data.data, errorMessage: null};

    } catch (error) {
        if(error.response && error.response.status === 404){
            return {allJobs: [], errorMessage: "No jobs found"};
        }else{
            return {allJobs: [], errorMessage: "Something went wrong. Please try again later"};
        }
    }
}