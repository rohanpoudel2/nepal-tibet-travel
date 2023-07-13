import Hero from "@/components/country/trekking/hero/Hero"
import styles from "./trekking.module.scss"
import TrekkingTips from "@/components/country/trekking/trekkingTips/TrekkingTips"
import TrekkingTours from "@/components/country/trekking/trekkingTours/TrekkingTours"

const Trekking = ({ params }) => {

  const { activity, name } = params;

  return (
    <div className={styles.trekking}>
      <Hero
        country={name}
        activity={activity.replace(/-/g, " ")}
      />
      <div className="container">
        <div className={styles.shortDesc}>
          <p>
            Nowhere else in the Himalaya you will find the Physical cultural and religion diversity which exists in Nepal. From the ancient animistic Bon religion of the western mountains and the Tibetan Buddhist culture of the Sherpa of Everest to the rich Hindu tradition of the heartland of the Kingdom. Nepal offers a unique kaleidoscope of South Asian culture. Combined with the world's most spectacular mountains and a truly warm and hospitable people, you have the ingredients of the experience of a lifetime.
          </p>
        </div>
        <TrekkingTips />
        <TrekkingTours />
      </div>
    </div>
  )
}

export default Trekking