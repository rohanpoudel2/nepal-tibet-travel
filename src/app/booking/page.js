"use client"
import Form from "@/components/booking/form/Form";
import styles from "./booking.module.scss";

const Booking = () => {
  return (
    <div className="container">
      <div className={styles.booking}>
        <h1 className={styles.title}>
          Book your Everest Base Camp Trek in under 5 minutes.
        </h1>
        <div className={styles.dates}>
          <div className={styles.start}> July 23, 2023</div>
          <i className="fa-solid fa-arrow-right" ></i>
          <div className={styles.end}>August 7, 2023</div>
        </div>
        <div className={styles.payment}>

          <div className={styles.transaction}>
            <i className="fa-solid fa-lock"></i>
            <span>
              Your Transaction is Secured with SSL encryption.
            </span>
          </div>
          <div className={styles.details}>
            <div className={styles.left}>
              <Form />
            </div>
            <div className={styles.right}>
              <h2 className={styles.title}>
                Your Payment Summary
              </h2>
              <div className={styles.no}>
                Number of travellers: 1
              </div>
              <div className={styles.items}>
                <div className={styles.item}>
                  <h3 className={styles.title}>Tour Price</h3>
                  <span className={styles.price}>
                    USD $1825
                  </span>
                </div>
                <div className={styles.item}>
                  <h3 className={styles.title}>Bank Charge</h3>
                  <span className={styles.price}>
                    USD ${182}
                  </span>
                </div>
              </div>
              <div className={styles.totalAmountDue}>
                <div className={styles.title}>
                  Amount Due
                </div>
                <div className={styles.price}>
                  USD 1980
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking