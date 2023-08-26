import Image from "next/image";

const LatestUpdateCard = () => {
  return (
    <div
      class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row cursor-pointer">
      <div class="flex flex-col justify-start p-6">
        <h5
          class="mb-2 text-xl font-medium text-neutral-800">
          Nepal Updates Guide Travel Policy
        </h5>
        <p class="mb-4 text-base text-neutral-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quasi repellat fugiat laboriosam dolores iste.
        </p>
        <p class="text-xs text-neutral-500">
          Last updated 3 mins ago
        </p>
      </div>
    </div>
  )
}

export default LatestUpdateCard