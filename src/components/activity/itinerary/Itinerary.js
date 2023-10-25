import Link from "next/link";
import styles from "./itinerary.module.scss";

const Itinerary = ({ data }) => {
  return (
    <div className={styles.itinerary}>
      <h2 className={styles.title}>
        Day by day itinerary
        <Link href="#detailed_itinerary">
          [Click here for detailed itinerary]
        </Link>
      </h2>
      <div className={styles.days}>
        {
          data.itinerary.map((itinerary, i) => (
            <div className={styles.day}>
              <span>
                <span className={styles.dayno}>Day 0{i + 1} - </span>
                {itinerary.day}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Itinerary