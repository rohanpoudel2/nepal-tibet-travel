"use client"
import styles from "./testimonial.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from "../testimonialCard/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="container">
      <div className={styles.testimonial}>
        <h2 className={styles.title}>
          Testimonials
        </h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiperCard}>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperCard}>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperCard}>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperCard}>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperCard}>
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial