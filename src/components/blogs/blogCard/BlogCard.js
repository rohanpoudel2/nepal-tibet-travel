import { blogCardDate } from "@/utils/dates";
import Image from "next/image";

const BlogCard = ({ data }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
      <div className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
        <Image
          src={data?._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url}
          alt="Blog Card Image"
          width={400}
          height={300}
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h2 className="mb-2 text-lg font-semibold text-gray-800" dangerouslySetInnerHTML={{ __html: data?.title.rendered }} />
        <div className="mb-8 text-gray-500 line-clamp-3" dangerouslySetInnerHTML={{ __html: data?.excerpt.rendered }} />
        <div className="mt-auto flex items-end justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
              <Image
                src={data['_embedded']['author'][0]['avatar_urls']['96']}
                alt={data['_embedded']['author'][0]['name']}
                width={100}
                height={100}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <span className="block font-semibold text-sky-600">{data['_embedded']['author'][0]['name']}</span>
              <span className="block text-sm text-gray-400">{blogCardDate(data?.modified_gmt, true)}</span>
            </div>
          </div>
          <span className="rounded border px-2 py-1 text-sm text-gray-500">{data?._embedded["wp:term"][0][0].name}</span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard