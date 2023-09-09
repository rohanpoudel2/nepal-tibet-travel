import Image from "next/image"

const Images = ({ url, alt }) => {

  return (
    <Image
      src={url}
      alt={alt}
      width={80}
      height={80}
      className="object-contain w-10 h-10 sm:w-15 sm:h-15 md:w-20 md:h-20"
    />
  )
}

const WorkingWith = ({ data }) => {

  return (
    <section>
      <div className="container grid grid-rows-1 md:grid-cols-3 items-center gap-10">
        <h3 className="text-3xl tracking-wide text-gray-600">
          {data?.title}
        </h3>
        <div className="flex-1 flex gap-10">
          {
            data?.logo_image.map((data) => (
              <Images
                url={data?.logo.url}
                alt={data?.logo.alt}
                key={data?.logo.id}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default WorkingWith