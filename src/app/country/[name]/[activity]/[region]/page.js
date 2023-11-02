import React from 'react'
import { getRegionTours } from '@/utils/wordpress';
import Region from './Render';
import { notFound } from 'next/navigation';

const getToursData = async (id) => {
  const res = await getRegionTours(id, false);
  console.log(JSON.parse(res));
  if (!res) {
    return;
  }
  let response = JSON.parse(res);
  if (response.length === 0) return notFound();
  return response;
}

const Fetcher = async ({ params }) => {

  const tourRes = await getToursData(params.region.split('_')[1]);
  return (
    <Region d={tourRes} regionName={params.region} />
  )
}

export default Fetcher