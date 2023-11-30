import HomeActivity from './HomeActivity'
import Title from '@/components/ui/title/Title'

const HomeActivities = ({ data }) => (
  <div className="container">
    <section>
      <Title
        title={data?.title}
        subtitle={data?.sub_title}
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-[38px]">
        {
          Object.keys(data.activity).map((key) => {
            const activity = data.activity[key];
            return (
              <HomeActivity country={data.country_name} data={activity} key={key} />
            )
          })
        }
      </div>
    </section >
  </div>
);

export default HomeActivities