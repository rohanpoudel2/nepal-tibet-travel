import styles from "./populardestination.module.scss";
import PopularDestination from "../popularDestination/PopularDestination";
import Title from "@/components/ui/title/Title";

const PopularDestinations = () => {
  return (
    <div className="container">
      <section className={`${styles.popular}`}>
        <Title
          title="Popular destinations"
          subtitle="Where to Go"
        />
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