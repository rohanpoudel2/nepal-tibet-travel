import styles from "./detaileditinerary.module.scss";

const DetailedItinerary = ({ data }) => {
  return (
    <div className="container">
      <div className={styles.detailedItinerary}>
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl mb-12">
          Detailed Itinerary
        </h2>
        <div className={styles.days}>
          {
            data.itinerary.map((d, i) => (
              <div className={styles.day} key={i}>
                <h4 className={`${styles.head} bg-gray-100`}>
                  Day 0{i + 1} - {d.itinerary.itinerary_title}
                </h4>
                <div className={`${styles.desc} text-justify`}>
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