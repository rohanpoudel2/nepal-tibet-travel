import TourCard from "@/components/ui/tour-card"

const HomeActivity = ({ data }) => (
  <TourCard
    image={data?.featured_image_url}
    tourName={data?.post_title}
    rating={data?.rating}
    price={data?.price}
    link={{
      country: data.country,
      activities: data.activities,
      destination: data.destination,
      slug: data.post_name
    }}
  />
);

export default HomeActivity