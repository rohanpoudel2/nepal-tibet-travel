import styles from "./testimonialcard.module.scss";

const TestimonialCard = () => {
  return (
    <div className={styles.card}>
      <p>
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis exercitationem quo vero alias atque quam optio deserunt aspernatur minus veritatis ab hic eum maiores totam, voluptates aut, quae cupiditate!"
      </p>
      <div className={styles.details}>
        <div className={styles.by}>
          Narayan Poudel
        </div>
        <div className={styles.time}>
          Jul 13, 2023
        </div>
        <div className={styles.from}>
          Nepal
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard