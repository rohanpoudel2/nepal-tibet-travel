"use client"
import Activity from "../activity/Activity";
import styles from "./activities.module.scss";
import { ColourPallet } from "@/utils/colourPallet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Grid } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Activities = () => {

  return (
    <div className="container">
      <section className={styles.activities}>
        <div className={styles.titles}>
          <h3 className={styles.subtitle}>
            What to do
          </h3>
          <h2 className={styles.title}>
            Nepal activities
          </h2>
        </div>
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
            fill: "row"
          }}
          navigation={true}
          spaceBetween={50}
          pagination={{
            type: "progressbar"
          }}
          mousewheel={{
            forceToAxis: true
          }}
          modules={[Grid, Pagination, Navigation, Mousewheel]}
          className={styles.swiper}
        >
          <div className={styles.items}>
            {
              ColourPallet(10).map((colour, index) => (
                <SwiperSlide className={styles.swiperSlide} key={index}>
                  <Activity colour={colour} />
                </SwiperSlide>
              ))
            }
          </div>
        </Swiper>
      </section >

    </div>
  )
}

export default Activities
