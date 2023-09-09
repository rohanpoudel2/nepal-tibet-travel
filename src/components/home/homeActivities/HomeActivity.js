import TourCard from "@/components/ui/tour-card"

const HomeActivity = ({ data }) => {
  return (
    <TourCard
      image={data?.image.url}
      tourName={data?.title}
      desc={data?.description}
      rating={data?.rating}
      button={data?.button}
    />
  )
}

export default HomeActivity