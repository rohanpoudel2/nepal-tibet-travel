"use client"
import Image from "next/image";
import styles from "./hero.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css"
import "swiper/css/navigation";
import Link from "next/link";

const Hero = () => {
  return (
    <Swiper
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      modules={[Navigation, Autoplay]}
      className={styles.swiper}
    >
      <SwiperSlide>
        <div className={styles.hero}>
          <Image
            src="/images/hero.jpeg"
            width={1920}
            height={1080}
            alt="Hero Image"
            className={styles.image}
          />
          <div className={styles.details}>
            <h1 className={styles.countryName}>
              Nepal
            </h1>
            <h3 className={styles.tagline}>
              8th wonder of the world
            </h3>
            <Link href="/country/nepal">
              <button className={styles.exploreBtn}>
                Explore
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.hero}>
          <Image
            src="/images/hero.jpeg"
            width={1920}
            height={1080}
            alt="Hero Image"
            className={styles.image}
          />
          <div className={styles.details}>
            <h1 className={styles.countryName}>
              Tibet
            </h1>
            <h3 className={styles.tagline}>
              8th wonder of the world
            </h3>
            <button className={styles.exploreBtn}>
              Explore
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.hero}>
          <Image
            src="/images/hero.jpeg"
            width={1920}
            height={1080}
            alt="Hero Image"
            className={styles.image}
          />
          <div className={styles.details}>
            <h1 className={styles.countryName}>
              Bhutan
            </h1>
            <h3 className={styles.tagline}>
              8th wonder of the world
            </h3>
            <button className={styles.exploreBtn}>
              Explore
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.hero}>
          <Image
            src="/images/hero.jpeg"
            width={1920}
            height={1080}
            alt="Hero Image"
            className={styles.image}
          />
          <div className={styles.details}>
            <h1 className={styles.countryName}>
              Nepal
            </h1>
            <h3 className={styles.tagline}>
              8th wonder of the world
            </h3>
            <button className={styles.exploreBtn}>
              Explore
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Hero
