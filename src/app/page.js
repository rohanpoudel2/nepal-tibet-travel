import styles from './page.module.scss'
import Hero from '@/components/home/hero/Hero'
import PopularDestinations from '@/components/home/popularDestinations/PopularDestinations'
import AboutUs from '@/components/home/aboutUs/AboutUs'
import TibetTour from '@/components/home/tibetTour/tibetTour'
import LatestUpdates from '@/components/home/latestUpdates/LatestUpdates'
import HomeActivities from '@/components/home/homeActivities/HomeActivities'
import WorkingWith from '@/components/home/workingWith/WorkingWith'
import { getHomePage } from "@/utils/wordpress";
import Favorite from '@/components/home/favorite/Favorite'
import CrossCountry from '@/components/home/crossCountry/CrossCountry'

const getData = async () => {
  const res = await getHomePage();
  if (!res) {
    return;
  }
  return JSON.parse(res);
}

export default async function Home() {
  const homeRes = await getData();
  const homeContent = homeRes.data;
  return (
    <div className={styles.home}>
      <Hero data={homeContent?.home_hero} />
      <Favorite />
      <PopularDestinations data={homeContent?.popular_destination} />
      <CrossCountry data={homeContent?.cross_country} />
      <AboutUs data={homeContent?.about_us} />
      {
        homeContent?.countries.map((data, i) => (
          <div key={i}>
            <HomeActivities data={data?.country_items.activity} />
            <TibetTour data={data?.country_items.group_tour} />
          </div>
        ))
      }
      <LatestUpdates data={homeContent?.latest_updates} />
      <WorkingWith data={homeContent?.working_with} />
    </div>
  )
}
