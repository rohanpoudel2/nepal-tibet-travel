"use client"
import styles from "./booking.module.scss";
import ConfirmationModal from "./confirmationModal/ConfirmationModal";
import { useState } from "react";

const Booking = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <div className={styles.booking}>
        <h2 className={styles.title}>
          Booking
        </h2>
        <h4 className={styles.subtitle}>
          Select a departure Month
        </h4>
        <div className={styles.dates}>
          <div className={`${styles.date} ${styles.selected}`} onClick={() => setOpen(true)}>
            Jul 2023
          </div>
          <div className={styles.date} onClick={() => setOpen(true)}>
            Jul 2023
          </div>
          <div className={styles.date} onClick={() => setOpen(true)}>
            Jul 2023
          </div>
          <div className={styles.date} onClick={() => setOpen(true)}>
            Jul 2023
          </div>
          <div className={styles.date} onClick={() => setOpen(true)}>
            Jul 2023
          </div>
          <div className={styles.date} onClick={() => setOpen(true)}>
            Jul 2023
          </div>
          <div className={styles.date} onClick={() => setOpen(true)}>
            Jul 2023
          </div>
          <div className={styles.date} onClick={() => setOpen(true)}>
            Jul 2023
          </div>
          <div className={styles.date} onClick={() => setOpen(true)}>
            Jul 2023
          </div>
          <div className={styles.date} onClick={() => setOpen(true)}>
            Jul 2023
          </div>
          <div className={styles.date} onClick={() => setOpen(true)}>
            Jul 2023
          </div>
          <div className={styles.date} onClick={() => setOpen(true)}>
            Jul 2023
          </div>
        </div>
      </div>
      <ConfirmationModal open={open} setOpen={setOpen} />
    </div>
  )
}

export default Booking