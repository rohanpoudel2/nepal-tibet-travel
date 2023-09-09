import Image from "next/image";
import styles from "./hero.module.scss";
import DetailsCard from "../detailsCard/DetailsCard";

const Hero = ({ image, detailCard }) => {
  return (
    <div className={styles.hero}>
      <Image
        src={image?.sizes.large}
        alt={image?.alt}
        fill
        className={styles.image}
      />
      <DetailsCard data={detailCard} />
    </div>
  )
}

export default Hero