import Image from "next/image";
import styles from "./latestupdatecard.module.scss";

const LatestUpdateCard = () => {
  return (
    <div className={styles.latestUpdateCard}>
      <Image
        src="/images/update.jpg"
        alt="Blog Update"
        width={800}
        height={600}
        className={styles.image}
      />
      <div className={styles.details}>
        <div className={styles.left}>
          <span className={styles.date}>Dec 05, 2023</span>
          <span className={styles.category}>
            <i className="fa-solid fa-circle-dot"></i> Travel
          </span>
        </div>
        <div className={styles.right}>
          <h3 className={styles.title}>
            Nepal Updates Guide Travel Policy
          </h3>
        </div>
      </div>
      <button className={styles.button}>
        <i className="fa-solid fa-location-arrow"></i>
      </button>
    </div>
  )
}

export default LatestUpdateCard