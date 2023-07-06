import styles from "./homefilter.module.scss";

const HomeFilter = () => {
  return (
    <div className={styles.homefilter}>
      <form className={styles.items}>
        <div className={styles.item}>
          <i className="fa-solid fa-location-arrow"></i>
          <div className={styles.input}>
            <label>Location</label>
            <select name="location" id="location" required>
              <option value="Nepal">Nepal</option>
              <option value="Tibet">Tibet</option>
              <option value="Bhutan">Bhutan</option>
            </select>
          </div>
        </div>
        <div className={styles.item}>
          <i className="fa-solid fa-campground"></i>
          <div className={styles.input}>
            <label>Activities</label>
            <select name="location" id="location" required>
              <option value="Nepal">Nepal</option>
              <option value="Tibet">Tibet</option>
              <option value="Bhutan">Bhutan</option>
            </select>
          </div>
        </div>
        <div className={styles.item}>
          <i className="fa-solid fa-compass"></i>
          <div className={styles.input}>
            <label>Trip Area</label>
            <select name="location" id="location" required>
              <option value="Nepal">Nepal</option>
              <option value="Tibet">Tibet</option>
              <option value="Bhutan">Bhutan</option>
            </select>
          </div>
        </div>
        <div className={styles.item}>
          <i className="fa-solid fa-compass"></i>
          <div className={styles.input}>
            <label>Days</label>
            <select name="location" id="location" required>
              <option value="Nepal">Nepal</option>
              <option value="Tibet">Tibet</option>
              <option value="Bhutan">Bhutan</option>
            </select>
          </div>
        </div>
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  )
}

export default HomeFilter