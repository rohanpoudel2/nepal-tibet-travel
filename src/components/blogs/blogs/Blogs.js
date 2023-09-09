import Link from "next/link";
import BlogCard from "../blogCard/BlogCard";

const Blogs = ({ data }) => {
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-[50px]">
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