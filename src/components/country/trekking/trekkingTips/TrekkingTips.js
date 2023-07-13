import Image from "next/image";
import styles from "./trekkingtips.module.scss";

const TrekkingTips = () => {
  return (
    <div className={styles.trekkingTips}>
      <Image
        src="/images/ebc.jpeg"
        alt="Trekking Tips"
        width={600}
        height={100}
        className={styles.image}
      />
      <h2 className={styles.title}>
        Trekking Tips
      </h2>
    </div>
  )
}

export default TrekkingTips