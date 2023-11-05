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
      <section className="bg-white">
        <div className="container px-6 mb-20 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">{blogContent?.title}</h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              {blogContent?.sub_title}
            </p>
          </div>
          <BlogsCollection data={blogsRes} />
        </div>
      </section>
    </div>
  )
}

export default Blogs