import Image from "next/image";
import styles from "./recommendation.module.scss";

const Recommendation = () => {
  return (
    <div className="container">
      <div className={styles.recommendation}>
        <h3 className={styles.title}>
          Also Explore
        </h3>
        <div className={styles.trip}>
          <Image
            src="https://images.pexels.com/photos/6808521/pexels-photo-6808521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Recommended Trip"
            width={800}
            height={300}
            className={styles.image}
          />
          <div className={styles.desc}>
            <div className={styles.title}>
              Annapurna Base Camp Trek
            </div>
            <button className={styles.btn}>
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendation