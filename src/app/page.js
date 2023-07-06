import Image from 'next/image'
import styles from './page.module.scss'
import Hero from '@/components/hero/Hero'
import HomeFilter from '@/components/homefilter/HomeFilter'
import PopularDestinations from '@/components/popularDestinations/PopularDestinations'
import AboutUs from '@/components/aboutUs/AboutUs'
import Activities from '@/components/activities/Activities'

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <HomeFilter />
      <PopularDestinations />
      <AboutUs />
      <Activities />
    </div>
  )
}
