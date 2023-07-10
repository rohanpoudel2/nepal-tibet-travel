import styles from "./newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className="container">
      <section className={styles.newsletter}>
        <span className={styles.title}>
          Subscribe to our newsletter
        </span>
        <form className={styles.form}>
          <input type="email" name="email" id="email" placeholder="Enter your email" className={styles.input} />
          <button className={styles.button}>
            Subscribe
          </button>
        </form>
      </section>
    </div>
  )
}

export default Newsletter