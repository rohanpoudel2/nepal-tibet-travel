import Hero from "@/components/blogs/blogLayout/hero/Hero";
import styles from "./blog.module.scss";
import BlogContent from "@/components/blogs/blogLayout/blogContent/BlogContent";
import BlogRecommendation from "@/components/blogs/blogLayout/blogRecommendation/BlogRecommendation";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <Hero />
      <div className="container">
        <BlogContent />
        <BlogRecommendation />
      </div>
    </div>
  )
}

export default Blog