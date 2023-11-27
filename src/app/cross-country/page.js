import Hero from "@/components/crossCountry/hero/Hero"
import Trips from "@/components/crossCountry/trips/Trips"
import { getCrossCountry } from "@/utils/wordpress"

const getData = async () => {
  const res = await getCrossCountry();
  if (!res) {
    return;
  }
  return JSON.parse(res);
}

const CrossCountry = async () => {
  const pageRes = await getData();
  return (
    <div>
      <Hero image={pageRes.image} title={pageRes.acf.hero.title} description={pageRes.data.post_content} />
      <Trips data={pageRes.trips} />
    </div>
  )
}

export default CrossCountry