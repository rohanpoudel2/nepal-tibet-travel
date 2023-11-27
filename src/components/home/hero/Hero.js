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
        data?.map((hero, i) => (
          <SwiperSlide key={i}>
            <div className={styles.hero}>
              <Image
                src={hero?.hero_image}
                width={1920}
                height={1080}
                alt={hero?.hero_title}
                className={styles.image}
                loading="eager"
              />
              <div className="absolute text-white text-center space-y-3">
                <h1 className="text-6xl md:text-8xl">
                  {hero?.hero_title}
                </h1>
                <h3 className="text-xl md:text-3xl">
                  {hero?.hero_subtitle}
                </h3>
                <div>
                  <Link href={hero?.hero_button?.button_link?.url}>
                    <button className="px-5 py-2 md:py-3 bg-white text-gray-800 text-base md:text-xl rounded-full font-semibold hover:bg-primary-mac transition-all hover:text-white">
                      {hero?.hero_button?.button_text}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Hero
