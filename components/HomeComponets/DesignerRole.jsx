"use client";

import "swiper/css";
import "swiper/css/navigation";
import React from 'react'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useRef } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import JobCard from "../JobCard";

export default function DesignerRole({ designerJobs, developer }) {

  const swiperRef = useRef(null);
  if (designerJobs.length === 0) {
    return (
      <div className="text-center py-10">
        No Designer roles available right now!
      </div>
    );
  }

  return (
    <div className="lg:mt-10 mt-4">
      <div className="flex justify-between items-center mb-4">
        {
          developer ? <h2 className="lg:text-[32px] text-[22px] font-pop font-semibold lg:mb-4">
            Developer Roles
          </h2> : <h2 className="lg:text-[32px] text-[22px] font-pop font-semibold lg:mb-4">
            Designer Roles
          </h2>
        }
        {
          designerJobs.length >= 4 && <div className="flex items-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="lg:w-12 lg:h-12 w-9 h-9 flex items-center justify-center rounded-full border border-[#3C8303] text-[#3C8303] hover:bg-[#3C8303] hover:text-white transition duration-500 cursor-pointer ease-in-out">
              <FiArrowLeft size={24} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="lg:w-12 lg:h-12 w-9 h-9 flex items-center justify-center rounded-full border border-[#3C8303] text-[#3C8303] hover:bg-[#3C8303] hover:text-white transition cursor-pointer duration-500 ease-in-out">
              <FiArrowRight size={24} />
            </button>
          </div>
        }
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="lg:py-10">

        {
          designerJobs.filter((developerJob) => developerJob.category.name.toLowerCase().includes('developer') || developerJob.category.name.toLowerCase().includes('development') || developerJob.category.name.toLowerCase().includes('dev')).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((job) => {
            if (developer) {
              return <SwiperSlide key={job.id} className="lg:py-4 pt-5 lg:pb-5 pb-5">
                <JobCard job={job} />
              </SwiperSlide>
            }
          })
        }
        {
          designerJobs.filter((developerJob) => developerJob.category.name.toLowerCase().includes('designer') || developerJob.category.name.toLowerCase().includes('design')).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((job) => {
            if (!developer) {
              return <SwiperSlide key={job.id} className="lg:py-4 pt-5 lg:pb-5 pb-5">
                <JobCard job={job} />
              </SwiperSlide>
            }
          })
        }
        

      </Swiper>
    </div>
  );
}
