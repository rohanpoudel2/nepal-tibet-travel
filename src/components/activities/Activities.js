import styles from "./activities.module.scss";

const Activities = () => {
  return (
    <div className="container">
      <section className={styles.activities}>
        <div className={styles.titles}>
          <h3 className={styles.subtitle}>
            What to do
          </h3>
          <h2 className={styles.title}>
            Nepal activities
          </h2>
        </div>
      </section>
    </div>
  )
}

export default Activities