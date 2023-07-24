import Link from "next/link";
import BlogCard from "../blogCard/BlogCard";
import styles from "./blogs.module.scss";

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <Link href="/blogs/journey-through-annapurna-circuit">
        <BlogCard />
      </Link>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  )
}

export default Blogs