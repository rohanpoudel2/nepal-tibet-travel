import Image from "next/image";
import styles from "./hero.module.scss";

const Hero = ({ activity, country }) => {
  return (
    <div className={styles.hero}>
      <video autoPlay loop muted poster="/images/nepal_trekking.jpeg" className={styles.video}>
        <source src="/images/nepal_trekking.mp4" type="video/mp4" />
        <Image
          src="/images/nepal_trekking.jpeg"
          alt="Trekking Nepal"
          width={1920}
          height={1080}
          className={styles.image}
        />
      </video>
      <h1 className={styles.title}>
        {activity} in {country}
      </h1>
    </div>
  )
}

export default Hero