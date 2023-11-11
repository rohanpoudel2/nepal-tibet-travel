import PhotoTiles from "../photoTiles/PhotoTiles";
import styles from "./content.module.scss";

const Content = ({ data }) => {
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.left}>
          <div className="mt-8 prose prose-slate max-w-none text-justify lg:prose-lg" dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        <div className={styles.right}>
          <div className={styles.gallery}>
            <PhotoTiles data={data.gallery} />
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