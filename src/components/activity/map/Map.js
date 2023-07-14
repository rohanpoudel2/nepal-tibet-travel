import Image from "next/image";
import styles from "./map.module.scss";

const Map = ({ activityName }) => {
  return (
    <div className="container">
      <div className={styles.map}>
        <h2 className={styles.routeMap}>
          {activityName} Route Map
        </h2>
        <Image
          src="/images/ebc_map.svg"
          alt="Route Map"
          width={600}
          height={600}
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default Map