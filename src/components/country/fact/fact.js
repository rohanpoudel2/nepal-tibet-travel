import styles from "./fact.module.scss";

const Fact = ({ title, answer }) => {
  return (
    <div className={styles.data}>
      <span className={styles.label}>
        {title}
      </span>
      <span className={styles.answer}>
        {answer}
      </span>
    </div>
  )
}

export default Fact