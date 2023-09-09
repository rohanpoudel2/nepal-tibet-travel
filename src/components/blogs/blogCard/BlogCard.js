import { blogCardDate } from "@/utils/dates";
import Image from "next/image";

const BlogCard = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="relative flex sm:max-w-[16rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <Image
            src={data?._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
            alt="Blog Card Image"
            width={400}
            height={300}
            className="w-full h-[300px] sm:h-auto object-cover"
          />
        </div>
        <div className="p-4">
          <h4 className="block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 max-h-[3.5rem] line-clamp-2 antialiased" dangerouslySetInnerHTML={{ __html: data?.title.rendered }} />
          <div className="mt-3 text-sm font-normal leading-relaxed text-gray-700 line-clamp-2 antialiased" dangerouslySetInnerHTML={{ __html: data?.excerpt.rendered }} />
        </div>
        <div className="flex items-center justify-between p-4 pt-2">
          <div className="flex items-center -space-x-3 h-9">
            <Image
              src={data?._embedded.author[0].avatar_urls[96]}
              alt="Blog Card Image"
              width={50}
              height={50}
              className="relative inline-block h-9 w-9 !rounded-full border-2 border-white object-cover object-center"
              skeletonRadius="!rounded-full"
            />
          </div>
          <p className="block text-sm font-normal leading-relaxed text-inherit antialiased">
            {blogCardDate(data?.modified_gmt)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard