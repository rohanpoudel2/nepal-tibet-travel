import React from 'react';
import Image from "next/image";

const Hero = ({ image, title, description }) => {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-10 container">
      <div className='flex flex-col gap-4 items-start justify-center'>
        <div className='bg-sky-300 text-white w-fit px-2 py-1 rounded-lg font-semibold'>
          The Best Tour
        </div>
        <div className='space-y-2 md:space-y-4'>
          <h1 className='text-4xl'>
            {title}
          </h1>
          <p className='prose text-gray-600'>
            {description}
          </p>
        </div>
      </div>
      <div className="lg:col-span-2 lg:ml-36 h-80 lg:h-full">
        <Image
          src={image}
          width={800}
          height={800}
          alt={title}
          className='object-cover w-full h-full rounded-xl'
        />
      </div>
    </section>
  )
}

export default Hero