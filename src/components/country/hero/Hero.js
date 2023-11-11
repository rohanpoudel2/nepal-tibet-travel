import Image from "next/image";
import Fact from "../fact/fact";

const Hero = ({ data }) => {
  const colors = ['bg-green-200', 'bg-blue-200', 'bg-orange-200'];
  return (
    <div className="container">
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">{data.title}</h1>
              <div className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg" dangerouslySetInnerHTML={{ __html: data.description }} />
              <div className="flex flex-wrap gap-5">
                {
                  data.facts.map((fact, i) => {
                    const color = colors[i];
                    return (
                      <Fact
                        key={i}
                        title={fact.fact.title}
                        answer={fact.fact.data}
                        color={color}
                      />
                    )
                  })
                }
              </div>
            </div>
            <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <Image
                width={1080}
                height={1920}
                className="h-full w-full object-cover object-center"
                src={data?.image.sizes.large}
                alt={data?.image.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero