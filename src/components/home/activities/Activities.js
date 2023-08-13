import Divider from "@/components/ui/divider/Divider";
import Activity from "../activity/Activity";
import styles from "./activities.module.scss";
import { ColourPallet } from "@/utils/colourPallet";

const Activities = ({ type, areas }) => {

  const data = [
    {
      image: "https://images.pexels.com/photos/13548334/pexels-photo-13548334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      image: "https://images.pexels.com/photos/104757/pexels-photo-104757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
          {
            !areas &&
            (
              <h3 className={styles.subtitle}>
                What to do
              </h3>
            )
          }

          <h2 className={styles.title}>
            Nepal activities
          </h2>
          <Divider />
        </div>
        <div className={styles.items} style={{ columnGap: type === "icon" ? "20px" : "50px" }}>
          {
            type === "icon"
              ?
              ColourPallet(16).map((colour, index) => (
                <Activity key={index} colour={colour} areas={areas} />
              ))
              :
              data.map(({ image }, index) => (
                <Activity image={image} areas={areas} key={index} />
              ))
          }
        </div>
      </section >

    </div>
  )
}

export default Activities
