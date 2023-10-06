import Image from 'next/image'
import styles from "./hero.module.scss"

const Hero = ({ title, image }) => {
  return (
    <div className={styles.hero}>
      <Image
        src="https://images.pexels.com/photos/12798654/pexels-photo-12798654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt='Region'
        fill
        className={styles.image}
      />
      <h1 className={styles.title}>
        {title}
      </h1>
    </div>
  )
}

export default Hero