import Hero from "@/components/activity/hero/Hero";
import styles from "./activity.module.scss";
import DetailedItinerary from "@/components/activity/detailedItinerary/DetailedItinerary";
import Links from "@/components/activity/links/Links";
import Testimonial from "@/components/activity/testimonial/Testimonial";
import Recommendation from "@/components/activity/recommendation/Recommendation";
import Booking from "@/components/activity/booking/Booking";
import { notFound } from "next/navigation";
import { getTripInfo } from "@/utils/wordpress";
import { getRegionName } from "@/utils/functions";
import Faq from "@/components/activity/faq/Faq";
import { Separator } from "@/components/ui/separator";
import Sidebar from "@/components/activity/sidebar/Sidebar";
import RouteMap from "@/components/activity/routemap/RouteMap";

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
  const activityResponse = await getTripData(slug, params.activity, params.name, getRegionName(params.region));
  const data = activityResponse;
  const acf = data.acf;
  console.log(acf.recommendation);
  return (
    <div className="container">
      <Hero data={{
        post: data.post,
        featured_media: data.featured_media,
      }} />
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-8 mt-10">
        <div className="col-span-3 order-2 lg:order-1">
          <h1 className="text-3xl">{data.post.post_title}</h1>
          <Separator className="mt-5" />
          <div className="flex items-center gap-5 mt-3 flex-wrap">
            <div className="flex gap-2 items-center font-semibold text-gray-500">
              <i className="fa-regular fa-clock" />
              {acf.duration}
            </div>
            <div className="flex gap-2 items-center font-semibold text-gray-500">
              <i className="fa-solid fa-person-hiking" />
              {data.activities[0]}
            </div>
            <div className="flex gap-2 items-center font-semibold text-gray-500">
              <i className="fa-solid fa-scale-unbalanced" />
              {data.difficulty[0]}
            </div>
            <div className="flex gap-2 items-center font-semibold text-gray-500">
              <span>Max Pax: {acf.group_size.max_group}</span>
            </div>
            <div className="flex gap-2 items-center font-semibold text-gray-500">
              <span>Min Pax: {acf.group_size.min_group}</span>
            </div>
            <div className="flex gap-2 items-center font-semibold text-gray-500">
              <i className="fa-solid fa-tree" />
              <span>{acf.best_season}</span>
            </div>
          </div>
          <div className="mt-5">
            <div className="prose lg:prose-lg max-w-none text-justify" dangerouslySetInnerHTML={{ __html: data.post.post_content }} />
            <section>
              <RouteMap title={data.post.post_title} image={data.acf.route_map} />
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
        <div className="lg:order-1">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Activity