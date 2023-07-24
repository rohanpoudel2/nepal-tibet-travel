"use client"
import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <span className={styles.backtotop}>
            <i className="fa-solid fa-arrow-up"></i>
            Back to top
          </span>
          <form className={styles.newsletter}>
            <input type="email" className={styles.input} placeholder="Subscribe to our newsletter" />
            <button className={styles.btn}>
              Subscribe
            </button>
          </form>
        </div>
        <div className={styles.content}>
          <div className={styles.items}>
            <div className={styles.item}>
              <h5 className={styles.title}>
                Company
              </h5>
              <div className={styles.links}>
                <span className={styles.link}>
                  About us
                </span>
                <span className={styles.link}>
                  Work with us
                </span>
                <Link href="/blogs" className={styles.link}>
                  Blog and News
                </Link>
              </div>
            </div>
            <div className={styles.item}>
              <h5 className={styles.title}>
                Activities
              </h5>
              <div className={styles.links}>
                <span className={styles.link}>
                  Volunteer and Social Works
                </span>
              </div>
            </div>
            <div className={styles.item}>
              <h5 className={styles.title}>
                Legal
              </h5>
              <div className={styles.links}>
                <span className={styles.link}>
                  Terms of Service
                </span>
                <span className={styles.link}>
                  Privacy Policy
                </span>
              </div>
            </div>
          </div>
          <div className={styles.featuredWebsite}>
            <Image
              src="/images/ebc.jpeg"
              alt="Great Himalaya Trek"
              width={500}
              height={100}
              className={styles.image}
            />
            <h4 className={styles.featuredWebsites}>
              Great Himalaya Trek
            </h4>
          </div>
        </div>
      </div>
      <div className={styles.companystrip}>
        <div className="container">
          <div className={styles.logo} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
            <Image
              src="/images/mactrek_small.svg"
              alt="MacTrek Logo"
              width={50}
              height={50}
              className={styles.image}
            />
            <span>MacTrek, 2023</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer