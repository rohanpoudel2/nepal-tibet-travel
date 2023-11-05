import Image from "next/image";
import styles from "./hero.module.scss";

const Hero = ({ activity, country, media }) => {
  return (
    <div className={styles.hero}>
      <Image
        src={media}
        alt={activity + ' in ' + country}
        width={1920}
        height={1080}
        className={styles.image}
      />
      <h1 className={styles.title}>
        {activity} in {country}
      </h1>
    </div>
  )
}

export default Hero