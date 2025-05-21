"use server";

import axiosInstance from "@/lib/axios";

export async function singleJobData ({slug}) {
    try {
        const data = await axiosInstance.get(`/job/slug/${slug}`);
        return data.data?.data;
    } catch (error) {
        console.error(error)
        throw error
    }
}