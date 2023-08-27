import HomeActivity from './HomeActivity'
import Title from '@/components/ui/title/Title'

const HomeActivities = () => {
  return (
    <div className="container">
      <section>
        <Title
          title="Nepal activities"
          subtitle={`What to do`}
        />
        <div className='mt-[38px] grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[50px]'>
          <HomeActivity />
          <HomeActivity />
          <HomeActivity />
          <HomeActivity />
        </div>
      </section >

    </div>
  )
}

export default HomeActivities