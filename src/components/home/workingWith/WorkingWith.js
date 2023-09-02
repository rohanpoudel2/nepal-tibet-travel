import Image from "next/image"

const Images = ({ url }) => {
  return (
    <Image
      src={url}
      alt="NTB Logo"
      width={80}
      height={80}
      className="object-contain"
    />
  )
}


const WorkingWith = () => {

  const ImagesLink = [
    '/images/ntb.jpeg',
    '/images/tann.jpeg',
    '/images/nma.png',
  ]

  return (
    <section>
      <div className="container flex items-center gap-10">
        <h3 className="text-3xl tracking-wide text-gray-600">
          We are woking with
        </h3>
        <div className="flex-1 flex gap-10">
          {
            ImagesLink?.map((ImageLink) => (
              <Images
                url={ImageLink}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default WorkingWith