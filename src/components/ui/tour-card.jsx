import Image from "next/image"
import Link from "next/link"

const TourCard = ({ image, name, slug, country, description, count }) => {
  return (
    <div className="relative flex w-full max-w-[26rem] sm:max-w-[16rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 h-40">
        <Image
          src={image}
          alt="Everest Base Camp Trek"
          width={416}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 pb-0 space-y-2">
        <h5 className="block text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h5>
        <p className="prose line-clamp-2 text-sm leading-6">
          {description}
        </p>
      </div>
      <div className="p-6 pt-1 mt-2">
        <Link href={`/country/${country.toLowerCase()}/${slug}`}>
          <button
            className="block w-full select-none rounded-lg bg-primary-mac py-3.5 px-7 text-center align-middle   text-sm font-bold capatilize tracking-wider text-white shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            {count} Trips Available
          </button>
        </Link>
      </div>
    </div>
  )
}

export default TourCard