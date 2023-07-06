import Image from "next/image";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/images/hero.jpeg"
        width={1920}
        height={1080}
        alt="Hero Image"
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
  )
}

export default Hero