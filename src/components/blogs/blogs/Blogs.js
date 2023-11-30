import Link from "next/link";
import BlogCard from "../blogCard/BlogCard";

const Blogs = ({ data }) => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      {
        data?.map((blog) => (
          <BlogCard data={blog} />
        ))
      }
    </div>
  )
}

export default Blogs