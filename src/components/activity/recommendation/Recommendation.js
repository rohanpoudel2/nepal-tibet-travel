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
    <div className="container">
      <div className={styles.recommendation}>
        <h3 className={styles.title}>
          Also Explore
        </h3>
        <div className={styles.trip}>
          <Image
            src={image.media_details.sizes.large.source_url}
            alt={recommendationData.title.rendered}
            width={800}
            height={300}
            className={styles.image}
          />
          <div className={styles.desc}>
            <div className={styles.title}>
              {data.post_title}
            </div>
            <Link href={`/country/${cat.country}/${cat.activity}/${cat.region}/${data.post_name}`}>
              <button className={styles.btn}>
                Explore Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendation