import Image from "next/image";
import ShareDropDown from "../sharedropdown/ShareDropDown";
import Breadcrumb from "@/components/ui/breadcrumb";
import Link from "next/link";
import Favorite from "../favorite/Favorite";
import { Star } from "@/components/ui/star";
import GoBack from "./goback/GoBack";
import BookingBtn from "./bookingbtn/BookingBtn";

const Hero = ({ data }) => (
  <div>
    <div className="md:flex items-center justify-between hidden">
      <GoBack />
      <Breadcrumb />
    </div>
    <div className="space-y-2 mt-5">
      <div className="flex flex-col md:flex-row items-start gap-2 md:gap-0 md:items-center justify-between">
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="text-3xl">{data.post.post_title}</h1>
          <Link href="#booking" className="block md:hidden">
            <button className="px-2 py-1 font-medium flex items-center gap-2 tracking-wide text-white transition-colors duration-300 transform bg-sky-500 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-80">
              <i className="fa-regular fa-calendar-days" />
              <span className="font-semibold">Booking Dates</span>
            </button>
          </Link>
        </div>
        <div className="flex gap-5 items-center w-full md:w-auto">
          <BookingBtn />
          <ShareDropDown />
          <Favorite id={data.post.ID} />
        </div>
      </div>
      <div className="flex gap-5 lg:gap-10 items-center">
        <div className="flex items-center gap-1">
          <Star filled={true} />
          <span className="font-semibold">{data.ratings}<span className="font-semibold text-sm text-gray-500"> ({data.reviews} reviews)</span></span>
        </div>
        <div className="flex items-center gap-1 font-semibold text-gray-500">
          <i className="fa-regular fa-flag" />
          {data?.destination?.map((item, index) => (
            <span key={index}>
              {item}
              {index < data.destination.length - 1 && ','}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="relative mt-10">
      <Image
        width={1920}
        height={1080}
        src={data.featured_media?.sizes?.full?.url ?? data.featured_media}
        alt=""
        className="lg:h-[640px] h-auto w-full rounded-lg object-cover object-center"
      />
      <Link href={`/gallery/${data.post.ID}`} className="text-xs md:text-base absolute bottom-2 left-2 bg-white py-1 px-2 rounded-lg font-semibold space-x-2 cursor-pointer hover:scale-105 transition-all active:scale-95 select-none hidden md:block">
        <i className="fa-regular fa-eye" />
        <span>See all photos</span>
      </Link>
    </div>
  </div>
);

export default Hero