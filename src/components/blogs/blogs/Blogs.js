import Link from "next/link";
import BlogCard from "../blogCard/BlogCard";

const Blogs = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
      {
        data?.map((blog) => (
          <Link href={`/blogs/${blog?.slug}`} key={blog?.id}>
            <BlogCard data={blog} />
          </Link>
        ))
      }
    </div>
  )
}

export default Blogs