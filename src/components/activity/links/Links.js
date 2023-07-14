import Link from "next/link";
import styles from "./links.module.scss";

const Links = () => {
  return (
    <div className="container">
      <div className={styles.links}>
        <h3 className={styles.title}>
          Useful Links :
        </h3>
        <div className={styles.useful_links}>
          <Link href="#" className={styles.link}>
            Show Nepal Information
          </Link>
          <Link href="#" className={styles.link}>
            Show Trekking Information
          </Link>
          <Link href="#" className={styles.link}>
            Booking Terms & Condition
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Links