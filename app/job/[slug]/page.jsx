import axios from 'axios';
import React from 'react'
import Banner from '@/components/JobDetailsComponents/Banner';
import JobRequerment from '@/components/JobDetailsComponents/JobRequerment';
import Location from '@/components/JobDetailsComponents/Location';

export default async function JobDetails({ params }) {
    const { slug } = await params;
    // const singleJobData = await axios.get(`http://localhost:5000/api/v1/job/${id}`);
    const singleJobData = await axios.get(`http://localhost:3000/api/v2/job/slug/${slug}`);
    const singleJob = singleJobData.data.data
    console.log(singleJob)

    return (
        <main className='mt-[77px] my-14'>
            {/* banner section */}
            <Banner></Banner>
            
            {/* Job requirment */} 
            <JobRequerment slug={slug}></JobRequerment>

            {/* Location section */}
            <Location></Location>
        </main>
    )
}


