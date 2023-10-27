import Hero from "@/components/activity/hero/Hero";
import styles from "./activity.module.scss";
import Content from "@/components/activity/content/Content";
import Itinerary from "@/components/activity/itinerary/Itinerary";
import TripFacts from "@/components/activity/tripfacts/TripFacts";
import PriceList from "@/components/activity/pricelist/PriceList";
import Map from "@/components/activity/map/Map";
import DetailedItinerary from "@/components/activity/detailedItinerary/DetailedItinerary";
import Links from "@/components/activity/links/Links";
import Testimonial from "@/components/activity/testimonial/Testimonial";
import Recommendation from "@/components/activity/recommendation/Recommendation";
import Nav from "@/components/activity/nav/Nav";
import Booking from "@/components/activity/booking/Booking";
import { notFound } from "next/navigation";
import { getTaxonomyName, getTripInfo } from "@/utils/wordpress";

const getTripData = async (slug) => {
  const res = await getTripInfo(slug);
  if (!res) return;
  const response = JSON.parse(res);
  if (response.length === 0) return notFound();
  return response;
}

const Activity = async ({ params }) => {
  let { slug } = params;

  const activityName = slug.replace(/-/g, " ");
  const activityResponse = await getTripData(slug);
  const data = activityResponse[0];
  return (
    <div className={styles.activity}>
      <Hero data={{
        name: data.title.rendered,
        activity: JSON.parse(await getTaxonomyName(Math.max(...data.activities), 'activities')).name,
        image: data.featured_image.sizes['1536x1536'],
      }}
      />
      <div className={styles.detail}>
        <Nav />
        <section className={`${styles.content} ${styles.main_content}`} id="overview">
          <Content
            data={{
              content: data.acf.introduction_paragraph,
              gallery: data.gallery
            }}
          />
          <div className="container">
            <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
          </div>
        </section>
        <section className={styles.itinerary} id="itinerary">
          <div className="container">
            <div className={styles.bottomItems}>
              <div className={styles.left}>
                <Itinerary
                  data={{
                    itinerary: data.itinerary,
                  }}
                />
              </div>
              <div className={styles.right}>
                <TripFacts
                  data={{
                    country: JSON.parse(await getTaxonomyName(data.country[0], 'country')),
                    duration: data.duration.days,
                    area: JSON.parse(await getTaxonomyName(Math.max(...data.destination), 'destination')),
                    activity: JSON.parse(await getTaxonomyName(Math.max(...data.activities), 'activities')),
                    maxGroup: data.max_pax,
                    minGroup: data.min_pax,
                    difficulty: JSON.parse(await getTaxonomyName(data.difficulty[0], 'difficulty')),
                    additional: data.facts
                  }}
                />
                <PriceList />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.routeMap} id="routemap">
          <Map
            activityName={activityName}
            map={data.map}
          />
        </section>
        <section className={styles.detailedItinerary} id="detailed_itinerary">
          <DetailedItinerary
            data={data.itinerary}
          />
        </section>
        <section className={styles.links} id="faq">
          <Links
            data={data.acf.useful_links}
          />
        </section>
        <section className={styles.booking} id="booking">
          <Booking />
        </section>
        <section className={styles.testimonial} id="reviews">
          <Testimonial
            data={data.acf.testimonials}
          />
        </section>
        <div className={styles.recommendation}>
          <Recommendation
            data={data.acf.recommendation}
          />
        </div>
      </div>
    </div>
  )
}

export default Activity