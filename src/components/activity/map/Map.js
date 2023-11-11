import Image from "next/image";

const Map = ({ activityName, map }) => (
  <section className="bg-gray-50 py-8">
    <div className="container">
      <div className="w-100 flex flex-col items-center justify-center gap-10">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl first-letter:uppercase">
          {activityName} Route Map
        </h2>
        <Image
          src={map}
          alt={`${activityName} Route Map`}
          width={600}
          height={600}
          className=""
        />
      </div>
    </div>
  </section>
)

export default Map