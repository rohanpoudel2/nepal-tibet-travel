import Link from "next/link";
import BlogCard from "../blogCard/BlogCard";

const Blogs = () => {
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-[50px]">
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