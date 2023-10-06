import Hero from "@/components/country/trekking/hero/Hero"
import styles from "./trekking.module.scss"
import Activities from "@/components/home/activities/Activities";
import RegionCard from "@/components/country/trekking/regionCard/RegionCard";
import { getRegions } from "@/utils/wordpress";

const getRegionsData = async () => {
  const res = await getRegions(17);
  if (!res) {
    return;
  }
  return JSON.parse(res);
}

const Trekking = async ({ params }) => {

  const { activity, name } = params;
  const destinationsRes = await getRegionsData();
  return (
    <div className={styles.trekking}>
      <Hero
        country={name}
        activity={activity.replace(/-/g, " ")}
      />
      <div className="container">
        <div className={styles.shortDesc}>
          <p>
            Nowhere else in the Himalaya you will find the Physical cultural and religion diversity which exists in Nepal. From the ancient animistic Bon religion of the western mountains and the Tibetan Buddhist culture of the Sherpa of Everest to the rich Hindu tradition of the heartland of the Kingdom. Nepal offers a unique kaleidoscope of South Asian culture. Combined with the world's most spectacular mountains and a truly warm and hospitable people, you have the ingredients of the experience of a lifetime.
          </p>
        </div>
        <div className={styles.trekkingAreas}>
          <section className="grid sm:grid-cols-3 md:grid-cols-4 gap-[50px]">
            {
              destinationsRes.map((data) => (
                <RegionCard
                  key={data?.id}
                  image={data?.thumbnail?.sizes.medium.source_url}
                  name={data?.name}
                  desc={data?.description}
                  page_link={data?.slug}
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