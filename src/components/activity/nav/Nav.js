import Link from "next/link";
import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className="container">
        <div className={styles.navLinks}>
          <Link href="#overview" className={styles.navLink}>
            Overview
          </Link>
          <Link href="#itinerary" className={styles.navLink}>
            Itinerary
          </Link>
          <Link href="#booking" className={styles.navLink}>
            Booking
          </Link>
          <Link href="#routemap" className={styles.navLink}>
            Route Map
          </Link>
          <Link href="#faq" className={styles.navLink}>
            FAQ
          </Link>
          <Link href="#reviews" className={styles.navLink}>
            Reviews
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav