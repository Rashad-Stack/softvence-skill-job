import React from 'react'
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { TbCalendarMonthFilled } from "react-icons/tb"; 

export default function JobRequerment({id}) {
    return (
        <section className='mt-5 container mx-auto md:relative'>
            {/* appy part */}
            <div className='bg-[#fafffb] p-8 max-w-[488px] mx-auto rounded-3xl md:absolute right-0 -top-40 border border-[#E1F3E4]'>
                <p className='text-[#484848] text-base font-normal leading-[132%] tracking[-0.32px] mb-6'>Ready to apply? We can't wait to meet you!</p>
                {/* Button */}
                {/* to do: button modify */}
                <button className="text-sm sm:text-base bg-[#038317] text-white px-4 py-2 rounded-lg hover:bg-[#40854a] transition font-pop font-semibold w-full">
                    <Link href={`/job/${id}/form`} aria-label="Apply Job">
                        Apply Now
                    </Link>
                </button>
                {/* <Link className="text-sm sm:text-base bg-[#038317] text-white px-4 py-2 rounded-lg hover:bg-[#40854a] transition font-pop font-semibold w-full" href="" aria-label="Apply Job">
                                Apply Now
                            </Link> */}
                <p className='text-[#636363] text-center text-base font-normal leading-[132%] tracking[-0.32px] mt-8 mb-6'>Next, you'll face an assessment to proceed. Apply for one job at a time and prepare well.</p>
                <p className='text-[#484848] text-center text-[12px] font-normal leading-[132%] tracking[-0.24px]'>* By applying for this job listing, you agree to our Data</p>
            </div>
            <div className='md:flex justify-between items-center gap-36'>
                <div className='w-3/5'>
                    <Markdown remarkPlugins={[remarkGfm]}>{jobDescription}</Markdown>
                </div>
                <div className='w-2/5 flex-1 '>
                    {/* first div */}
                    <div className='bg-[#fafffb] p-8 max-w-[488px] rounded-3xl border border-[#E1F3E4]'>
                        <h4 className='text-[#121212] text-[20px] font-medium leading-normal'>Job Overview</h4>
                        <div className='grid grid-cols-3'>
                            <div>
                                <TbCalendarMonthFilled />
                                <p>Job Posted</p>
                                <p>2 Hours ago</p>
                            </div>
                            <div>
                                <TbCalendarMonthFilled />
                                <p>Job Posted</p>
                                <p>2 Hours ago</p>
                            </div>
                            <div>
                                <TbCalendarMonthFilled />
                                <p>Job Posted</p>
                                <p>2 Hours ago</p>
                            </div>
                            <div>
                                <TbCalendarMonthFilled />
                                <p>Job Posted</p>
                                <p>2 Hours ago</p>
                            </div>
                            <div>
                                <TbCalendarMonthFilled />
                                <p>Job Posted</p>
                                <p>2 Hours ago</p>
                            </div>
                            <div>
                                <TbCalendarMonthFilled />
                                <p>Job Posted</p>
                                <p>2 Hours ago</p>
                            </div>
                            <div>
                                <TbCalendarMonthFilled />
                                <p>Job Posted</p>
                                <p>2 Hours ago</p>
                            </div>
                        </div>
                    </div>
                    {/* second div */}
                    <div></div>
                </div>
            </div>
        </section>
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
