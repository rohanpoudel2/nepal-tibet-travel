import Image from "next/image";
import Link from "next/link";

const Recommendation = ({ data }) => {
  return (
    <section className="relative bg-gray-50">
      {/* <div className="relative mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:px-8 gap-52"> */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right flex flex-col items-center justify-center">
          <h1 className="text-3xl font-extrabold sm:text3xl">
            Also explore
            <strong className="block font-extrabold text-sky-500">
              {data.post_title}
            </strong>
          </h1>
          <div className="mt-5 text-center">
            <Link
              href={`/country/${data.country}/${data.activities}/${data.destination}/${data.post_name}`}
              className="block w-full rounded bg-sky-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-600 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"
            >
              Explore
            </Link>
          </div>
        </div>
        <Image
          src={data.featured_image_url}
          alt={data.post_title}
          width={800}
          height={300}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section >
  )
}

export default Recommendation