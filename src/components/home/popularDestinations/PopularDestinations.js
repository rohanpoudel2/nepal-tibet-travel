import styles from "./populardestination.module.scss";
import PopularDestination from "../popularDestination/PopularDestination";
import Divider from "@/components/ui/divider/Divider";

const PopularDestinations = () => {
  return (
    <div className="container">
      <section className={`${styles.popular}`}>
        <div className={styles.titles}>
          <h3 className={styles.subtitle}>
            Where to Go
          </h3>
          <h2 className={styles.title}>
            Popular destinations
          </h2>
          <Divider />
        </div>
        <div className={styles.destinations}>
          <div className={styles.destination}>
            <PopularDestination />
          </div>
          <div className={styles.destination}>
            <PopularDestination />
          </div>
          <div className={styles.destination}>
            <PopularDestination />
          </div>
        </div>
      </section >
    </div >
  )
}

export default PopularDestinations