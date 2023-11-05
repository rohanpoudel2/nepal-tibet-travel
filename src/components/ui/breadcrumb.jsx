import React from 'react'
import Link from 'next/link'
const Breadcrumb = () => {
  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap bg-gray-100">
      <div className="container">
        <Link href="/">
          <span href="#" className="text-gray-600 underline">
            Home
          </span>
        </Link>
        <span className="mx-5 text-gray-500 ">
          /
        </span>
        <span href="#" className="text-gray-600">
          Country
        </span>
        <span className="mx-5 text-gray-500 ">
          /
        </span>
        <span href="#" className="text-sky-600">
          Nepal
        </span>
      </div>
    </div>
  )
}

export default Breadcrumb