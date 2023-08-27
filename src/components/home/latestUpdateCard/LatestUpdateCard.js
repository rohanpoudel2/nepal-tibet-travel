
const LatestUpdateCard = () => {
  return (
    <div
      className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row cursor-pointer">
      <div className="flex flex-col justify-start p-6">
        <h5
          className="mb-2 text-lg md:text-xl font-medium text-neutral-800">
          Nepal Updates Guide Travel Policy
        </h5>
        <p className="mb-4 text-sm md:text-base text-neutral-600 line-clamp-2 md:line-clamp-none">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quasi repellat fugiat laboriosam dolores iste.
        </p>
        <p className="text-xs text-neutral-500">
          Last updated 3 mins ago
        </p>
      </div>
    </div>
  )
}

export default LatestUpdateCard