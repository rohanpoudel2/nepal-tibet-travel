import styles from "./blogs.module.scss";
import BlogsCollection from "@/components/blogs/blogs/Blogs";
import { Separator } from "@/components/ui/separator";

const Blogs = () => {
  return (
    <div className="container">
      <div className={styles.blogs}>
        <div className={styles.topbar}>
          <h1 className="text-2xl md:text-3xl font-bold">
            Tales from the Trails
          </h1>
          <h2 className="text-sm md:text-lg font-normal text-gray-700">
            Discover Firsthand Accounts, Expert Tips, and Insider Stories
          </h2>
          <Separator />
        </div>
        <div className={styles.blogscollection}>
          <BlogsCollection />
        </div>
      </div>
    </div>
  )
}

export default Blogs