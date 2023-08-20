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
          <div className="grid md:grid-cols-4 grid-cols-1 md:grid-rows-1 md:gap-10 gap-5">
            <div className="col-span-3 order-2 md:order-1">
              <Form />
            </div>
            <div className="col-span-1 order-1 md:order-2">
              <PaymentSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking