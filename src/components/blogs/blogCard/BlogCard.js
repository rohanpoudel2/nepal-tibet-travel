import { blogCardDate } from "@/utils/dates";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ data }) => {
  return (
    <article className="flex flex-col items-start justify-between relative">
      <Link href={`/blogs/${data.slug}`}>
        <div className="relative w-full">
          <Image
            src={data?._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url}
            alt="Blog Card Image"
            width={400}
            height={300}
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] md:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </Link>
      <div className="max-w-xl">
        <div className="flex items-center gap-x-4 text-xs absolute top-2 right-2 shadow-lg">
          <div className="z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {data?._embedded["wp:term"][0][0].name}
          </div>
        </div>
        <Link href={`/blogs/${data.slug}`}>
          <div className="group relative">
            <h3 className="mt-3 line-clamp-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600" dangerouslySetInnerHTML={{ __html: data?.title.rendered }} />
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600" dangerouslySetInnerHTML={{ __html: data?.excerpt.rendered }} />
          </div>
        </Link>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image
            src={data['_embedded']['author'][0]['avatar_urls']['96']}
            alt={data['_embedded']['author'][0]['name']} d
            width={100}
            height={100}
            className="h-10 w-10 rounded-full bg-gray-100"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <div>
                <span className="absolute inset-0" />
                {data['_embedded']['author'][0]['name']}
              </div>
            </p>
            <time dateTime={blogCardDate(data?.modified_gmt, true)} className="text-gray-600">
              {blogCardDate(data?.modified_gmt, true)}
            </time>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogCard