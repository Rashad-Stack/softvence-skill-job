import React from 'react'
import Banner from '@/components/JobDetailsComponents/Banner';
import JobRequerment from '@/components/JobDetailsComponents/JobRequerment';
import Location from '@/components/JobDetailsComponents/Location';
import axiosInstance from '@/lib/axios';

export default async function JobDetails({ params }) {
    const { slug } = await params;
    const singleJobData = await axiosInstance.get(`/job/slug/${slug}`);
    const singleJob = singleJobData.data.data;

    return (
        <main className='mt-[77px] my-14'>
            {/* banner section */}
            <Banner singleJob={singleJob}></Banner>

            {/* Job requirment */}
            <JobRequerment slug={slug} singleJob={singleJob}></JobRequerment>

            {/* Location section */}
            <Location></Location>

        </main>
    )
}


