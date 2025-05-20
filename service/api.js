"use server";

import axiosInstance from "@/lib/axios";

export async function singleJobData ({slug}) {
    try {
        const data = await axiosInstance.get(`/job/slug/${slug}`);
        // console.log(data.data?.data)
        return data.data?.data;
    } catch (error) {
        console.error(error)
        throw error
    }
}