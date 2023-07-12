import Link from "../link/Link";
import styles from "./usefull.module.scss";

const UseFull = () => {
  return (
    <div className="container">
      <section className={styles.module}>
        <div className={styles.left}>
          <h4 className={styles.title}>
            Useful Links 🇳🇵
          </h4>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <Link image={"/images/helicopter.jpg"} text={"Helicopter Tour - Everest View"} />
            <Link image={"/images/pilgrimage.jpg"} text={"Nepal Pilgrimage Tours"} />
            <Link image={"/images/flights.jpg"} text={"Nepal Cheap Flights"} />
            <Link image={"/images/nepalsafe.jpg"} text={"Is Nepal Safe ?"} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default UseFull