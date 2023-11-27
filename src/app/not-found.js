"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-white ">
      <div className="container min-h-screen px-6  mx-auto lg:flex lg:items-start lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-sky-500 ">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">We lost this page</h1>
          <p className="mt-4 text-gray-500 ">Sorry, the page you are looking for doesn't exist.</p>
          <div className="flex items-center mt-6 gap-x-3">
            <div onClick={handleGoBack} className='cursor-pointer'>
              <button className="flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto   hover:bg-gray-100 ">
                <div className='hidden md:block'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                  </svg>
                </div>
                <span>Go back</span>
              </button>
            </div>
            <Link href="/">
              <button className=" px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-sky-500 rounded-lg shrink-0 sm:w-auto hover:bg-sky-600 ">
                Take me home
              </button>
            </Link>
          </div>
          <div className="mt-10 space-y-6">
            <div>
              <a href="#" className="inline-flex items-center text-sm text-sky-500 gap-x-2  hover:underline">
                <span>Work with us</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <p className="mt-2 text-sm text-gray-500 ">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <a href="#" className="inline-flex items-center text-sm text-sky-500 gap-x-2  hover:underline">
                <span>Our blog</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <p className="mt-2 text-sm text-gray-500 ">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <a href="#" className="inline-flex items-center text-sm text-sky-500 gap-x-2  hover:underline">
                <span>Get trip quotation</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <Image height={1920} width={1080} className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover " src="https://images.unsplash.com/photo-1443996264301-c81a3053d00a?auto=format&fit=crop&q=80&w=1473&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </section >
  )
}

export default NotFound