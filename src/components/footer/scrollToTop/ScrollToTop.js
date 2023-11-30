"use client"

const ScrollToTop = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div
      className="md:block rounded-full bg-primary-mac p-2 text-white shadow transition hover:bg-sky-600 sm:p-3 lg:p-4 cursor-pointer absolute top-2 right-8"
      onClick={scrollToTop}
    >
      <span className="sr-only">Back to top</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}

export default ScrollToTop