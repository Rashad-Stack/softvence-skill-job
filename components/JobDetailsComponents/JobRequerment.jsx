"use client";
import React from 'react'
import Link from 'next/link';
import remarkGfm from 'remark-gfm';
import { TbCalendarMonthFilled } from "react-icons/tb";
import { TfiAlarmClock } from "react-icons/tfi";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";
import { TbUsersGroup } from "react-icons/tb";
import ReactMarkdown from "react-markdown";


const jobDescription = `
## Job Summary
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

export default function JobRequerment({ slug, singleJob }) {



    return (
        <section className='mt-5 container mx-auto lg:relative p-2 md:p-0'>
            {/* apply part */}
            <div className='bg-[#fafffb] p-8 max-w-[488px] mx-auto rounded-3xl lg:absolute right-0 -top-40 border border-[#E1F3E4]'>
                <p className='text-[#484848] text-base font-normal leading-[132%] tracking[-0.32px] mb-6'>Ready to apply? We can't wait to meet you!</p>
                {/* Button */}
                {/* to do: button modify */}
                <button className="text-sm sm:text-base bg-[#038317] text-white px-4 py-2 rounded-lg hover:bg-[#40854a] transition font-pop font-semibold w-full">
                    <Link href={`/job/${slug}/form`} aria-label="Apply Job">
                        Apply Now
                    </Link>
                </button>
                {/* <Link className="text-sm sm:text-base bg-[#038317] text-white px-4 py-2 rounded-lg hover:bg-[#40854a] transition font-pop font-semibold w-full" href="" aria-label="Apply Job">
                    Apply Now
                </Link> */}
                <p className='text-[#636363] text-center text-base font-normal leading-[132%] tracking[-0.32px] mt-8 mb-6'>Next, you'll face an assessment to proceed. Apply for one job at a time and prepare well.</p>
                <p className='text-[#484848] text-center text-[12px] font-normal leading-[132%] tracking[-0.24px]'>* By applying for this job listing, you agree to our Data</p>
            </div>

            <div className='lg:flex lg:justify-between lg:items-center '>
                {/* left side  */}
                <div className='lg:max-w-1/2 mb-10 lg:mb-0'>
                {/* markDown text */}
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h2: ({ node, ...props }) => <h2 className="text-[#121212] font-[Poppins] text-2xl font-medium my-4" {...props} />,
                            p: ({ node, ...props }) => <p className="text-[#474747] font-[Poppins] text-base font-normal my-2" {...props} />,
                            li: ({ node, ...props }) => <li className="text-[#474747] font-[Poppins] text-base font-normal list-disc ml-6" {...props} />,
                        }}
                    >{jobDescription}</ReactMarkdown>
                </div>

                {/* right side  */}
                <div className='lg:max-w-[1/2] lg:mt-15'>
                    {/* first div */}
                    <div className='bg-[#fafffb] p-8 md:w-[488px] mx-auto lg:mx-0 rounded-3xl border border-[#E1F3E4]'>
                        <h4 className='text-[#121212] text-[20px] font-medium leading-normal mb-7'>Job Overview</h4>
                        <div className='grid grid-cols-2 sm:grid-cols-3 space-y-5'>
                            <div className='flex flex-col items-center'>
                                <TbCalendarMonthFilled className='text-[#038317] size-10 p-2 rounded-full bg-radial-[at_25%_25%] bg-linear-to-r from-[#EFFFF2] to-[#A4E8AE] to-75% mb-2' />
                                <p className='text-[#636363] text-[12px] font-medium leading-normal mb-0.5'>Job Posted</p>
                                <p className='text-[#121212] text-[12px] font-medium leading-normal'>{new Date(singleJob.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <TfiAlarmClock className='text-[#038317] size-10 p-2  rounded-full bg-radial-[at_25%_25%] bg-linear-to-r from-[#EFFFF2] to-[#A4E8AE] to-75% mb-2' />
                                <p className='text-[#636363] text-[12px] font-medium leading-normal mb-0.5'>Job Expire</p>
                                <p className='text-[#121212] text-[12px] font-medium leading-normal'>{new Date(singleJob.deadline).toLocaleDateString()}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <MdOutlineContentPasteSearch className='text-[#038317] size-10 p-2  rounded-full bg-radial-[at_25%_25%] bg-linear-to-r from-[#EFFFF2] to-[#A4E8AE] to-75% mb-2' />
                                <p className='text-[#636363] text-[12px] font-medium leading-normal mb-0.5'>Job Type</p>
                                <p className='text-[#121212] text-[12px] font-medium leading-normal'>{singleJob.jobType?.replace('_', " ")}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <LuUserRound className='text-[#038317] size-10 p-2  rounded-full bg-radial-[at_25%_25%] bg-linear-to-r from-[#EFFFF2] to-[#A4E8AE] to-75% mb-2' />
                                <p className='text-[#636363] text-[12px] font-medium leading-normal mb-0.5'>Job Role</p>
                                <p className='text-[#121212] text-[12px] font-medium leading-normal'>{singleJob.title}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                
                                <PiStudent className='text-[#038317] size-10 p-2  rounded-full bg-radial-[at_25%_25%] bg-linear-to-r from-[#EFFFF2] to-[#A4E8AE] to-75% mb-2' />
                                <p className='text-[#636363] text-[12px] font-medium leading-normal mb-0.5'>Education</p>
                                <p className='text-[#121212] text-[12px] font-medium leading-normal'>Bachelor Degree</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <TiDocumentText className='text-[#038317] size-10 p-2  rounded-full bg-radial-[at_25%_25%] bg-linear-to-r from-[#EFFFF2] to-[#A4E8AE] to-75% mb-2' />
                                <p className='text-[#636363] text-[12px] font-medium leading-normal mb-0.5'>Experience</p>
                                <p className='text-[#121212] text-[12px] font-medium leading-normal'>{singleJob.jobLevel?.replace("_", " ")}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <TbUsersGroup className='text-[#038317] size-10 p-2  rounded-full bg-radial-[at_25%_25%] bg-linear-to-r from-[#EFFFF2] to-[#A4E8AE] to-75% mb-2' />
                                <p className='text-[#636363] text-[12px] font-medium leading-normal mb-0.5'>Total Vacancies</p>
                                <p className='text-[#121212] text-[12px] font-medium leading-normal'>{singleJob.numberOfHiring}</p>
                            </div>
                            
                        </div>
                    </div>

                    {/* second div */}
                    <div className='bg-[#fafffb] p-8 md:w-[488px] mx-auto rounded-3xl border border-[#E1F3E4] mt-8'>
                        <h4 className='text-[#121212] text-[20px] font-medium leading-normal mb-7'>Job Overview</h4>
                        <div className="text-[#038317] text-[16px] font-medium leading-normal ">
                            <div className='flex flex-wrap gap-2 items-center mb-3.5'>
                                <p className='bg-[#d9ffdf] px-2.5 py-0.5 rounded-md'>UI</p>
                                <p className='bg-[#d9ffdf] px-2.5 py-0.5 rounded-md'>laravel</p>
                                <p className='bg-[#d9ffdf] px-2.5 py-0.5 rounded-md'>UX</p>
                                <p className='bg-[#d9ffdf] px-2.5 py-0.5 rounded-md'>Developer</p>
                            </div>
                            <div className='flex flex-wrap gap-2 items-center'>
                                <p className='bg-[#d9ffdf] px-2.5 py-0.5 rounded-md'>Frontend</p>
                                <p className='bg-[#d9ffdf] px-2.5 py-0.5 rounded-md'>laravel</p>
                                <p className='bg-[#d9ffdf] px-2.5 py-0.5 rounded-md'>laravel</p>
                                <p className='bg-[#d9ffdf] px-2.5 py-0.5 rounded-md'>laravel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



