import Image from "next/image";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <span className={styles.backtotop}>
          <i className="fa-solid fa-arrow-up"></i>
          Back to top
        </span>
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
                <span className={styles.link}>
                  Blog and News
                </span>
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
          <div className={styles.featuredTweet}>
            <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Congratulations Mr. Ravi Lamichhane <a href="https://twitter.com/hamrorabi?ref_src=twsrc%5Etfw">@hamrorabi</a> for being the first human without nation and geographic boundaries. The globe is round and spinning..there is light on the other side..never give up the hope, better days are coming 🙏</p>&mdash; Narayan Poudel (@NarayanMactrek) <a href="https://twitter.com/NarayanMactrek/status/1618966276638142465?ref_src=twsrc%5Etfw">January 27, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div>
        </div>
      </div>
      <div className={styles.companystrip}>
        <div className="container">
          <div className={styles.logo} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
            <Image
              src="/images/mactrek.svg"
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