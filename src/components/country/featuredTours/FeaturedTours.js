"use client"
import FeaturedTour from "../featuredTour/FeaturedTour";
import styles from "./featuredTours.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FeaturedTours = () => {
  return (
    <div className="container">
      <section className={styles.featuredTours}>
        <div className={styles.titles}>
          <h3 className={styles.subtitle}>
            Explore Nepal
          </h3>
          <h2 className={styles.title}>
            Popular treks
          </h2>
        </div>
        <div className={styles.destinations}>
          <Swiper
            pagination={{
              type: "progressbar"
            }}
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            mousewheel={{
              forceToAxis: true
            }}
            direction="horizontal"
            modules={[Pagination, Navigation, Mousewheel]}
            className={styles.mySwiper}
          >
            <SwiperSlide className={styles.swiperCard}>
              <FeaturedTour />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <FeaturedTour />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <FeaturedTour />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <FeaturedTour />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <FeaturedTour />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <FeaturedTour />
            </SwiperSlide>
          </Swiper>

        </div>
      </section>
    </div>
  )
}

export default FeaturedTours