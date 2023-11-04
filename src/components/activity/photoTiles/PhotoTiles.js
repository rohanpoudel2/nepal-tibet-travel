import Image from "next/image";
import styles from "./phototiles.module.scss";

const PhotoTiles = ({ data }) => {
  return (
    <div className={styles.phototiles}>
      {
        data?.map((image) => (
          <div className={styles.phototile}>
            <Image
              src={image.sizes.medium.url}
              alt={image.alt}
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
        ))
      }
    </div>
  )
}

export default PhotoTiles