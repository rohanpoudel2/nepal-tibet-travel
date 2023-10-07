import Hero from "@/components/country/hero/Hero";
import styles from "./country.module.scss";
import CountryFacts from "@/components/country/facts/Facts";
import CountryActivityCard from "@/components/ui/country-activity-card";
import Title from "@/components/ui/title/Title";
import { getBlog } from "@/utils/wordpress";
import Link from "next/link";
import { notFound } from "next/navigation";

const getData = async (slug) => {
  const res = await getBlog(slug, 'country-information');
  if (!res) {
    return;
  }
  let response = JSON.parse(res);
  if (response.length === 0 || response[0]?.acf?.hero === null) {
    return notFound();
  }
  return response;
}

const Country = async ({ params }) => {

  const { name } = params;

  const countryRes = await getData(name);
  const countryResContent = countryRes[0];

  return (
    <div className={styles.country}>
      <Hero
        data={{
          title: countryResContent?.acf?.hero?.title,
          image: countryResContent?.acf?.hero?.image
        }}
      />
      <CountryFacts
        data={{
          map: countryResContent?.acf?.country_map,
          title: countryResContent?.slug,
          facts: countryResContent?.acf?.facts,
          information: countryResContent?.acf?.information,
          information_content: countryResContent?.acf?.information_content,
        }}
      />
      <section>
        <div className="container">
          <Title
            title={countryResContent?.acf?.activity_title.title}
            subtitle={countryResContent?.acf.activity_title.sub_title}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[50px] mt-[38px]">
            {
              countryResContent?.acf?.activity.map((data, i) => (
                <Link href={data.link.url} key={i}>
                  <CountryActivityCard data={{ ...data, country_name: countryResContent?.slug }} />
                </Link>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Country