import React from 'react'
import { getRegionTours } from '@/utils/wordpress';
import Region from './Render';
import { notFound } from 'next/navigation';

const getToursData = async (slug, country, activity) => {
  const data = {
    country,
    activity,
    list: true
  }
  const res = await getRegionTours(slug, data);
  if (!res) {
    return;
  }
  let response = JSON.parse(res);
  console.log(data);
  if (response.length === 0) return notFound();
  return response;
}

const Fetcher = async ({ params }) => {
  const tourRes = await getToursData(params.region, params.name, params.activity);
  return (
    <Region d={tourRes} regionName={params.region} />
  )
}

export default Fetcher