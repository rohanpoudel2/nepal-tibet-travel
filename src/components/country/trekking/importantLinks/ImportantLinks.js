import Image from "next/image";
import styles from "./importantlinks.module.scss";
import Link from "next/link";

const TrekkingTips = ({ image, text, link = '#' }) => {
  return (
    <Link href={link}>
      <div className={styles.trekkingTips}>
        <Image
          src={image}
          alt="Trekking Tips"
          fill
          className={styles.image}
        />
        <h2 className={styles.title}>
          {text}
        </h2>
      </div>
    </Link>
  )
}

export default TrekkingTips