import Title from "@/components/ui/title/Title"
import Image from "next/image"

const RouteMap = ({ image, title }) => (
  <>
    <Title
      title="Route Map"
    />
    <div className="mt-5">
      <Image
        src={image}
        alt={title}
        width={800}
        height={800}
        className="h-auto w-full"
      />
    </div>
  </>
)

export default RouteMap