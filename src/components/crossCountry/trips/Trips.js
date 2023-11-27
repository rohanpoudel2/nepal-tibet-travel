import Link from "next/link";
import Image from "next/image";

const Trips = ({ data }) => {
  return (
    <section className="bg-white ">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">Cross Country Trips</h1>
        </div>
        <hr className="my-8 border-gray-200 " />
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
          {
            data.map((d, i) => (
              <Link href={`/cross-country/${d.post_name}`} key={i} className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <Image
                  width={800}
                  height={800}
                  src={d.featured_image_url}
                  alt={d.post_name}
                  className="h-56 w-full rounded-md object-cover"
                />
                <div className="mt-2">
                  <dl>
                    <div>
                      <dt className="sr-only">Address</dt>
                      <dd className="font-semibold text-xl">{d.post_title}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <dt className="sr-only">Price</dt>
                        <dd className="text-lg font-medium text-gray-500 line-through">${d.price}</dd>
                      </div>
                      <div>
                        <dt className="sr-only">Sale Price</dt>
                        <dd className="text-lg font-medium text-gray-500">${d.sale_price}</dd>
                      </div>
                    </div>
                  </dl>
                  <div className="mt-2 flex flex-wrap items-center gap-4">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <div>
                        <p className="text-gray-500 font-medium flex items-center text-sm gap-1">
                          <i className="fa-regular fa-clock text-xs text-sky-600" />
                          Duration
                        </p>
                        <p className="font-medium">{d.duration}</p>
                      </div>
                    </div>
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <div>
                        <p className="text-gray-500 font-medium flex items-center text-sm gap-1">
                          <i className="fa-solid fa-person-hiking text-xs text-sky-600" />
                          Activity
                        </p>
                        <p className="font-medium">Cross Country</p>
                      </div>
                    </div>
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <div>
                        <p className="text-gray-500 font-medium flex items-center text-sm gap-1">
                          <i className="fa-solid fa-scale-unbalanced text-xs text-sky-600" />
                          Difficulty
                        </p>
                        <p className="font-medium capitalize">{d.difficulty}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </section >
  )
}

export default Trips