import Image from "next/image"
import Link from "next/link"

const TourCard = ({ image, name, slug, country, description, count }) => {
  return (
    <article className="relative rounded-xl bg-white overflow-hidden text-gray-700 shadow-lg h-64">
      <Link href={`/country/${country.toLowerCase()}/${slug}`}>
        <Image
          src={image}
          alt={name}
          width={416}
          height={400}
          className="w-full h-full object-cover hover:scale-110 brightness-[98%]  transition duration-200 "
        />
        <h3 className="absolute bottom-3 left-3 z-10 text-3xl font-bold text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">{name}</h3>
        <div
          className="absolute top-0 right-0 p-2 text-sm rounded-lg font-semibold text-white bg-primary-mac"
          type="button"
          data-ripple-light="true"
        >
          {count} Trips Available
        </div>
      </Link>
    </article>
  )
}

export default TourCard