import Hero from "@/components/country/hero/Hero";
import CountryFacts from "@/components/country/facts/Facts";
import Image from "next/image";
import { getBlog, getCountryPage } from "@/utils/wordpress";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/breadcrumb";
import Best from "@/components/country/best/best";

const getData = async (country) => {
  const res = await getCountryPage({ country });
  if (!res) {
    return;
  }
  let response = JSON.parse(res);
  if (response.length === 0 || response?.acf.top_rated_treks.length === 0) {
    return notFound();
  }
  return response;
}

const Country = async ({ params }) => {

  const { name } = params;

  const countryRes = await getData(name);
  const initialData = countryRes[0];
  const acf = countryRes['acf'];

  return (
    <div className="flex flex-col">
      <section>
        <Hero
          data={{
            country: name[0].toUpperCase() + name.slice(1),
            title: acf?.hero?.title,
            image: acf?.hero?.image,
            facts: acf?.facts,
            description: initialData?.post_content,
          }}
        />
      </section>
      <CountryFacts
        data={{
          information: acf.information
        }}
      />
      <section>
        <Best
          data={{
            title: "Best Activity Region",
            subtitle: name,
            list: acf.best_activity_region,
            toMap: acf.map_activities,
            country: name
          }}
        />
      </section>
      <section className="mt-0">
        <Best
          data={{
            title: "Top Rated Treks",
            subtitle: name,
            list: acf.top_rated_treks,
            country: name
          }}
        />
      </section>
    </div>
  )
}

export default Country