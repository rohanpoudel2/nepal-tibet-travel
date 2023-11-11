import Link from "next/link"
import { latestUpdateDate } from "@/utils/dates"

const LatestUpdateCard = ({ data }) => {
  const latest_update = data?.latest_update
  return (
    <Link href={`/blogs/` + latest_update?.post_name}>
      <article className="flex bg-white transition hover:shadow-xl border-2 border-gray-800 rounded-xl">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          {latestUpdateDate(latest_update?.post_date_gmt)}
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <h3 className="font-bold uppercase text-gray-900">
              {latest_update?.post_title}
            </h3>
            <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: latest_update?.post_content }} />
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <span
              className="block bg-sky-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-sky-400 rounded-ee-xl"
            >
              Read Blog
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default LatestUpdateCard