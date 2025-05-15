import React from 'react'
import bg from "../../assets/images/job-detail-bg.png";

export default function Banner({singleJob}) {
    return (
        <section className=" bg-center bg-cover bg-no-repeat w-full" style={{ backgroundImage: `url(${bg.src})` }}>
            <div className='container mx-auto p-2 md:p-0'>
                <div className='text-white py-32 max-w-[400px] mx-auto md:mx-0 md:max-w-[544px]'>
                    <div>
                        <p className='text-base font-normal leading-normal'>Developer</p>
                        <h2 className='text-xl md:text-3xl md:text-[40px] font-medium leading-normal'>{singleJob.title}</h2>
                        <p className='text-lg md:text-[24px] font-semibold leading-normal'>25,000 - 90,0000 <span className='text-[#C8C8C8] text-[10px] font-medium leading-normal'>BDT/Month</span> </p>
                    </div>
                    <div className='flex flex-wrap space-y-2 items-center justify-between mt-12'>
                        <div>
                            <p className='text-base font-medium leading-normal'>Location</p>
                            <p className='text-[#C8C8C8] text-[14px] font-normal leading-normal'>{singleJob.location}</p>
                        </div>
                        <div>
                            <p className='text-base font-medium leading-normal'>Job Type</p>
                            <p className='text-[#C8C8C8] text-[14px] font-normal leading-normal'>{singleJob.jobType?.replace("_", " ")}</p>
                        </div>
                        <div>
                            <p className='text-base font-medium leading-normal'>Experience</p>
                            <p className='text-[#C8C8C8] text-[14px] font-normal leading-normal'>{singleJob.jobLevel?.replace("_", " ")}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
