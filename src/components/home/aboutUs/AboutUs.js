import Image from "next/image";
import styles from "./aboutus.module.scss";
import Link from "next/link";

const AboutUs = ({ data }) => (
  <section className={`${styles.aboutus} bg-gray-50 py-8 overflow-hidden`}>
    <div className="container relative lg:flex lg:items-center lg:gap-12">
      <div className="w-full py-12 lg:py-16">
        <h2 className="text-3xl font-extrabold text-black  sm:text-4xl">
          <span className="block">
            {data?.title}
          </span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
          {data?.description}
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <Link href="/about-us">
              <button type="button" className="py-2 px-4  bg-sky-500 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                {data?.button.button_text}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-end items-center gap-4 py-8 pl-4 lg:py-24 lg:pl-12">
        <Image width={800} height={800} src={data.image_grid.image[0].image.sizes.medium_large} className="w-1/2 rounded-lg" alt="Tree" />
        <div>
          <Image width={800} height={800} src={data.image_grid.image[1].image.sizes.medium_large} className="mb-4 rounded-lg" alt="Tree" />
          <Image width={800} height={800} src={data.image_grid.image[2].image.sizes.medium_large} className="rounded-lg" alt="Tree" />
        </div>
      </div>
    </div>
  </section>

)


export default AboutUs