import HomeActivity from './HomeActivity'
import Title from '@/components/ui/title/Title'

const HomeActivities = ({ data }) => (
  <div className="container">
    <section>
      <Title
        title={data?.title}
        subtitle={data?.sub_title}
      />
      <div className='mt-[38px] grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[50px]'>
        {
          Object.keys(data.activity).map((key) => {
            const activity = data.activity[key];
            return <HomeActivity country={data.country_name} data={activity} key={key} />
          })
        }
      </div>
    </section >
  </div>
);

export default HomeActivities