import Divider from "@/components/ui/divider/Divider";
import Activity from "../activity/Activity";
import styles from "./activities.module.scss";
import { ColourPallet } from "@/utils/colourPallet";

const Activities = () => {

  return (
    <div className="container">
      <section className={styles.activities}>
        <div className={styles.titles}>
          <h3 className={styles.subtitle}>
            What to do
          </h3>
          <h2 className={styles.title}>
            Nepal activities
          </h2>
          <Divider />
        </div>
        <div className={styles.items}>
          {
            ColourPallet(6).map((colour, index) => (
              <div className={styles.element} key={index} >
                <Activity colour={colour} />
              </div>
            ))
          }
        </div>
      </section >

    </div>
  )
}

export default Activities
