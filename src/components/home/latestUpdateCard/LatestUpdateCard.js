import Link from "next/link"
import { latestUpdateDate } from "@/utils/dates"

const LatestUpdateCard = ({ data }) => {
  const latest_update = data?.latest_update
  return (
    <div className="mx-auto my-10 rounded-xl px-6 py-10 text-gray-600 shadow">
      <div className="mb-4 w-fit rounded-md bg-sky-100 px-2 py-1 text-sm font-medium text-sky-700">{latestUpdateDate(latest_update?.post_date_gmt)}</div>
      <h3 className="mb-2 text-2xl">{latest_update?.post_title}</h3>
      <div className="mb-6 text-gray-400 line-clamp-3" dangerouslySetInnerHTML={{ __html: latest_update?.post_content }} />
      <Link href={`/blogs/` + latest_update?.post_name}>
        <button className="flex items-center space-x-2 rounded-md border-2 border-sky-500 px-4 py-2 font-medium text-sky-600 transition hover:bg-primary-mac hover:text-white">
          <span> Read Blog </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
      </Link>
    </div>
  )
}

export default LatestUpdateCard