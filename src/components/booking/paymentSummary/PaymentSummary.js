import { useState } from "react";
import styles from "./paymentsummary.module.scss";

const PaymentSummary = () => {

  const [referral, setReferral] = useState(null);

  return (
    <div className={styles.paymentSummary}>
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
            USD ${1825 * (3 / 100)}
          </span>
        </div>
      </div>
      <div className={styles.referral}>
        <input type="text" name="referral" placeholder="Enter Referral Code" className={styles.input} onChange={(e) => setReferral(e.target.value)} value={referral} />
        <button className={styles.btn}>
          Check Referral Code
        </button>
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
  )
}

export default PaymentSummary