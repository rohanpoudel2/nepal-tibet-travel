import Image from "next/image"
import styles from "./link.module.scss"

const Link = ({ image, text }) => {
  return (
    <div className={styles.link}>
      <Image
        src={image}
        alt="useful nepal links"
        width={200}
        height={200}
        className={styles.image}
      />
      <span className={styles.text}>
        {text}
      </span>
    </div>
  )
}

export default Link