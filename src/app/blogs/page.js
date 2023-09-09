import styles from "./blogs.module.scss";
import BlogsCollection from "@/components/blogs/blogs/Blogs";
import { Separator } from "@/components/ui/separator";
import { getBlogs, getPageData } from "@/utils/wordpress";

const getBlogsPageData = async () => {
  const res = await getPageData('blogs');
  if (!res) {
    return;
  }
  return JSON.parse(res);
}

const getBlogsData = async () => {
  const res = await getBlogs();
  if (!res) {
    return;
  }
  return JSON.parse(res);
}

const Blogs = async () => {

  const blogRes = await getBlogsPageData();
  const blogContent = blogRes[0]?.acf;

  const blogsRes = await getBlogsData();

  return (
    <div className="container">
      <div className={styles.blogs}>
        <div className={styles.topbar}>
          <h1 className="text-2xl md:text-3xl font-bold">
            {blogContent?.title}
          </h1>
          <h2 className="text-sm md:text-lg font-normal text-gray-700">
            {blogContent?.sub_title}
          </h2>
          <Separator />
        </div>
        <div className={styles.blogscollection}>
          <BlogsCollection data={blogsRes} />
        </div>
      </div>
    </div>
  )
}

export default Blogs