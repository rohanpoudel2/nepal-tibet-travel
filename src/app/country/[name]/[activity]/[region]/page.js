import React from 'react'
import Hero from "@/components/country/region/Hero/Hero"
import { getRegionTours } from '@/utils/wordpress';
import { getRegionName } from '@/utils/functions';
import { notFound } from 'next/navigation';
import Trips from '@/components/country/region/trips/Trips';

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
  if (response.length === 0) return notFound();
  return response;
}

const Fetcher = async ({ params }) => {
  const tourRes = await getToursData(params.region, params.name, params.activity);
  return (
    <>
      <section>
        <Hero title={getRegionName(params.region)} country={params.name} content={tourRes.description} image={tourRes.image['1536x1536']} />
      </section>
      <Trips region={getRegionName(params.region)} data={tourRes.tours} />
    </>
  )
}

export default Fetcher