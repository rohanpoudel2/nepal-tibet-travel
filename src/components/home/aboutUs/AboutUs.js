import ImageComponent from "@/components/Image/Image";
import styles from "./aboutus.module.scss";
import Link from "next/link";

const AboutUs = () => {

  const Image_Link = [
    "https://images.unsplash.com/photo-1670346044371-509da7ba16e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    "https://images.unsplash.com/photo-1585458859260-2981c2a7b665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2880&q=80",
    "https://images.unsplash.com/photo-1661345366637-b06cc07531d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2972&q=80",
    "https://images.unsplash.com/photo-1553140764-d647de0c1556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
  ];

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
          <Link href="/about-us">
            <button className={styles.btn}>
              Learn More
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <div className="grid grid-cols-2 grid-rows-2 gap-5 items-center place-content-center">
            {
              Image_Link?.map((link) => (
                <ImageComponent
                  image_link={link}
                  width={400}
                  height={400}
                  alt="Nepal Tibet Travel"
                />
              ))
            }
          </div>
        </div>
      </section >
    </div>
  )
}

export default AboutUs