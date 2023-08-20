import styles from "./title.module.scss";
import Divider from "../divider/Divider";

const Title = ({ title, subtitle }) => {
  return (
    <div className={styles.titles}>
      <h3 className={styles.subtitle}>
        {subtitle}
      </h3>
      <h2 className={styles.title}>
        {title}
      </h2>
      <Divider />
    </div>
  )
}

export default Title