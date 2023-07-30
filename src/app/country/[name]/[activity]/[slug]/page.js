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

const Activity = ({ params }) => {

  let { slug } = params;

  const activityName = slug.replace(/-/g, " ");

  return (
    <div className={styles.activity}>
      <Hero />
      <div className={styles.detail}>
        <Nav />
        <section className={styles.content} id="overview">
          <Content />
        </section>
        <section className={styles.itinerary} id="itinerary">
          <div className="container">
            <div className={styles.bottomItems}>
              <div className={styles.left}>
                <Itinerary />
              </div>
              <div className={styles.right}>
                <TripFacts />
                <PriceList />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.routeMap} id="routemap">
          <Map
            activityName={activityName}
          />
        </section>
        <section className={styles.detailedItinerary} id="detailed_itinerary">
          <DetailedItinerary />
        </section>
        <section className={styles.links} id="faq">
          <Links />
        </section>
        <section className={styles.booking} id="booking">
          <Booking />
        </section>
        <section className={styles.testimonial} id="reviews">
          <Testimonial />
        </section>
        <div className={styles.recommendation}>
          <Recommendation />
        </div>
      </div>
    </div>
  )
}

export default Activity