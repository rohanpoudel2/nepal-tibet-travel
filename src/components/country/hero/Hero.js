import Image from "next/image";
import styles from "./hero.module.scss";

const Hero = ({ data }) => {
  return (
    <div className={styles.hero}>
      <Image
        src={data?.image.sizes.large}
        alt={data?.image.alt}
        fill
        className={styles.image}
      />
      <h1 className={styles.title}>
        {data.title}
      </h1>
    </div>
  )
}

export default Hero