import styles from "./detaileditinerary.module.scss";

const DetailedItinerary = ({ data }) => {
  return (
    <div className="container">
      <div className={styles.detailedItinerary}>
        <h2 className={styles.title}>
          Detailed Itinerary
        </h2>
        <div className={styles.days}>
          {
            data.itinerary.map((d, i) => (
              <div className={styles.day} key={i}>
                <h4 className={styles.head}>
                  Day 0{i + 1} - {d.itinerary.itinerary_title}
                </h4>
                <div className={styles.desc}>
                  <p>
                    {d.itinerary.itinerary_description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DetailedItinerary