import Image from "next/image"
import Link from "next/link"

const TourCard = ({ image, tourName, desc, rating, button }) => {
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
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="block  text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
            {tourName}
          </h5>
          <p className="flex items-center gap-1.5  text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
            {rating}
          </p>
        </div>
        <p className="text-sm font-light leading-relaxed text-gray-700 line-clamp-3 antialiased">
          {desc}
        </p>
      </div>
      <div className="p-6 pt-1">
        <Link href={button?.button_link.url}>
          <button
            className="block w-full select-none rounded-lg bg-[#47A5CF] py-3.5 px-7 text-center align-middle   text-sm font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            {
              button?.button_text
            }
          </button>
        </Link>
      </div>
    </div>
  )
}

export default TourCard