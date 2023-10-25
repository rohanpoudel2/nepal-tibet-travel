import Hero from "@/components/country/trekking/hero/Hero"
import styles from "./trekking.module.scss"
import { getActivityId } from "@/utils/apiUtils";
import { getCountryRegions } from "@/utils/wordpress";
import RegionCard from "@/components/country/trekking/regionCard/RegionCard";
import { notFound } from "next/navigation";

const getCountryRegion = async (country, activityId) => {
  const res = await getCountryRegions(country, activityId);
  if (!res) {
    return;
  }
  let response = JSON.parse(res);
  if (response.countryRegions.length === 0) return notFound();
  return response;
}

const Trekking = async ({ params }) => {

  const { activity, name } = params;

  const ACTIVITY_NAME = activity.replace(/-/g, " ");

  const countryDestinationRes = await getCountryRegion(name, getActivityId(name, ACTIVITY_NAME));

  return (
    <div className={styles.trekking}>
      <Hero
        country={name}
        activity={ACTIVITY_NAME}
      />
      <div className="container">
        <div className={styles.shortDesc} dangerouslySetInnerHTML={{ __html: countryDestinationRes.activity.description }} />
        <div className={styles.trekkingAreas}>
          <section className="grid sm:grid-cols-3 md:grid-cols-4 gap-[50px]">
            {
              countryDestinationRes.countryRegions.map((data) => (
                <RegionCard
                  key={data?.id}
                  image={data?.thumbnail?.sizes.medium.source_url}
                  name={data?.name}
                  desc={data?.description}
                  page_link={data?.slug}
                  country={name}
                  id={data?.id}
                />
              ))
            }
          </section>
        </div>
      </div>
    </div>
  )
}

export default Trekking