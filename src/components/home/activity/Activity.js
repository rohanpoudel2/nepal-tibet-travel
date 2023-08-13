import Image from "next/image";
import styles from "./activity.module.scss";

const Activity = ({ colour, image, areas }) => {
  if (colour) {
    return (
      <div className={styles.activity} style={{ backgroundColor: colour, width: "279px", height: "180px" }}>
        <Image
          src="/images/Trekking.png"
          alt="Trekking Icon"
          fill
          className={styles.image}
        />
        <h4 className={styles.activityTitle}>
          Trekking
        </h4>
      </div>
    )
  } else {
    return (
      <div className={`${styles.activity} ${styles.activityImage}`} style={{ width: areas ? "244px" : "359px", height: areas ? "200px" : "200px" }}>
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