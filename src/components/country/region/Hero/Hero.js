import Image from 'next/image';

const Hero = ({ title, image, country, content }) => (
  // <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 h-[80vh]">
  //   <div className="h-full rounded-lg">
  //     <div className="container">
  //       <div className="mx-32">
  //         <h1 className="text-6xl font-bold mt-16">{title}</h1>
  //         <div className="flex mt-16 font-light gap-10 text-gray-500">
  //           <div>
  //             <span className="uppercase">Country</span>
  //             <p className="text-2xl text-gray-900 font-semibold pt-2 first-letter:uppercase">{country}</p>
  //           </div>
  //           <div>
  //             <span className="uppercase">Max Altitude</span>
  //             <p className="text-2xl text-gray-900 font-semibold pt-2 first-letter:uppercase">8848 m</p>
  //           </div>
  //         </div>
  //         <div
  //           className="description w-full sm: md:w-3/3 mt-16 text-gray-500 text-lg"
  //         >
  //           {content}
  //         </div>
  //         <button type="button" className="py-2 px-4  bg-sky-500 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-5">
  //           Available activities ⬇
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="h-full rounded-lg bg-sky-400">
  //     <Image
  //       width={1080}
  //       height={1920}
  //       src={image}
  //       className="h-full w-full object-cover"
  //       alt={title}
  //     />
  //   </div>
  // </div>
  <div className="container">
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">{title}</h1>
            <div className="flex font-light gap-10 text-gray-500 md:mb-12 mb-8">
              <div>
                <span className="uppercase">Country</span>
                <p className="text-2xl text-gray-900 font-semibold pt-2 first-letter:uppercase">{country}</p>
              </div>
              <div>
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