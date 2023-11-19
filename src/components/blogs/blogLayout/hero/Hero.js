import Image from "next/image";
import styles from "./hero.module.scss";
import DetailsCard from "../detailsCard/DetailsCard";
import moment from "moment";
import ShareDropDown from "@/components/activity/sharedropdown/ShareDropDown";

const Hero = ({ image, detailCard }) => {
  return (
    <div className="lg:w-3/4 lg:px-6">
      <Image
        width={1920}
        height={1080}
        className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
        src={image}
        alt={detailCard.title}
      />
      <div>
        <div className="flex items-center w-full justify-between mt-6">
          <h1 className="max-w-lg text-2xl font-semibold leading-tight text-gray-800" dangerouslySetInnerHTML={{ __html: detailCard.title }} />
          <p className="w-fit px-2 text-sm text-sky-500 uppercase border-2 border-sky-500 rounded-xl">{detailCard.category}</p>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <Image
              width={300}
              height={300}
              className="object-cover object-center w-10 h-10 rounded-full"
              src={detailCard.author.avatar_urls['96']}
              alt={detailCard.author.name}
            />
            <div className="mx-4">
              <h1 className="text-sm text-gray-700 ">{detailCard.author.name}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-5">
            <p className="w-fit px-2 text-sm text-gray-700 uppercase font-bold underline">{moment(detailCard.updatedAt).format("MMM DD, YYYY")}</p>
            <ShareDropDown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero