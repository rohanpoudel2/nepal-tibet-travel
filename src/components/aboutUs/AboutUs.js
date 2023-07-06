import Image from "next/image";
import styles from "./aboutus.module.scss";

const AboutUs = () => {
  return (
    <div className="container">
      <section className={`${styles.aboutus}`}>
        <div className={styles.left}>
          <h4 className={styles.title}>About us</h4>
          <div className={styles.desc}>
            <p>
              Nepaltibettravel.com, a tour operator, specializes in providing well-organized tour packages in Nepal, Tibet, India and Bhutan. Having dealt with travel to the Himalayas since 1995, we are trusted by more and more clients to organize a memorable holiday experience. We can arrange any itinerary to suit a client needs and budget. We work closely with many reputed hotels, airlines and properties so that the clients can always be assured of the best possible service and value. Our brand new camping equipments and deluxe vehicles are always praised by our clients. Our vehicles are well maintained and facilitated with air conditioners and good luggage transport.
              Our consultants have all travelled extensively throughout Nepal, Tibet, Bhutan, Sikkim and Darjeeling and our recommendations are based on personal experience. Our professional tour and trek guides accompany you in all our tours to assist and answer your questions.
            </p>
          </div>
          <button>
            Learn More
          </button>
        </div>
        <div className={styles.right}>
          <Image
            src="/images/narayan.jpg"
            alt="Narayan MacTrek"
            width={800}
            height={800}
          />
          <div className={styles.details}>
            <span className={styles.name}>
              Narayan Poudel
            </span>
            <div className={styles.position}>
              Owner - MacTrek
            </div>
          </div>
        </div>
      </section >
    </div>
  )
}

export default AboutUs