const CountryActivityCard = ({ data }) => {
  return (
    <div className="relative grid h-[10rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 cursor-pointer ring-sky-600 hover:ring-4">
      <div
        className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
        style={{ backgroundImage: `url(${data.image.sizes.medium_large})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative p-6 py-14 px-6 md:px-12">
        <h2 className="mb-1 block text-2xl font-bold leading-[1.5] tracking-normal text-white antialiased">
          {data?.title}
        </h2>
        <h5 className="mb-4 block text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
          {data?.country_name[0].toUpperCase() + data?.country_name.slice(1)}
        </h5>
      </div>
    </div>
  )
}

export default CountryActivityCard