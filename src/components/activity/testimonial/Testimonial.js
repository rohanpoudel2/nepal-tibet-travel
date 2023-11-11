"use client"
import styles from "./testimonial.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from "../testimonialCard/TestimonialCard";
import React, { useRef, useCallback } from 'react';

const Testimonial = ({ data }) => {
  const swiperRef = useRef();
  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Don't just take our word for it...
              </h2>

              <p className="mt-4 text-gray-700">
                Here's what our fearless adventurers have to say about their incredible journey with MacTrek
              </p>

              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  aria-label="Previous slide"
                  onClick={handlePrev}
                  className="rounded-full border border-sky-600 p-3 text-[#47A5CF] transition hover:bg-sky-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button
                  aria-label="Next slide"
                  onClick={handleNext}
                  className="rounded-full border border-sky-600 p-3 text-[#47A5CF] transition hover:bg-sky-600 hover:text-white"
                >
                  <svg
                    className="h-5 w-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              <div
                className="keen-slider keen-slider__slide"
              >
                <Swiper
                  ref={swiperRef}
                  slidesPerView={1}
                  spaceBetween={30}
                  modules={[Navigation, Pagination]}
                  breakpoints={{
                    768: {
                      slidesPerView: 2
                    }
                  }}
                  className={styles.mySwiper}
                >
                  {
                    data.map((d, i) => (
                      <SwiperSlide key={i}>
                        <TestimonialCard data={d} />
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous slide"
              onClick={handlePrev}
              className="rounded-full border border-sky-600 p-3 text-[#47A5CF] transition hover:bg-sky-600 hover:text-white"
            >
              <svg
                className="h-5 w-5 -rotate-180 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              onClick={handleNext}
              className="rounded-full border border-sky-600 p-3 text-[#47A5CF] transition hover:bg-sky-600 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial