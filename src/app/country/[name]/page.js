import Hero from "@/components/country/hero/Hero";
import CountryFacts from "@/components/country/facts/Facts";
import Image from "next/image";
import { getBlog } from "@/utils/wordpress";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/breadcrumb";
import Best from "@/components/country/best/best";

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
    <div className="flex flex-col">
      <section>
        <Hero
          data={{
            country: name[0].toUpperCase() + name.slice(1),
            title: countryResContent?.acf?.hero?.title,
            image: countryResContent?.acf?.hero?.image,
            facts: countryResContent?.acf?.facts,
            description: countryResContent?.content.rendered,
          }}
        />
      </section>
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
        <Best
          data={{
            title: "Best Activity Region",
            subtitle: "Nepal"
          }}
        />
      </section>
      <section className="mt-0">
        <Best
          data={{
            title: "Top Rated Treks",
            subtitle: "Nepal"
          }}
        />
      </section>
    </div>
  )
}

export default Country