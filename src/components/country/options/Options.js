import Link from "next/link";
import styles from "./options.module.scss";

const Options = () => {
  return (
    <div className={styles.options}>
      <Link href="#about" className={styles.option}>
        About Nepal
      </Link>
      <Link href="#access" className={styles.option}>
        Access to Nepal
      </Link>
      <Link href="#entry" className={styles.option}>
        Entry Procedures (Immigration Formalities)
      </Link>
    </div>
  )
}

export default Options