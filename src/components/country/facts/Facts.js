import Image from "next/image";
import styles from "./facts.module.scss";
import Fact from "../fact/fact";
import Options from "../options/Options";

const Facts = ({ data }) => {

  const createID = (title) => {
    return title.toLowerCase().split(' ').join('_');
  }

  return (
    <div className="container">
      <section className={styles.facts}>
        <Image
          src={data.map.sizes.large}
          alt={data.map.alt}
          width={800}
          height={400}
          className={styles.image}
        />
        <h2 className={styles.main_title}>
          About {data.title}
        </h2>
        <div className={styles.factsData}>
          {
            data.facts.map((fact, i) => (
              <Fact
                key={i}
                title={fact.fact.title}
                answer={fact.fact.data}
              />
            ))
          }
        </div>
        <div className={styles.shortDesc}>
          <p>
            Nepal is one of the richest countries in the world in terms of bio-diversity due to its unique geographical position and altitudinal variation. The elevation of the country ranges from 60m above sea level to the highest point on earth, Mt. Everest at 8848m, all within a distance of 150 km resulting into climatic conditions from sub-tropical to Arctic.
          </p>
        </div>
        <Options data={data?.information} />
        <div className={styles.content} id="about">
          {
            data?.information_content.map((information_content, i) => (
              <div key={i}>
                <h3 className={styles.title}>
                  {information_content.title}
                </h3>
                <div id={createID(information_content.title)} className={styles.content_body} dangerouslySetInnerHTML={{ __html: information_content.content }} />
              </div>
            ))
          }
        </div>
        <div className={styles.content} id="access">
          This is access
        </div>
        <div className={styles.content} id="entry">
          This is entry
        </div>
      </section >
    </div >
  )
}

export default Facts