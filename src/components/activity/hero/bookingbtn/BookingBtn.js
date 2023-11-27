"use client"

const BookingBtn = () => {
  return (
    <div onClick={() => window.scrollTo(0, document.getElementById("booking").offsetTop - 100)} className="hidden md:block">
      <button className="px-2 py-1 font-medium flex items-center gap-2 tracking-wide text-white transition-colors duration-300 transform bg-primary-mac rounded-lg hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-80">
        <i className="fa-regular fa-calendar-days" />
        <span className="font-semibold">Booking Dates</span>
      </button>
    </div>
  )
}

export default BookingBtn;