import styles from "./homefilter.module.scss";

const HomeFilter = () => {
  return (
    <div className={styles.homefilter}>
      <form className={styles.items}>
        <div className={styles.item}>
          <i className="fa-solid fa-location-arrow"></i>
          <div className={styles.input}>
            <label className={styles.label}>Location</label>
            <select className={styles.select} name="location" id="location" required>
              <option value="Nepal">Nepal</option>
              <option value="Tibet">Tibet</option>
              <option value="Bhutan">Bhutan</option>
            </select>
          </div>
        </div>
        <div className={styles.item}>
          <i className="fa-solid fa-campground"></i>
          <div className={styles.input}>
            <label className={styles.label}>Activities</label>
            <select className={styles.select} name="location" id="location" required>
              <option value="Nepal">Nepal</option>
              <option value="Tibet">Tibet</option>
              <option value="Bhutan">Bhutan</option>
            </select>
          </div>
        </div>
        <div className={styles.item}>
          <i className="fa-solid fa-compass"></i>
          <div className={styles.input}>
            <label className={styles.label}>Trip Area</label>
            <select className={styles.select} name="location" id="location" required>
              <option value="Nepal">Nepal</option>
              <option value="Tibet">Tibet</option>
              <option value="Bhutan">Bhutan</option>
            </select>
          </div>
        </div>
        <button className={styles.button}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  )
}

export default HomeFilter