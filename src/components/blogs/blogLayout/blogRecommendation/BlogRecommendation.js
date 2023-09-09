import Link from "next/link";
import styles from "./blogrecommendation.module.scss";

const BlogRecommendation = ({ data }) => {
  return (
    <div className={styles.blogRecommendation}>
      <span className={styles.title}>
        Also Recommended to Read:
      </span>
      <Link href={`/blogs/${data["post_name"]}`}>
        {data["post_title"]}
      </Link>
    </div>
  )
}

export default BlogRecommendation