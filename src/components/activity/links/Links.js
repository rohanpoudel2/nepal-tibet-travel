import Link from "next/link";
import styles from "./links.module.scss";

const Links = ({ data }) => {
  return (
    <div className="container">
      <div className={styles.links}>
        <h3 className={styles.title}>
          Useful Links :
        </h3>
        <div className={styles.useful_links}>
          {
            data.map((d, i) => (
              <Link href={d.link?.url} className={styles.link} key={i}>
                {d.link?.title}
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Links