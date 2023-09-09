import Image from "next/image";
import styles from "./aboutus.module.scss";
import Link from "next/link";

const AboutUs = ({ data }) => {

  return (
    <div className="container">
      <section className={`${styles.aboutus}`}>
        <div className={styles.left}>
          <h4 className={styles.title}>
            {data?.title}
          </h4>
          <div className={styles.desc}>
            <p>
              {data?.description}
            </p>
          </div>
          <Link href={data?.button.button_link}>
            <button className={styles.btn}>
              {data?.button.button_text}
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <div className="grid grid-cols-2 grid-rows-2 gap-5 items-center place-content-center">
            {
              data?.image_grid?.image.map((data) => (
                <div className="h-40" key={data?.image.id}>
                  <Image
                    src={data?.image.sizes.medium_large}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    alt="Nepal Tibet Travel"
                  />
                </div>
              ))
            }
          </div>
        </div>
      </section >
    </div>
  )
}

export default AboutUs