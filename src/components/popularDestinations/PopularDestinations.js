"use client"
import styles from "./populardestination.module.scss";
import PopularDestination from "../popularDestination/PopularDestination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PopularDestinations = () => {
  return (
    <div className="container">
      <section className={`${styles.popular}`}>
        <div className={styles.titles}>
          <h3 className={styles.subtitle}>
            Where to Go
          </h3>
          <h2 className={styles.title}>
            Popular destinations
          </h2>
        </div>
        <div className={styles.destinations}>
          <Swiper
            pagination={{
              type: 'progressbar',
            }}
            slidesPerView={3}
            spaceBetween={50}
            navigation={true}
            mousewheel={true}
            direction="horizontal"
            modules={[Pagination, Navigation, Mousewheel]}
            className={styles.mySwiper}
          >
            <SwiperSlide className={styles.swiperCard}>
              <PopularDestination />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <PopularDestination />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <PopularDestination />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <PopularDestination />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <PopularDestination />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <PopularDestination />
            </SwiperSlide>
          </Swiper>

        </div>
      </section >
    </div >
  )
}

export default PopularDestinations