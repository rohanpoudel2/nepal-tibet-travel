import Image from "next/image";
import styles from "./hero.module.scss";

const Hero = ({ countryName }) => {
  return (
    <div className={styles.hero}>
      <Image
        src="/images/nepal.jpeg"
        alt="nepal"
        fill
        className={styles.image}
      />
      <h1 className={styles.title}>
        Explore <span className={styles.countryName}>{countryName}</span>
      </h1>
    </div>
  )
}

export default Hero