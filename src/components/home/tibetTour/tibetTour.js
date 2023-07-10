import TableElement from "../table/Table";
import styles from "./tibettour.module.scss";

const TibetTour = () => {
  return (
    <div className="container">
      <section className={styles.tibettour}>
        <div className={styles.titles}>
          <h3 className={styles.subtitle}>
            Travel with group
          </h3>
          <h2 className={styles.title}>
            Tibet group tour 2023
          </h2>
        </div>
        <TableElement />
      </section>
    </div>
  )
}

export default TibetTour