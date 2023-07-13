import Hero from "@/components/country/hero/Hero";
import styles from "./country.module.scss";
import CountryFacts from "@/components/country/facts/Facts";
import FeaturedTours from "@/components/country/featuredTours/FeaturedTours";

const Country = ({ params }) => {
  const { name } = params;
  return (
    <div className={styles.country}>
      <Hero
        countryName={name}
      />
      <CountryFacts />
      <FeaturedTours />
    </div>
  )
}

export default Country