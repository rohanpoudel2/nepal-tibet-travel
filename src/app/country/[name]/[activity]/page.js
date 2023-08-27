import Hero from "@/components/country/trekking/hero/Hero"
import styles from "./trekking.module.scss"
import Activities from "@/components/home/activities/Activities";
import RegionCard from "@/components/country/trekking/regionCard/RegionCard";

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
        <div className={styles.trekkingAreas}>
          <section className="grid sm:grid-cols-3 md:grid-cols-4 gap-[50px]">
            <RegionCard
              image="https://images.unsplash.com/photo-1509883488717-779cd2d85976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2397&q=80"
              name="Everest Region"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, amet soluta."
            />
            <RegionCard
              image="https://images.unsplash.com/photo-1509883488717-779cd2d85976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2397&q=80"
              name="Everest Region"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, amet soluta."
            />
            <RegionCard
              image="https://images.unsplash.com/photo-1509883488717-779cd2d85976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2397&q=80"
              name="Everest Region"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, amet soluta."
            />
            <RegionCard
              image="https://images.unsplash.com/photo-1509883488717-779cd2d85976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2397&q=80"
              name="Everest Region"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, amet soluta."
            />
            <RegionCard
              image="https://images.unsplash.com/photo-1509883488717-779cd2d85976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2397&q=80"
              name="Everest Region"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, amet soluta."
            />
            <RegionCard
              image="https://images.unsplash.com/photo-1509883488717-779cd2d85976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2397&q=80"
              name="Everest Region"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, amet soluta."
            />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Trekking