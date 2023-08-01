import Divider from "@/components/ui/divider/Divider";
import Activity from "../activity/Activity";
import styles from "./activities.module.scss";
import { ColourPallet } from "@/utils/colourPallet";

const Activities = ({ type }) => {

  const data = [
    {
      image: "https://images.pexels.com/photos/13548334/pexels-photo-13548334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      image: "https://images.pexels.com/photos/13548334/pexels-photo-13548334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image: "https://images.pexels.com/photos/13548334/pexels-photo-13548334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image: "https://images.pexels.com/photos/13548334/pexels-photo-13548334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image: "https://images.pexels.com/photos/13548334/pexels-photo-13548334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image: "https://images.pexels.com/photos/13548334/pexels-photo-13548334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

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
            type === "icon"
              ?
              ColourPallet(6).map((colour, index) => (
                <div className={styles.element} key={index} >
                  <Activity colour={colour} />
                </div>
              ))
              :
              data.map(({ image }, index) => (
                <div className={styles.element} key={index}>
                  <Activity image={image} />
                </div>
              ))
          }
        </div>
      </section >

    </div>
  )
}

export default Activities
