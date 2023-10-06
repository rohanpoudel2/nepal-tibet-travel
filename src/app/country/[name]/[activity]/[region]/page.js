import React from 'react'
import { getRegionTours } from '@/utils/wordpress';
import Region from './Render';

const getToursData = async (slug) => {
  const res = await getRegionTours(slug, false);
  if (!res) {
    return;
  }
  return JSON.parse(res);
}

const Fetcher = async ({ params }) => {

  const tourRes = await getToursData(params.region);

  return (
    <Region d={tourRes} regionName={params.region} />
  )
}

export default Fetcher