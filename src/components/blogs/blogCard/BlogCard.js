import { blogCardDate } from "@/utils/dates";
import Image from "next/image";

const BlogCard = ({ data }) => {
  return (
    <div>
      <Image
        src={data?._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url}
        alt="Blog Card Image"
        width={400}
        height={300}
        className="relative z-10 object-cover w-full rounded-md h-96"
      />
      <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow">
        <h3 href="#" className="font-semibold text-gray-800 hover:underline md:text-xl" dangerouslySetInnerHTML={{ __html: data?.title.rendered }} />
        <div className="mt-3 text-sm text-gray-500 md:text-sm line-clamp-3" dangerouslySetInnerHTML={{ __html: data?.excerpt.rendered }} />
        <p className="mt-3 text-sm text-blue-500">{blogCardDate(data?.modified_gmt, true)}</p>
      </div>
    </div>
  )
}

export default BlogCard