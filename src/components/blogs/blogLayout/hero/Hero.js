import Image from "next/image";
import styles from "./hero.module.scss";
import DetailsCard from "../detailsCard/DetailsCard";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="https://images.pexels.com/photos/9206628/pexels-photo-9206628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="HeroImage"
        width={1920}
        height={1080}
        className={styles.image}
      />
      <DetailsCard />
    </div>
  )
}

export default Hero