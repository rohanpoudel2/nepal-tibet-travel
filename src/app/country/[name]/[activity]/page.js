// "use client"
import Hero from "@/components/country/trekking/hero/Hero"
import styles from "./trekking.module.scss"
import Activities from "@/components/home/activities/Activities";

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
        {/* <div className={styles.importantLinks}>
          <ImportantLinks image={"/images/ebc.jpeg"} text="Trekking Tips" />
          <ImportantLinks image={"https://images.pexels.com/photos/7813158/pexels-photo-7813158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} text="Nepal Transport" />
        </div> */}
        <div className={styles.trekkingAreas}>
          <section className={styles.areaSection}>
            <Activities type="image" areas={true} />
            {/* <div className={styles.areaDescription}>
              <h2 className={styles.areaTitle}>
                Kanchenjunga Area
              </h2>
              <div className={styles.areaDescription}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolorum impedit ad fugit nesciunt eligendi voluptatem, doloremque nostrum cum, a suscipit nobis eum vitae eos perspiciatis exercitationem? Sunt, corporis accusamus.
                </p>
              </div>
            </div> */}
            {/* <DataTable columns={columns} data={data} /> */}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Trekking