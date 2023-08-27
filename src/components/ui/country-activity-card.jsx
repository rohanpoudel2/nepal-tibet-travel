

const CountryActivityCard = () => {
  return (
    <div className="relative grid h-[10rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 cursor-pointer ring-sky-600 hover:ring-4">
      <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1538280601503-f6ff5767b7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative p-6 py-14 px-6 md:px-12">
        <h2 className="mb-1 block text-2xl font-bold leading-[1.5] tracking-normal text-white antialiased">
          Trekking
        </h2>
        <h5 className="mb-4 block text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
          Nepal
        </h5>
      </div>
    </div>
  )
}

export default CountryActivityCard