import Link from "next/link";
import Image from "next/image";

const PopularDestination = ({ data }) => {
  return (
    <Link href={`/country/${data.title.toLowerCase()}`}>
      <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
        <Image
          width={800}
          height={800}
          src={data?.image.sizes.large}
          alt="Everest Base Camp"
          className="absolute inset-0 h-full w-full object-cover transition duration-200 hover:scale-110 brightness-[98%] cursor-pointer"
        />
        <h3 className="z-10 mt-3 text-3xl font-bold text-white cursor-pointer">{data.title}</h3>
        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-white font-semibold cursor-pointer">{data.subtitle}</div>
      </article>
    </Link>
  )
}

export default PopularDestination