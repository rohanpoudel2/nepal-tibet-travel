import Image from "next/image";
import styles from "./blogcard.module.scss";

const BlogCard = () => {
  return (
    <div className={styles.blogcard}>
      <Image
        src="https://images.pexels.com/photos/2856273/pexels-photo-2856273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Blog Card Image"
        width={400}
        height={300}
        className={styles.image}
      />
      <div className={styles.blogDetails}>
        <h4 className={styles.title}>
          An Epic Journey through the Annapurna Circuit
        </h4>
        <div className={styles.category}>
          Trekking
        </div>
      </div>
    </div>
  )
}

export default BlogCard