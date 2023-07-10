import LatestUpdateCard from "../latestUpdateCard/LatestUpdateCard";
import styles from "./latestupdate.module.scss";

const LatestUpdates = () => {
  return (
    <div className="container">
      <section className={styles.latestUpdate}>
        <h4 className={styles.title}>
          Latest updates
        </h4>
        <div className={styles.updates}>
          <div className={styles.update}>
            <LatestUpdateCard />
          </div>
          <div className={styles.update}>
            <LatestUpdateCard />
          </div>
          <div className={styles.update}>
            <LatestUpdateCard />
          </div>
        </div>
      </section>
    </div>
  )
}

export default LatestUpdates