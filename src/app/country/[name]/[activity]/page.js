import Hero from "@/components/country/trekking/hero/Hero"
import styles from "./trekking.module.scss"
import { getActivityId } from "@/utils/apiUtils";
import { getCountryRegions } from "@/utils/wordpress";
import RegionCard from "@/components/country/trekking/regionCard/RegionCard";
import { notFound } from "next/navigation";

const getCountryRegion = async (country, activity) => {
  const data = {
    country,
    activity
  }
  const res = await getCountryRegions(data);
  if (!res) {
    return;
  }
  let response = JSON.parse(res);
  if (response.length === 0) return notFound();
  return response;
}

const Trekking = async ({ params }) => {

  const { activity, name } = params;

  const ACTIVITY_NAME = activity.replace(/-/g, " ");

  const countryDestinationRes = await getCountryRegion(name, activity);
  return (
    <div className={styles.trekking}>
      <Hero
        media={countryDestinationRes[countryDestinationRes.length - 1].acf.hero.image.sizes['1536x1536']}
        country={name}
        activity={ACTIVITY_NAME}
      />
      <div className="container">
        <div className={styles.shortDesc} dangerouslySetInnerHTML={{ __html: countryDestinationRes[countryDestinationRes.length - 1].description }} />
        <div className={styles.trekkingAreas}>
          <section className="grid sm:grid-cols-3 md:grid-cols-4 gap-[50px]">
            {
              countryDestinationRes.map((data, i) => {
                if (i === countryDestinationRes.length - 1) {
                  return ''
                }
                return <RegionCard
                  key={data.term_id}
                  image={data.acf.hero.image.sizes.medium_large}
                  name={data.name}
                  desc={data.description}
                  page_link={data.slug}
                  activity={ACTIVITY_NAME}
                  country={name}
                />
              })
            }
          </section>
        </div>
      </div>
    </div>
  )
}

export default Trekking