"use client"
import Form from "@/components/booking/form/Form";
import styles from "./booking.module.scss";
import PaymentSummary from "@/components/booking/paymentSummary/PaymentSummary";

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
              <PaymentSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking