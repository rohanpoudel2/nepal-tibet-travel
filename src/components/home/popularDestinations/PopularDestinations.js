import PopularDestination from "../popularDestination/PopularDestination";
import Title from "@/components/ui/title/Title";

const PopularDestinations = ({ data }) => {

  return (
    <div className="container">
      <section>
        <Title
          title={data?.title}
          subtitle={data?.sub_title}
        />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-10">
          {
            data?.card.map((popularDestination, i) => (
              <PopularDestination data={popularDestination} key={i} />
            ))
          }
        </div>
      </section>
    </div >
  )
}

export default PopularDestinations