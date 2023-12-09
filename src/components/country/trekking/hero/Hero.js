import Image from "next/image";

const Hero = ({ activity, country, media, content }) => {
  return (
    <div>
      <div className="h-[25vh] md:h-[35vh] lg:h-[50vh] flex items-center justify-start relative">
        <Image
          src={media}
          width={1920}
          height={1080}
          alt={activity + ' in ' + country}
          className="w-full h-full object-cover absolute bg-gray-100"
        />
        <div className="container z-[9999]">
          <h1 className="text-4xl font-bold md:text-6xl text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] capitalize">{activity} in {country}</h1>
        </div>
      </div>
      <div className="container my-10">
        <p className="prose max-w-none text-justify" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default Hero