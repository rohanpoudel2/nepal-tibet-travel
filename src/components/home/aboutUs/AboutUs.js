import Image from "next/image";
import styles from "./aboutus.module.scss";
import Link from "next/link";

const AboutUs = ({ data }) => (
  <section className="bg-gray-50 py-6 sm:py-8 lg:py-12">
    <div className="container">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
            <p className="text-center font-bold text-sky-500 md:text-left">Who we are</p>
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Operational since 1995</h1>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              {data?.description}
            </p>
          </div>
          <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <Image
                width={800}
                height={800}
                src={data.image.sizes.large}
                alt="Explore Nepal, Tibet and Bhutan. MacTrek"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)


export default AboutUs