import Image from "next/image";
import styles from "./activity.module.scss";

const Activity = ({ colour, image }) => {
  if (colour) {
    return (
      <div className={styles.activity} style={{ backgroundColor: colour }}>
        <Image
          src="/images/Trekking.png"
          alt="Trekking Icon"
          width={359}
          height={200}
          className={styles.image}
        />
        <h4 className={styles.activityTitle}>
          Trekking
        </h4>
      </div>
    )
  } else {
    return (
      <div className={`${styles.activity} ${styles.activityImage}`}>
        <Image
          src={image}
          alt="Trekking Image"
          fill
          className={styles.image}
        />
        <h4 className={styles.activityTitle}>
          Everest Base Camp Trekking
        </h4>
      </div>
    )
  }
}

export default Activity