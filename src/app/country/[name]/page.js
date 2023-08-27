import Hero from "@/components/country/hero/Hero";
import styles from "./country.module.scss";
import CountryFacts from "@/components/country/facts/Facts";
import CountryActivityCard from "@/components/ui/country-activity-card";
import Title from "@/components/ui/title/Title";

const Country = ({ params }) => {
  const { name } = params;
  return (
    <div className={styles.country}>
      <Hero
        countryName={name}
      />
      <CountryFacts />
      {/* <FeaturedTours /> */}
      {/* <Activities type="icon" /> */}
      <section>
        <div className="container">
          <Title
            title="Nepal activities"
            subtitle={`What to do`}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[50px] mt-[38px]">
            <CountryActivityCard />
            <CountryActivityCard />
            <CountryActivityCard />
            <CountryActivityCard />
            <CountryActivityCard />
            <CountryActivityCard />
            <CountryActivityCard />
            <CountryActivityCard />
            <CountryActivityCard />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Country