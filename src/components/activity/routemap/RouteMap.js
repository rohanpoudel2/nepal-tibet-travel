import Title from "@/components/ui/title/Title"
import Image from "next/image"
import Link from "next/link";

const RouteMap = ({ image, title }) => (
  <>
    <Title
      title="Route Map"
    />
    <div className="mt-5">
      <Link href={image} target="_blank">
        <Image
          src={image}
          alt={title}
          width={800}
          height={800}
          className="h-auto w-full cursor-pointer"
        />
      </Link>
    </div>
  </>
)

export default RouteMap