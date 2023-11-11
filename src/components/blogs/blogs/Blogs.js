import Link from "next/link";
import BlogCard from "../blogCard/BlogCard";

const Blogs = ({ data }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8 mt-8">
      {
        data?.map((blog) => (
          <>
            <Link href={`/blogs/${blog?.slug}`} key={blog?.id}>
              <BlogCard data={blog} />
            </Link>
          </>

        ))
      }
    </div>
  )
}

export default Blogs