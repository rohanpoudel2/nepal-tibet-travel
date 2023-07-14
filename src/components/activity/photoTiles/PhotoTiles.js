import Image from "next/image";
import styles from "./phototiles.module.scss";

const PhotoTiles = () => {
  return (
    <div className={styles.phototiles}>
      <div className={styles.phototile}>
        <Image
          src="https://images.pexels.com/photos/1449601/pexels-photo-1449601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="EBC"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div className={styles.phototile}>
        <Image
          src="https://images.pexels.com/photos/3027138/pexels-photo-3027138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="EBC"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div className={styles.phototile}>
        <Image
          src="https://images.pexels.com/photos/3820222/pexels-photo-3820222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="EBC"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div className={styles.phototile}>
        <Image
          src="https://images.pexels.com/photos/2856273/pexels-photo-2856273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="EBC"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div className={styles.phototile}>
        <Image
          src="https://images.pexels.com/photos/9206628/pexels-photo-9206628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="EBC"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default PhotoTiles