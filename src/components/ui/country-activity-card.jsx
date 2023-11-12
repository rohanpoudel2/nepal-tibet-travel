import Image from "next/image";
import Link from "next/link";

const CountryActivityCard = ({ data }) => {
  return (
    <div>
      <Link href="#" class="group relative flex h-52 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <Image
          width={400}
          height={200}
          src="https://images.unsplash.com/photo-1661345366637-b06cc07531d7?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Photo by Austin Wade"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div class="relative flex w-full items-center justify-between flex-row-reverse rounded-lg bg-white p-4 text-center">
          <span class="text-sky-600 font-semibold">Tour</span>
          <span class="text-lg font-bold text-gray-800">Annapurna Region</span>
        </div>
        <div className="absolute top-0 right-0 p-3 bg-sky-600 font-semibold text-white rounded-s-lg">
          7 Trips
        </div>
      </Link>
    </div>
  )
}

export default CountryActivityCard