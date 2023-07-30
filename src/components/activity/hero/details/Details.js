import styles from "./details.module.scss"
import ShareButton from "./shareButton/ShareButton"
import Link from "next/link"

const Details = () => {
  return (
    <div className={`${styles.detail} backdrop-blur-sm`}>
      <div className={styles.top}>
        <div className={styles.name_review}>
          <span className={styles.activityName}>
            Trekking
          </span>
          <div className={styles.review}>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        </div>
        <div className={styles.share_options}>
          <ShareButton />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.title}>
          Everest Base Camp Trek
        </div>
        <Link href="#booking">
          <button className={styles.btn}>
            Book Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Details