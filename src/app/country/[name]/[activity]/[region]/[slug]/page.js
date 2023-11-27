import Hero from "@/components/activity/hero/Hero";
import DetailedItinerary from "@/components/activity/detailedItinerary/DetailedItinerary";
import Links from "@/components/activity/links/Links";
import Testimonial from "@/components/activity/testimonial/Testimonial";
import Recommendation from "@/components/activity/recommendation/Recommendation";
import Booking from "@/components/activity/booking/Booking";
import { notFound } from "next/navigation";
import { getTripInfo } from "@/utils/wordpress";
import { getRegionName } from "@/utils/functions";
import Faq from "@/components/activity/faq/Faq";
import Sidebar from "@/components/activity/sidebar/Sidebar";
import RouteMap from "@/components/activity/routemap/RouteMap";
import Starter from "@/components/activity/TripStarter/Starter";

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
  return (
    <div className="container">
      <Hero data={{
        post: data.post,
        featured_media: data.featured_media,
        destination: data.destination,
        ratings: acf.avg_rating,
        reviews: acf.testimonials.length,
      }} />
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-8 mt-10">
        <div className="col-span-3 order-2 lg:order-1">
          <Starter data={data} acf={acf} />
          <div className="mt-5">
            <div className="prose lg:prose-lg max-w-none text-justify" dangerouslySetInnerHTML={{ __html: data.post.post_content }} />
            <section>
              <RouteMap title={data.post.post_title} image={data.acf.route_map} />
            </section>
            <section id="detailed_itinerary">
              <DetailedItinerary
                data={{
                  itinerary: data.acf.itinerary_data,
                }}
              />
            </section>
            <section id="faq">
              <Faq data={data.acf.faq} />
            </section>
            <section id="booking">
              <Booking
                name={data.post.post_title}
                duration={data.acf.duration.split(' ')[0]}
                data={data.acf.booking_dates}
              />
            </section>
            <section id="reviews">
              <Testimonial
                data={data.acf.testimonials}
              />
            </section>
            <div>
              <Links
                data={data.acf.useful_links}
              />
            </div>
            <div>
              <Recommendation
                data={data.acf.recommendation}
              />
            </div>
          </div>
        </div>
        <div className="lg:order-1">
          <Sidebar
            prices={data.acf.prices}
            ratings={acf.avg_rating}
            reviews={acf.testimonials.length}
          />
        </div>
      </div>
    </div>
  )
}

export default Activity