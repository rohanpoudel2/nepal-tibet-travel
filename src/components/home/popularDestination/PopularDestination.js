import Link from "next/link";
import styles from "./populardestination.module.scss";
import Image from "next/image";

const PopularDestination = ({ data }) => {

  return (
    <div className={styles.destination}>
      <Image
        src={data?.image.sizes.large}
        alt="Everest Base Camp"
        width={1080}
        height={1920}
        className={styles.image}
      />
      <div className={styles.details}>
        <span className={styles.countryName}>
          {data?.tour_type}
        </span>
        <h4 className={styles.tripName}>
          {data?.title}
        </h4>
        <Link href={data?.button?.button_link.url}>
          <button className={styles.price}>
            {data?.button?.button_text}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PopularDestination