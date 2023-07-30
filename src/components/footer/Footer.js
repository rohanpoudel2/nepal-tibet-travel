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
          <div className={styles.socials}>
            <span className={styles.title}>
              Find us on
            </span>
            <div className={styles.social_icons}>
              <Image
                src="/images/facebook.png"
                width={25}
                height={25}
                alt="Facebook"
                className={styles.icon_image}
              />
              <Image
                src="/images/instagram.png"
                width={25}
                height={25}
                alt="Instagram"
                className={styles.icon_image}
              />
              <Image
                src="/images/twitter.png"
                width={25}
                height={25}
                alt="Twitter"
                className={styles.icon_image}
              />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.items}>
            <div className={styles.item}>
              <h5 className={styles.title}>
                Address
              </h5>
              <p className={styles.address}>
                Post Box Number:21187 <br />
                J.P. Marg, Chhetrapati, Thamel, Kathmandu, Nepal <br />
                Landline: +977-1-5348972, 5360219 <br />
                Mobile/Whatsapp: +977-9851038450
              </p>
            </div>
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
                  Volunteer and Social Works
                </span>
                <Link href="/blogs" className={styles.link}>
                  Clients Testinominals
                </Link>
                <Link href="/blogs" className={styles.link}>
                  Blogs
                </Link>
              </div>
            </div>
            <div className={styles.item}>
              <h5 className={styles.title}>
                Legal
              </h5>
              <div className={styles.links}>
                <span className={styles.link}>
                  Terms and Conditions
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
              width={400}
              height={100}
              className={styles.image}
            />
            <div className={styles.titles}>
              <h4 className={styles.featuredWebsites}>
                Great Himalaya Trek
              </h4>
              <span className={styles.featuredWebsite_subtitle}>1,700 km trek through the Himalayas</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.companystrip}>
        <div className="container">
          <div className={styles.companyStripItems}>
            <div className={styles.logo} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <Image
                src="/images/mactrek_small.svg"
                alt="MacTrek Logo"
                width={50}
                height={50}
                className={styles.image}
              />
              <span>MacTrek, 2023 ©</span>
            </div>
            <div className={styles.affiliated}>
              <span className={styles.title}>
                Affiliated with:
              </span>
              <div className={styles.affiliate}>
                <Image
                  src="/images/ntb.jpeg"
                  alt="Nepal Tourism Board"
                  width={50}
                  height={50}
                  className={styles.affiliate_Image}
                />
                <Image
                  src="/images/nma.png"
                  alt="Nepal Mountaineering Association"
                  width={50}
                  height={50}
                  className={styles.affiliate_Image}
                />
                <Image
                  src="/images/tann.jpeg"
                  alt="Trekking Agencies Association of Nepal"
                  width={50}
                  height={50}
                  className={styles.affiliate_Image}
                />
              </div>
            </div>
            <div className={styles.partners}>
              <span>We accept:</span>
              <div className={styles.partnerList}>
                <Image
                  src="/images/visa.png"
                  width={50}
                  height={50}
                  alt="Visa"
                />
                <Image
                  src="/images/master_card.png"
                  width={50}
                  height={50}
                  alt="Visa"
                />
                <Image
                  src="/images/american_express.png"
                  width={50}
                  height={50}
                  alt="Visa"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer