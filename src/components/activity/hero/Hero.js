import Image from "next/image";
import styles from "./hero.module.scss";
import Details from "./details/Details";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/images/ebc_large.jpeg"
        alt="EBC"
        width={1920}
        height={1080}
        className={styles.image}
      />
      <Details />
    </div>
  )
}

export default Hero