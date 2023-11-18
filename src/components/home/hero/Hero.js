"use client"
import Image from "next/image";
import styles from "./hero.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation";
import Link from "next/link";

const Hero = ({ data }) => {
  return (
    <Swiper
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      modules={[Navigation, Autoplay]}
      className={styles.swiper}
      style={{
        "--swiper-navigation-color": "#fff",
      }}
    >
      {
        data?.map((hero) => (
          <SwiperSlide key={hero?.hero_image.id}>
            <div className={styles.hero}>
              <Image
                src={hero?.hero_image.url}
                width={1920}
                height={1080}
                alt={hero?.hero_image.alt}
                className={styles.image}
                loading="eager"
              />
              <div className={styles.details}>
                <h1 className={styles.countryName}>
                  {hero?.hero_title}
                </h1>
                <h3 className={styles.tagline}>
                  {hero?.hero_subtitle}
                </h3>
                <Link href={hero?.hero_button?.button_link?.url}>
                  <button className={styles.exploreBtn}>
                    {hero?.hero_button?.button_text}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Hero
