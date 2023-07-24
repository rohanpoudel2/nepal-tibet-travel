import styles from "./blogs.module.scss";
import BlogsCollection from "@/components/blogs/blogs/Blogs";

const Blogs = () => {
  return (
    <div className="container">
      <div className={styles.blogs}>
        <div className={styles.topbar}>
          <h1 className={styles.title}>
            Tales from the Trails
          </h1>
          <h2 className={styles.subtitle}>
            Discover Firsthand Accounts, Expert Tips, and Insider Stories
          </h2>
        </div>
        <div className={styles.blogscollection}>
          <BlogsCollection />
        </div>
      </div>
    </div>
  )
}

export default Blogs