import styles from "./populardestination.module.scss";
import Image from "next/image";

const PopularDestination = () => {

  return (
    <div className={styles.destination}>
      <Image
        src="/images/ebc.jpeg"
        alt="Everest Base Camp"
        width={1080}
        height={1920}
        className={styles.image}
      />
      <div className={styles.details}>
        <span className={styles.countryName}>
          Cross Country Tour
        </span>
        <h4 className={styles.tripName}>
          Nepal and Tibet
        </h4>
        <button className={styles.price}>
          View Details
        </button>
      </div>
    </div>
  )
}

export default PopularDestination