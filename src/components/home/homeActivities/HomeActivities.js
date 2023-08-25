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
        <div className='mt-[38px] flex flex-wrap gap-[50px]'>
          <HomeActivity />
          <HomeActivity />
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