import TourCard from "@/components/ui/tour-card"

const HomeActivity = ({ data, country }) => (
  <TourCard
    image={data?.image}
    name={data?.term_name}
    slug={data?.term_slug}
    description={data?.term_description}
    country={country}
    count={data?.count}
  />
);

export default HomeActivity