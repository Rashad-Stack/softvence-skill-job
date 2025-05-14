import axios from 'axios';
import React from 'react'
import Banner from '@/components/JobDetailsComponents/Banner';
import JobRequerment from '@/components/JobDetailsComponents/JobRequerment';

export default async function JobDetails({ params }) {
    const { id } = await params;
    const singleJobData = await axios.get(`http://localhost:5000/api/v1/job/${id}`);
    const singleJob = singleJobData.data.data
    console.log(singleJob)

    return (
        <main className='mt-[77px] my-14'>
            {/* banner section */}
            <Banner></Banner>
            
            {/* Job requirment */} 
            <JobRequerment id={id}></JobRequerment>
            
        </main>
    )
}


