import styles from "./detaileditinerary.module.scss";

const DetailedItinerary = () => {
  return (
    <div className="container">
      <div className={styles.detailedItinerary}>
        <h2 className={styles.title}>
          Detailed Itinerary
        </h2>
        <div className={styles.days}>
          <div className={styles.day}>
            <h4 className={styles.head}>
              Day 01 - (Arrival Day) Kathmandu
            </h4>
            <div className={styles.desc}>
              <p>
                We start the trip on arrival at Kathmandu with airport pick up service. Since no activities are planned on day one, you can arrive at your own time. A briefing of the trip will be given by the tour/trek guide.
              </p>
            </div>
          </div>
          <div className={styles.day}>
            <h4 className={styles.head}>
              Day 02 - Sightseeing in Kathmandu
            </h4>
            <div className={styles.desc}>
              <p>
                We begin the sightseeing tour by our visit to Boudhanath Stupa; a place of worship for the Buddhist, the shrine is one of great importance to the Buddhist religion. Here we shall visit monasteries and watch the monks in prayer. We will continue and make our way to Pashupatinath temple, considered one of the holiest sites dedicated to Lord Shiva. This temple holds great importance as a place of worship to the Hindus. It forms a major part of the people on a day to day basis. Here you can watch devotes offering prayers and watch the activities that are undertaken in the temple premises. The afternoon is free for shopping and leisure.
              </p>
            </div>
          </div>
          <div className={styles.day}>
            <h4 className={styles.head}>
              Day 03 - Fly to Lukla(2827m) and Trek to Phakding(2610m).
            </h4>
            <div className={styles.desc}>
              <p>
                Early in the morning we fly from Kathmandu to Lukla (2827m). The flight offers a spectacular view of the Himalayas as we fly parallel to the Himalayan giants bordering Nepal and Tibetan China. After landing we will meet with our porters for the trek. We will have time to explore the village before starting the trail. The trek starts with a descent towards the Dudh Koshi River where we join the main trail to Namche Bazaar. The walking is easy and we will soon reach our lodge at Phakding. 4-5 hours trek.
              </p>
            </div>
          </div>
          <div className={styles.day}>
            <h4 className={styles.head}>
              Day 04 - Trekking up to Namche Bazaar(3440m).
            </h4>
            <div className={styles.desc}>
              <p>
                We will ascend slowly on the route to Everest Base Camp. Advancing slowly will ensure acclimatization. We shall tread slowly from Phakding crossing the river to walk through tracts of blue pine and rhododendron forest that is very spectacular in the spring months when the flowers are in bloom. We will cross the Dudh Koshi at Benkar and enjoy great views of the snow peaks Kusum Kangaru and Thamserku. After Monjo the trek will be a little strenuous as it will involve more walking with a steep ascent to Namche Bazaar. From here, it is a short walk to the entrance of the National Park where our permits are checked before we descend quite steeply to Jorsale. The trek continues upstream on a flat terrain to the confluence of the Bhote Koshi and Dudh Koshi rivers. After crossing a large suspension bridge high above the river we climb steeply to the village of Namche Bazaar 3440m. A slow and steady pace is recommended on this section of the climb and we are encouraged to make the most of the fantastic photographic opportunities as the peaks of Everest, Lhotse, Nuptse, Ama Dablam and Taweche come into view. The effects of high altitude will slow down your pace a little, thus we encourage you to advance slowly. In Namche, we move into our lodge in the midst of the village and the rest of the afternoon is free to bargain for artifacts or embrace the spectacular scenery. 6-7 Hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedItinerary