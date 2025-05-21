"use client";

import "swiper/css";
import "swiper/css/navigation";
import React, { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import JobCard from "../JobCard";
import { useDeviceType } from "@/hooks/useDeviceType";

export default function DesignerRole({ designerJobs, developer }) {
  const swiperRef = useRef(null);
  const { isMobile, isTablet, isDesktop } = useDeviceType(); 
  console.log(isMobile)

  const roleType = developer ? "Developer" : "Designer";

  const filteredJobs = designerJobs
    .filter((job) => {
      const name = job.category?.name?.toLowerCase() || "";
      if (developer) {
        return name.includes("developer") || name.includes("development") || name.includes("dev");
      } else {
        return name.includes("designer") || name.includes("design");
      }
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (filteredJobs.length === 0) {
    return (
      <section className="text-center py-10" role="region" aria-label={`${roleType} roles`}>
        <p>No {roleType} roles available right now!</p>
      </section>
    );
  }

  return (
    <section className="lg:mt-10 mt-4" role="region" aria-label={`${roleType} job carousel`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="lg:text-[32px] text-[22px] font-pop font-semibold lg:mb-4">
          {roleType} Roles
        </h2>

        { ((isMobile && filteredJobs.length > 1) || (isTablet && filteredJobs.length > 2) || (isDesktop && filteredJobs.length > 4)) && (
          <div className="flex items-center gap-4" aria-label="Carousel navigation controls">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="lg:w-12 lg:h-12 w-9 h-9 flex items-center justify-center rounded-full border border-[#3C8303] text-[#3C8303] hover:bg-[#3C8303] hover:text-white transition duration-500 cursor-pointer"
              aria-label="Previous slide"
            >
              <FiArrowLeft size={24} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="lg:w-12 lg:h-12 w-9 h-9 flex items-center justify-center rounded-full border border-[#3C8303] text-[#3C8303] hover:bg-[#3C8303] hover:text-white transition duration-500 cursor-pointer"
              aria-label="Next slide"
            >
              <FiArrowRight size={24} />
            </button>
          </div>
        )}
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
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
        className="lg:py-10"
      >
        {filteredJobs.map((job) => (
          <SwiperSlide key={job.id} className="lg:py-4 pt-5 lg:pb-5 pb-5">
            <JobCard job={job} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
