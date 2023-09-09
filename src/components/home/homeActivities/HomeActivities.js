import HomeActivity from './HomeActivity'
import Title from '@/components/ui/title/Title'

const HomeActivities = ({ data }) => {
  return (
    <div className="container">
      <section>
        <Title
          title={data?.title}
          subtitle={data?.sub_title}
        />
        <div className='mt-[38px] grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[50px]'>
          {
            data?.activity.map((data, i) => (
              <HomeActivity data={data} key={i} />
            ))
          }
        </div>
      </section >

    </div>
  )
}

export default HomeActivities