import Image from "next/image"
import Link from "next/link"

const WorkingWith = ({ data }) => {

  return (
    <section className="bg-gray-50">
      <div className="container">
        <div className="max-w-screen-xl py-8 sm:py-12 lg:py-16">
          <div
            className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
          >
            <div
              className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
            >
              <h2 className="text-3xl font-extrabold text-black  sm:text-4xl">
                {data?.title}
              </h2>
              <p className="text-md mt-4 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
                aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
                Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
                Obcaecati, autem.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {
                data?.logo_image.map((data) => (
                  <Link
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href={data.link}
                  >
                    <span className="flex items-center justify-center rounded-lg bg-gray-50 p-3">
                      <Image
                        key={data?.logo.id}
                        width={80}
                        height={80}
                        src={data?.logo.url}
                        alt={data.name}
                        className="object-contain w-10 h-10 sm:w-15 sm:h-15 md:w-20 md:h-20"
                      />
                    </span>
                    <h2 className="mt-2 font-bold text-center">{data.name}</h2>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>

    </section >
  )
}

export default WorkingWith