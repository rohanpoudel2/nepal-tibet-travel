import Image from "next/image";
import styles from "./details.module.scss";
import ShareBtn from "../shareBtn/ShareBtn";

const DetailsCard = () => {
  return (
    <div className={styles.details}>
      <div className={styles.author}>
        <div className={styles.authorProfile}>
          <Image
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile Picture"
            width={50}
            height={50}
            className={styles.image}
          />
        </div>
        <span className={styles.authorName}>
          Narayan Poudel
        </span>
        -
        <span className={styles.publishedDate}>
          20 Jan 2024
        </span>
        <ShareBtn />
      </div>
      <h1 className={styles.title}>
        An Epic Journey Through the Annapurna Circuit
      </h1>
      <h3 className={styles.category}>
        Trekking
      </h3>
    </div>
  )
}

export default DetailsCard