import styles from "./tripfacts.module.scss";

const TripFacts = ({ data }) => {
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
            {data.country.name}
          </span>
        </div>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Duration:
          </span>
          <span className={styles.ans}>
            {data.duration}
          </span>
        </div>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Area:
          </span>
          <span className={styles.ans}>
            {data.area.name}
          </span>
        </div>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Activities:
          </span>
          <span className={styles.ans}>
            {data.activity.name}
          </span>
        </div>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Max. Group Size:
          </span>
          <span className={styles.ans}>
            {data.maxGroup} Person
          </span>
        </div>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Min. Group Size:
          </span>
          <span className={styles.ans}>
            {data.minGroup} Person
          </span>
        </div>
        <div className={styles.tFact}>
          <span className={styles.head}>
            Difficulty:
          </span>
          <span className={styles.ans}>
            {data.difficulty.name}
          </span>
        </div>
        {
          data.additional?.map((fact, i) => (
            <div className={styles.tFact} key={i}>
              <span className={styles.head}>
                {fact.fact_title}
              </span>
              <span className={styles.ans}>
                {fact.fact_data}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TripFacts