import Link from "next/link";
import styles from "./itinerary.module.scss";

const Itinerary = () => {
  return (
    <div className={styles.itinerary}>
      <h2 className={styles.title}>
        Day by day itinerary
        <Link href="#detailed_itinerary">
          [Click here for detailed itinerary]
        </Link>
      </h2>
      <div className={styles.days}>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 01 - </span>
            (Arrival Day) Kathmandu
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 02 - </span>
            Sightseeing in Kathmandu
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 03 - </span>
            Fly to Lukla(2827m) and Trek to Phakding(2610m).
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 04 - </span>
            Trekking up to Namche Bazaar(3440m).
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 05 - </span>
            Leisure at Namche Bazaar
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 06 - </span>
            Trek to Tengboche (3867m)
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 07 - </span>
            Trek to Dingboche(4410m)
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 08 - </span>
            Dingboche - Acclimatization Day
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 09 - </span>
            Trek to Lobuche(4930m)
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 10 - </span>
            Trek to Gorak Shep(5200m) and hike uphill to Kalapatthar(5545m.) for sunset view.
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 11 - </span>
            Trek to Everest Base Camp(5364m) and return back to Lobuche.
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 12 - </span>
            Trek to Tengboche
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 13 - </span>
            Trek to Monjo
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 14 - </span>
            Trek to Lukla
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 15 - </span>
            Fly Lukla to Kathmandu
          </span>
        </div>
        <div className={styles.day}>
          <span>
            <span className={styles.dayno}>Day 16 - </span>
            Final departure
          </span>
        </div>
      </div>
    </div>
  )
}

export default Itinerary