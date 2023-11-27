import { Separator } from "@/components/ui/separator";

const Starter = ({ data, acf }) => {
  return (
    <>
      <h1 className="text-3xl">{data.post_title}</h1>
      <Separator className="mt-5" />
      <div className="flex items-center gap-5 mt-3 flex-wrap">
        <div className="flex gap-2 items-center font-semibold text-gray-500">
          <i className="fa-regular fa-clock" />
          {acf.duration}
        </div>
        <div className="flex gap-2 items-center font-semibold text-gray-500">
          <i className="fa-solid fa-person-hiking" />
          {data?.activities[0]}
        </div>
        <div className="flex gap-2 items-center font-semibold text-gray-500">
          <i className="fa-solid fa-scale-unbalanced" />
          {data?.difficulty[0]}
        </div>
        <div className="flex gap-2 items-center font-semibold text-gray-500">
          <span>Max Pax: {acf.group_size.max_group}</span>
        </div>
        <div className="flex gap-2 items-center font-semibold text-gray-500">
          <span>Min Pax: {acf.group_size.min_group}</span>
        </div>
        <div className="flex gap-2 items-center font-semibold text-gray-500">
          <i className="fa-solid fa-tree" />
          <span>{acf.best_season}</span>
        </div>
      </div>
    </>
  )
}

export default Starter