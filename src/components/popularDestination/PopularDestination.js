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

export default PopularDestination