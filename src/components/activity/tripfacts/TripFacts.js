import styles from "./tripfacts.module.scss";

const TripFacts = () => {
  return (
    <div className={styles.tripfacts}>
      <h2 className={styles.title}>
        Trip Facts
      </h2>
      <div className={styles.tFacts}>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Country:
          </span>
          <span className={styles.ans}>
            Nepal
          </span>
        </div>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Duration:
          </span>
          <span className={styles.ans}>
            16 days
          </span>
        </div>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Area:
          </span>
          <span className={styles.ans}>
            Everest Region
          </span>
        </div>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Activities:
          </span>
          <span className={styles.ans}>
            Trekking
          </span>
        </div>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Max. Group Size:
          </span>
          <span className={styles.ans}>
            30 Person
          </span>
        </div>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Min. Group Size:
          </span>
          <span className={styles.ans}>
            2 Person
          </span>
        </div>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Difficulty:
          </span>
          <span className={styles.ans}>
            Strenuous
          </span>
        </div>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Max. Altitude:
          </span>
          <span className={styles.ans}>
            5,545m
          </span>
        </div>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Seasons:
          </span>
          <span className={styles.ans}>
            Sep-Dec, March-June
          </span>
        </div>
      </div>
    </div>
  )
}

export default TripFacts