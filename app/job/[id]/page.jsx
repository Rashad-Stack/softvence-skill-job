import axios from 'axios';
import React from 'react'
import bg from "../../../assets/images/job-detail-bg.png";
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function JobDetails({ params }) {
    const { id } = await params;
    const singleJobData = await axios.get(`http://localhost:5000/api/v1/job/${id}`);
    const singleJob = singleJobData.data.data
    console.log(singleJob)

    return (
        <main className='mt-[77px] my-14'>
            {/* banner section */}
            <section className="  bg-center bg-cover bg-no-repeat w-full" style={{ backgroundImage: `url(${bg.src})` }}>
                <div className='container mx-auto relative'>
                    <div className='text-white py-32 max-w-[544px]'>
                        <div>
                            <p className='text-base font-normal leading-normal'>Developer</p>
                            <h2 className='text-[40px] font-medium leading-normal'>Front End Development</h2>
                            <p className='text-[24px] font-semibold leading-normal'>25,000 - 90,0000 <span className='text-[#C8C8C8] text-[10px] font-medium leading-normal'>BDT/Month</span> </p>
                        </div>
                        <div className='flex items-center justify-between mt-12'>
                            <div>
                                <p className='text-base font-medium leading-normal'>Location</p>
                                <p className='text-[#C8C8C8] text-[14px] font-normal leading-normal'>Dhaka, Bangladesh</p>
                            </div>
                            <div>
                                <p className='text-base font-medium leading-normal'>Job Type</p>
                                <p className='text-[#C8C8C8] text-[14px] font-normal leading-normal'>Full Time</p>
                            </div>
                            <div>
                                <p className='text-base font-medium leading-normal'>Experience</p>
                                <p className='text-[#C8C8C8] text-[14px] font-normal leading-normal'>Entry-Level</p>
                            </div>
                        </div>
                    </div>
                    {/* appy part */}
                    <div className='bg-[#fafffb] p-8 max-w-[488px] rounded-3xl absolute right-0 -bottom-32'>
                        {/* <div className='w-full'> */}
                        <p className='text-[#484848] text-base font-normal leading-[132%] tracking[-0.32px] mb-6'>Ready to apply? We can't wait to meet you!</p>
                        {/* Button */}
                        {/* to do: button modify */}
                        <button className="text-sm sm:text-base bg-[#038317] text-white px-4 py-2 rounded-lg hover:bg-[#40854a] transition font-pop font-semibold w-full"> <Link href="" aria-label="Apply Job">
                            Apply Now
                        </Link> </button>
                        {/* <Link className="text-sm sm:text-base bg-[#038317] text-white px-4 py-2 rounded-lg hover:bg-[#40854a] transition font-pop font-semibold w-full" href="" aria-label="Apply Job">
                                Apply Now
                            </Link> */}
                        <p className='text-[#636363] text-center text-base font-normal leading-[132%] tracking[-0.32px] mt-8 mb-6'>Next, you'll face an assessment to proceed. Apply for one job at a time and prepare well.</p>
                        <p className='text-[#484848] text-center text-[12px] font-normal leading-[132%] tracking[-0.24px]'>* By applying for this job listing, you agree to our Data</p>
                        {/* </div> */}
                    </div>
                </div>
            </section>
            {/*  */}
            <section>
                <div className='flex'>
                    <div>
                        <Markdown remarkPlugins={[remarkGfm]}>{jobDescription}</Markdown>
                    </div>
                    <div>
                        {/* first div */}
                        <div></div>
                        {/* second div */}
                        <div></div>
                    </div>
                </div>
            </section>
        </main>
    )
}


const jobDescription = `
    ##Job Summary
We are seeking a UI/UX Designer to join our team at Oilyo. In this role, you will help craft the visual and interactive elements of our software products, ensuring a seamless and intuitive user experience. You will collaborate with our product and development teams to create innovative, user-centered designs.

## Key Responsibilities
- Design intuitive and user-friendly interfaces for our digital products.
- Collaborate with product management and engineering teams on product visuals and experience.
- Develop wireframes, storyboards, and user flows to communicate design ideas.
- Conduct user research and evaluate feedback to refine UI/UX design.
- Apply and maintain design guidelines and standards across all products.
- Stay updated on the latest UI/UX design trends and technologies.
- Visualize complex user scenarios and provide effective design solutions.
- Participate in design reviews and be open to feedback.
- Contribute to a cohesive and consistent brand identity across interfaces.

## Qualifications
- Demonstrable UI/UX design skills with a strong portfolio.
- Proficiency in design tools such as Figma.
- Understanding of user-centered design and usability principles.
- Ability to translate product requirements into functional designs.
- Experience in user research and usability testing is a plus.
- Familiarity with UI/UX design trends and technologies.
- Strong problem-solving skills and ability to work collaboratively.
- Good communication and presentation skills.
- Basic understanding of front-end development (HTML5, CSS3) is a plus.
- Keen eye for aesthetics and detail.

## Why Join Us?
- Opportunity to work on impactful projects.
- Cultivate creativity and innovation within a supportive culture.
- Competitive salary and benefits.

`