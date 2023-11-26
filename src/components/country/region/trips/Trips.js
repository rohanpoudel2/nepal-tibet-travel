"use client"
import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { Input } from '@/components/ui/input';
import No from "@/../../public/images/no.svg";
import { getRegionName } from '@/utils/functions';

const Trips = ({ data, region }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredTours = searchTerm
    ? data.filter(data => data.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : data;
  return (
    <section className="bg-white ">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">{getRegionName(region)} trips</h1>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="search" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
        <hr className="my-8 border-gray-200 " />
        {
          filteredTours.length ?
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
              {
                filteredTours.map((data, i) => (
                  <Link key={i} href={`${region}/${data.slug}`} className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <Image
                      width={800}
                      height={800}
                      src={data.image['medium_large']}
                      alt={data.name}
                      className="h-56 w-full rounded-md object-cover"
                    />
                    <div className="mt-2">
                      <dl>
                        <div>
                          <dt className="sr-only">Address</dt>
                          <dd className="font-semibold text-xl">{data.name}</dd>
                        </div>
                        <div className="flex items-center gap-2">
                          <div>
                            <dt className="sr-only">Price</dt>
                            <dd className="text-lg font-medium text-gray-500 line-through">${data.prices.price}</dd>
                          </div>
                          <div>
                            <dt className="sr-only">Sale Price</dt>
                            <dd className="text-lg font-medium text-gray-500">${data.prices.sale_price}</dd>
                          </div>
                        </div>
                      </dl>
                      <div className="mt-2 flex flex-wrap items-center gap-4">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <div>
                            <p className="text-gray-500 font-medium flex items-center text-sm gap-1">
                              <i className="fa-regular fa-clock text-xs text-sky-600" />
                              Duration
                            </p>
                            <p className="font-medium">{data.duration[0]} days</p>
                          </div>
                        </div>
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <div>
                            <p className="text-gray-500 font-medium flex items-center text-sm gap-1">
                              <i className="fa-solid fa-person-hiking text-xs text-sky-600" />
                              Activity
                            </p>
                            <p className="font-medium">{data.activities[0]}</p>
                          </div>
                        </div>
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <div>
                            <p className="text-gray-500 font-medium flex items-center text-sm gap-1">
                              <i className="fa-solid fa-scale-unbalanced text-xs text-sky-600" />
                              Difficulty
                            </p>
                            <p className="font-medium">{data.difficulty[0]}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
            :
            <div className="grid bg-white place-content-center">
              <div className="text-center">
                <Image
                  src={No}
                  alt='https://www.opendoodles.com/'
                  className="w-auto h-56 mx-auto text-black sm:h-64"
                />
                <h1
                  className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  Uh-oh!
                </h1>
                <p className="mt-4 text-gray-500">We can't find that trip.</p>
              </div>
            </div>
        }
      </div>
    </section >
  )
}

export default Trips