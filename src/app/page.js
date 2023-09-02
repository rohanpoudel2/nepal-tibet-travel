import styles from './page.module.scss'
import Hero from '@/components/home/hero/Hero'
import HomeFilter from '@/components/home/homefilter/HomeFilter'
import PopularDestinations from '@/components/home/popularDestinations/PopularDestinations'
import AboutUs from '@/components/home/aboutUs/AboutUs'
import Activities from '@/components/home/activities/Activities'
import TibetTour from '@/components/home/tibetTour/tibetTour'
import LatestUpdates from '@/components/home/latestUpdates/LatestUpdates'
import HomeActivities from '@/components/home/homeActivities/HomeActivities'
import WorkingWith from '@/components/home/workingWith/WorkingWith'

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <HomeFilter />
      <PopularDestinations />
      <AboutUs />
      <HomeActivities />
      {/* <Activities type="image" /> */}
      <TibetTour />
      <HomeActivities />
      <TibetTour />
      <HomeActivities />
      <TibetTour />
      <LatestUpdates />
      <WorkingWith />
    </div>
  )
}
