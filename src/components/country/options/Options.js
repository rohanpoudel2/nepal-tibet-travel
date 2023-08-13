import Link from "next/link";
import styles from "./options.module.scss";

const Options = () => {
  return (
    <div className={styles.options}>
      <Link href="#access" className={styles.option}>
        Access to Nepal
      </Link>
      <Link href="#entry" className={styles.option}>
        Visa for Nepal
      </Link>
      <Link href="#entry" className={styles.option}>
        Transportation
      </Link>
      <Link href="#entry" className={styles.option}>
        Accommodation
      </Link>
      <Link href="#entry" className={styles.option}>
        Food
      </Link>
      <Link href="#entry" className={styles.option}>
        Clothing
      </Link>
      <Link href="#entry" className={styles.option}>
        Trekking Permits
      </Link>
    </div>
  )
}

export default Options