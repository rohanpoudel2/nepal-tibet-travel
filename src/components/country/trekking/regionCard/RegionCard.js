import Link from "next/link"
import ImageComponent from "@/components/Image/Image"

const RegionCard = ({ image, name, desc }) => {
  return (
    <div className="max-w-full sm:max-w-[256px] bg-white border border-gray-200 rounded-lg shadow">
      <Link href="#" className="relative">
        <ImageComponent
          width={700}
          height={400}
          image_link={image}
          alt="Region Image"
          className="rounded-t-lg h-[250px] sm:h-[150px] object-cover object-bottom"
        />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-xl font-medium tracking-normal leading-snug text-blue-gray-900">
            {name}
          </h5>
        </Link>
        <p className="mb-3 text-sm font-light text-gray-700 line-clamp-3">
          {desc}
        </p>
        <Link href="/country/nepal/trekking/everest" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#47A5CF] rounded-lg hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Explore
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default RegionCard