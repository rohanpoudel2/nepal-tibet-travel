"use client";
import styles from "./booking.module.scss";
import ConfirmationModal from "./confirmationModal/ConfirmationModal";
import { useState } from "react";

const parseDate = (dateStr) => {
  const [day, month, year] = dateStr?.split('/').map(Number);
  return new Date(year, month - 1, day);
};

const Booking = ({ data, duration, name }) => {
  const [open, setOpen] = useState({
    bookingDate: '',
    state: false
  });
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
          {
            data.map((booking, i) => (
              <div key={i} className={`${styles.date} ${i === 0 && styles.selected}`} onClick={() => setOpen({
                bookingDate: booking.booking_date,
                state: true
              })}>
                {parseDate(booking.booking_date || '1/1/1991').toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
              </div>
            ))
          }
        </div>
      </div>
      <ConfirmationModal open={open} setOpen={setOpen} duration={duration} name={name} />
    </div>
  )
}

export default Booking;
