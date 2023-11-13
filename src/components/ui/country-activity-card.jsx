import Image from "next/image";
import Link from "next/link";

const CountryActivityCard = ({ data, country, normal = false }) => {
  if (!normal) {
    const name = data[0]['name'];
    const slug = data[0]['slug'];
    const count = data[0]['count'];
    const activity = data[1][0][0];
    const image = data[1][1]['hero']['image']['sizes']['large'];
    return (
      <div>
        <Link href={`/country/${country}/${activity}/${slug}`} class="group relative flex h-52 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <Image
            width={400}
            height={200}
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
          <div class="relative flex w-full items-center justify-between flex-row-reverse rounded-lg bg-white p-4 text-center">
            <span class="text-sky-600 font-semibold first-letter:uppercase">{activity}</span>
            <span class="text-lg font-bold text-gray-800 text-left">{name}</span>
          </div>
          <div className="absolute top-0 right-0 p-3 bg-sky-600 font-semibold text-white rounded-s-lg">
            {count} Trips
          </div>
        </Link>
      </div >
    )
  }
  return (
    <div>
      <Link href={`/country/${country}/${data.activities[0]}/${data.destination[0]}/${data.slug}`} class="group relative flex h-52 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <Image
          width={400}
          height={200}
          src={data.featured_image}
          alt={data.title.rendered}
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div class="relative flex w-full items-center justify-between flex-row-reverse rounded-lg bg-white p-4 text-center">
          <span class="text-sky-600 font-semibold first-letter:uppercase">{data.activities[0]}</span>
          <span class="text-lg font-bold text-gray-800 text-left">{data.title.rendered}</span>
        </div>
      </Link>
    </div >
  )
}

export default CountryActivityCard