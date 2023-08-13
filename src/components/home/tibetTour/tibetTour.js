import Divider from "@/components/ui/divider/Divider";
import styles from "./tibettour.module.scss";

const TibetTour = () => {
  return (
    <div className="container">
      <section className={styles.tibettour}>
        <div className={styles.titles}>
          <h3 className={styles.subtitle}>
            Travel with group
          </h3>
          <h2 className={styles.title}>
            Tibet group tour 2023
          </h2>
          <Divider />
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-auto">
                <table className="min-w-full text-left text-sm text-center">
                  <thead className="border-b text-xl font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">Tour Name</th>
                      <th scope="col" className="px-6 py-4">Duration</th>
                      <th scope="col" className="px-6 py-4">Price</th>
                      <th scope="col" className="px-6 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-lg">
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">Lhasa Tour</td>
                      <td className="whitespace-nowrap px-6 py-4">5 Days</td>
                      <td className="whitespace-nowrap px-6 py-4 font-bold text-green-500">$1560</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button className="bg-blue-400 p-2 text-white font-bold rounded-lg hover:bg-blue-500">
                          Book Now
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">Lhasa Tour</td>
                      <td className="whitespace-nowrap px-6 py-4">5 Days</td>
                      <td className="whitespace-nowrap px-6 py-4 font-bold text-green-500">$1560</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button className="bg-blue-400 p-2 text-white font-bold rounded-lg hover:bg-blue-500">
                          Book Now
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">Lhasa Tour</td>
                      <td className="whitespace-nowrap px-6 py-4">5 Days</td>
                      <td className="whitespace-nowrap px-6 py-4 font-bold text-green-500">$1560</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button className="bg-blue-400 p-2 text-white font-bold rounded-lg hover:bg-blue-500">
                          Book Now
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">Lhasa Tour</td>
                      <td className="whitespace-nowrap px-6 py-4">5 Days</td>
                      <td className="whitespace-nowrap px-6 py-4 font-bold text-green-500">$1560</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button className="bg-blue-400 p-2 text-white font-bold rounded-lg hover:bg-blue-500">
                          Book Now
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">Lhasa Tour</td>
                      <td className="whitespace-nowrap px-6 py-4">5 Days</td>
                      <td className="whitespace-nowrap px-6 py-4 font-bold text-green-500">$1560</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button className="bg-blue-400 p-2 text-white font-bold rounded-lg hover:bg-blue-500">
                          Book Now
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">Lhasa Tour</td>
                      <td className="whitespace-nowrap px-6 py-4">5 Days</td>
                      <td className="whitespace-nowrap px-6 py-4 font-bold text-green-500">$1560</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button className="bg-blue-400 p-2 text-white font-bold rounded-lg hover:bg-blue-500">
                          Book Now
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TibetTour