import styles from "./featuredtour.module.scss";
import Image from "next/image";

const FeaturedTour = () => {
  return (
    <div className={styles.featuredTour}>
      <Image
        src="/images/ebc.jpeg"
        alt="Everest Base Camp"
        width={1080}
        height={1920}
        className={styles.image}
      />
      <div className={styles.details}>
        <span className={styles.countryName}>
          Nepal
        </span>
        <h4 className={styles.tripName}>
          Everest Base Camp Trek
        </h4>
        <button className={styles.price}>
          USD 1350
        </button>
      </div>
    </div>
  )
}

export default FeaturedTour