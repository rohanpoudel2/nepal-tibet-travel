import Title from "@/components/ui/title/Title";
import CountryActivityCard from "@/components/ui/country-activity-card";

const Best = ({ data }) => {
  return (
    <div className="container">
      <Title
        title={data.title}
        subtitle={data.subtitle}
      />
      <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        <CountryActivityCard />
        <CountryActivityCard />
        <CountryActivityCard />
        <CountryActivityCard />
      </div>
    </div>
  )
}

export default Best