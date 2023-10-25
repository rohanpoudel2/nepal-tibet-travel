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
            data.map((itinerary, i) => (
              <div className={styles.day} key={i}>
                <h4 className={styles.head}>
                  Day 0{i + 1} - {itinerary.day}
                </h4>
                <div className={styles.desc}>
                  <p>
                    {itinerary.description}
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