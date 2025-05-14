import axios from 'axios';
import React from 'react'
import bg from "../../../assets/images/detail-bg.png";

export default async function JobDetails({ params }) {
    const { id } = await params;
    const singleJobData = await axios.get(`http://localhost:5000/api/v1/job/${id}`);
    const singleJob = singleJobData.data.data
    console.log(singleJob)
    
    return (
        <main>
            <section className="w-full mt-24 my-14 h-[700px] bg-center bg-cover bg-no-repeat text-white bg-[#f3f4f6]" style={{ backgroundImage: `url(${bg.src})`}}>
                <div className="min-h-screen container mx-auto py-10 px-4 mt-[65px]">
                    {/* Title */}
                    <h2 className=" lg:text-[48px] xl:text-[48px] 2xl:text-[48px] md:text-[30px] sm:text-[20px] text-[20px] font-semibold lg:mb-6 mb-2 font-pop">
                        {singleJob?.title}
                    </h2>
                </div>
            </section>
        </main>
    )
}
