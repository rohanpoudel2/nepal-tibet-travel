import Image from "next/image";
import styles from "./hero.module.scss";
import Details from "./details/Details";

const Hero = ({ data }) => {
  return (
    <div className={styles.hero}>
      <Image
        src={data.image.source_url}
        alt={data.name}
        width={1920}
        height={1080}
        className={styles.image}
      />
      <div className="container">
        <Details name={data.name} activity={data.activity} />
      </div>
    </div>
  )
}

export default Hero