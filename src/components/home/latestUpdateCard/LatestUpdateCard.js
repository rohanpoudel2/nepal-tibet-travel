import Link from "next/link"
import { latestUpdateDate } from "@/utils/dates"

const LatestUpdateCard = ({ data }) => {
  const latest_update = data?.latest_update
  return (
    <Link href={`/blogs/` + latest_update?.post_name}>
      <div
        className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row cursor-pointer">
        <div className="flex flex-col justify-start p-6">
          <h5
            className="mb-2 text-lg md:text-xl font-medium text-neutral-800">
            {latest_update?.post_title}
          </h5>
          <div className="mb-4 text-sm md:text-base text-neutral-600 max-h-[3.5rem] line-clamp-2" dangerouslySetInnerHTML={{ __html: latest_update?.post_content }}></div>
          <p className="text-xs text-neutral-500">
            {latestUpdateDate(latest_update?.post_date_gmt)}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default LatestUpdateCard