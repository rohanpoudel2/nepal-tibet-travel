import Image from "next/image";
import styles from "./details.module.scss";
import ShareBtn from "../shareBtn/ShareBtn";

const DetailsCard = () => {
  return (
    <div className={styles.details}>
      <div className={styles.author}>
        <div className={styles.authorProfile}>
          <Image
            src="https://images.pexels.com/photos/15277728/pexels-photo-15277728/free-photo-of-elderly-man-near-the-buddha-stupa-kathmandu-nepal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile Picture"
            width={100}
            height={100}
            className={styles.image}
          />
          <div className={styles.authorDetails}>
            <span className={styles.authorName}>
              Narayan Poudel
            </span>
          </div>
        </div>
        <ShareBtn />
      </div>
      <h1 className={`text-xl md:text-3xl`}>
        An Epic Journey Through the Annapurna Circuit
      </h1>
      <h3 className={styles.category}>
        Trekking
      </h3>
      <span className={`text-xs text-gray-600 tracking-wider`}>
        Published on: 20 Jan, 2023
      </span>
    </div>
  )
}

export default DetailsCard