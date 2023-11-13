import Image from 'next/image';

const Hero = ({ title, image, country, content }) => (
  <div className="container">
    <div className="bg-white">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          <div className="flex flex-col items-start justify-center md:text-center md:items-center lg:items-start lg:py-12 lg:text-left xl:py-24 w-fit">
            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">{title}</h1>
            <div className="flex leading-relaxed font-light gap-10 text-gray-500 md:mb-12 mb-8 lg:w-4/5 xl:text-lg">
              <div className="border-2 border-gray-500 border-dotted p-2 rounded-lg">
                <span className="uppercase">Country</span>
                <p className="text-2xl text-gray-900 font-semibold pt-2 first-letter:uppercase">{country}</p>
              </div>
              <div className="border-2 border-gray-500 border-dotted p-2 rounded-lg">
                <span className="uppercase">Max Altitude</span>
                <p className="text-2xl text-gray-900 font-semibold pt-2 first-letter:uppercase">8848 m</p>
              </div>
            </div>
            <div className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              {content}
            </div>
            <button type="button" className="py-2 px-4  bg-sky-500 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
              Available activities ⬇
            </button>
          </div>
          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
            <Image
              width={1080}
              height={1920}
              className="h-full w-full object-cover object-center"
              src={image}
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Hero