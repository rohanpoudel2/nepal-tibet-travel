import styles from "./populardestination.module.scss";
import PopularDestination from "../popularDestination/PopularDestination";
import Title from "@/components/ui/title/Title";

const PopularDestinations = ({ data }) => {

  return (
    <div className="container">
      <section className={`${styles.popular}`}>
        <Title
          title={data?.title}
          subtitle={data?.sub_title}
        />
        <div className={styles.destinations}>
          {
            data?.card.map((popularDestination, i) => (
              <div className={styles.destination} key={i}>
                <PopularDestination data={popularDestination} />
              </div>
            ))
          }
        </div>
      </section >
    </div >
  )
}

export default PopularDestinations