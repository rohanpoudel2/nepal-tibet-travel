import Link from "next/link";
import styles from "./blogrecommendation.module.scss";

const BlogRecommendation = () => {
  return (
    <div className={styles.blogRecommendation}>
      <span className={styles.title}>
        Also Recommended to Read:
      </span>
      <Link href="#">
        Tips and Tricks for trekking in the Himalayas
      </Link>
    </div>
  )
}

export default BlogRecommendation