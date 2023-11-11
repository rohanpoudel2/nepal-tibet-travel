import Image from "next/image";
import styles from "./recommendation.module.scss";
import Link from "next/link";
import { getRecommendedTrip, getTaxonomyName } from "@/utils/wordpress";
import { notFound } from "next/navigation";
import { getMedia } from "@/utils/wordpress";

const getRecommendationData = async (slug) => {
  const res = await getRecommendedTrip(slug);
  if (!res) return;
  const response = JSON.parse(res);
  if (response.length === 0) return notFound();
  return response;
}

const Recommendation = async ({ data }) => {

  const recommendationRes = await getRecommendationData(data.post_name);
  const recommendationData = recommendationRes[0];

  const cat = {
    activity: JSON.parse(await getTaxonomyName(Math.max(...recommendationData.activities), 'activities')).slug,
    region: JSON.parse(await getTaxonomyName(Math.max(...recommendationData.destination), 'destination')).slug,
    country: JSON.parse(await getTaxonomyName(Math.min(...recommendationData.destination), 'destination')).slug,
  }
  const image = await getMedia(recommendationData.featured_media);
  return (
    <section className="relative bg-gray-50">
      <div
        className="relative mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:px-8 gap-52"
      >
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Also explore
            <strong className="block font-extrabold text-sky-700">
              {data.post_title}
            </strong>
          </h1>
          <div className="mt-10 text-center">
            <Link
              href={`/country/${cat.country}/${cat.activity}/${cat.region}/${data.post_name}`}
              className="block w-full rounded bg-sky-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"
            >
              Explore
            </Link>
          </div>
        </div>
        <Image
          src={image.media_details.sizes.large.source_url}
          alt={recommendationData.title.rendered}
          width={800}
          height={300}
          className="w-1/2 h-1/2 object-cover rounded-xl"
        />
      </div>
    </section >
  )
}

export default Recommendation