import PhotoTiles from "../photoTiles/PhotoTiles";
import styles from "./content.module.scss";

const Content = () => {
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.desc}>
            <p>
              The Everest Base Camp trek is world-renowned and offers breathtaking views of some of the highest mountains on the planet. Our itineraries prioritize acclimatization to ensure a comfortable and memorable trekking experience. However, local weather conditions may require adjustments to the program and affect the availability of views. The Khumbu region, home to Mount Everest (or Sagarmatha), is a UNESCO World Heritage site and is protected as the Sagarmatha National Park. Lukla is the gateway to the Everest region, with an airstrip for small planes. Namche Bazaar, a famous town, is a two-day trek from Lukla and offers an excellent vantage point for viewing Mt. Everest. Trekking options abound in this region, with the main seasons being autumn (September-November) and spring (March-May).
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.gallery}>
            <PhotoTiles />
            <div className={styles.showall}>
              <i className="fa-solid fa-expand"></i>
              <span>Show all photos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content