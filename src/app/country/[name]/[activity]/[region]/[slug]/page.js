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
import { getTripInfo } from "@/utils/wordpress";
import { getRegionName } from "@/utils/functions";
import Faq from "@/components/activity/faq/Faq";

const getTripData = async (slug, activity, country, region) => {
  const data = {
    trip: slug,
    activity,
    country,
    region
  }
  const res = await getTripInfo(data);
  if (!res) return;
  const response = JSON.parse(res);
  if (response.length === 0) return notFound();
  return response;
}

const Activity = async ({ params }) => {
  let { slug } = params;
  const activityName = slug.replace(/-/g, " ");
  const activityResponse = await getTripData(slug, params.activity, params.name, getRegionName(params.region));
  const data = activityResponse;
  return (
    <div className={styles.activity}>
      <Hero data={{
        name: data.post.post_title,
        activity: data.activities[0],
        image: data.featured_media.sizes.full.url,
      }}
      />
      <div className={styles.detail}>
        <Nav />
        <section className={`${styles.content} ${styles.main_content}`} id="overview">
          <Content
            data={{
              content: data.acf.introduction_paragraph,
              gallery: data.acf.gallery
            }}
          />
          <div className="container">
            <div className="max-w-none prose prose-slate text-justify lg:prose-lg">
              <p>{data.post.post_content}</p>
            </div>
          </div>
        </section>
        <section className={styles.itinerary} id="itinerary">
          <div className="container">
            <div className={styles.bottomItems}>
              <div className={styles.left}>
                <Itinerary
                  data={{
                    itinerary: data.acf.itinerary_data,
                  }}
                />
              </div>
              <div className={styles.right}>
                <TripFacts
                  data={{
                    country: data.country[0],
                    duration: data.acf.duration,
                    area: data.destination[0],
                    activity: data.activities[0],
                    maxGroup: data.acf.group_size.max_group,
                    minGroup: data.acf.group_size.min_group,
                    difficulty: data.difficulty[0],
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
            map={data.acf.route_map}
          />
        </section>
        <section className={styles.detailedItinerary} id="detailed_itinerary">
          <DetailedItinerary
            data={{
              itinerary: data.acf.itinerary_data,
            }}
          />
        </section>
        <section className={styles.links} id="faq">
          <Faq data={data.acf.faq} />
        </section>
        <section className={styles.booking} id="booking">
          <Booking
            name={data.post.post_title}
            duration={data.acf.duration.split(' ')[0]}
            data={data.acf.booking_dates}
          />
        </section>
        <section className={styles.testimonial} id="reviews">
          <Testimonial
            data={data.acf.testimonials}
          />
        </section>
        <div>
          <Links
            data={data.acf.useful_links}
          />
        </div>
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