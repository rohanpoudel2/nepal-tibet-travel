"use client"
import { useForm } from "react-hook-form";
import styles from "./form.module.scss";
import { countries } from "@/utils/countryList";
import validator from "validator";
import { useState } from "react";

const Form = () => {
  const [cardErrorMSG, setCardErrorMSG] = useState(null);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setCardErrorMSG(null);
    if (validator.isCreditCard(data?.cardnumber)) {
      console.log("ALL GOOD");
      console.log(data);
    } else {
      console.log("NOT GOOD");
      setCardErrorMSG("Enter a valid card number");
    }
  }

  let date = 0;

  const month = [];
  const year = [];
  const multiplesOfTwo = [1];

  while (true) {
    date = date + 1;
    month.push(String(date).padStart(2, '0'));
    if (date === 12) {
      const currentYear = parseInt(new Date().getFullYear().toString().slice(-2));
      const endYear = currentYear + 10;
      for (let i = currentYear; i <= endYear; i++) {
        year.push(i.toString().padStart(2, '0'));
      }

      for (let i = 2; i <= 20; i += 2) {
        multiplesOfTwo.push(i);
      }

      break;
    }
  }

  return (
    <div className={styles.bookingForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formElement}>
          <div className={styles.left}>
            <span className={styles.sn}>
              01
            </span>
            <h2 className={styles.title}>
              Personal Details
            </h2>
          </div>
          <div className={styles.right}>
            <div className={styles.inputElement}>
              <input type="text" {...register("firstname", { required: true, maxLength: 25, pattern: /^[A-Za-z]+$/i })} placeholder="Firstname" className={styles.input} aria-invalid={errors.firstname ? "true" : "false"} />
              {errors.firstName?.type === 'required' && <p className={styles.error} role="alert">First name is required</p>}
              {errors.firstName?.type === 'pattern' && <p className={styles.error} role="alert">Enter a valid first name</p>}
            </div>
            <div className={styles.inputElement}>
              <input type="text" {...register("lastname", { required: true, maxLength: 25, pattern: /^[A-Za-z]+$/i })} placeholder="Lastname" className={styles.input} aria-invalid={errors.lastname ? "true" : "false"} />
              {errors.lastname?.type === 'required' && <p className={styles.error} role="alert">Last name is required</p>}
              {errors.lastname?.type === 'pattern' && <p className={styles.error} role="alert">Enter a valid last name</p>}
            </div>
            <div className={styles.inputElement}>
              <input type="email" {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} placeholder="Email Address" className={styles.input} aria-invalid={errors.email ? "true" : "false"} />
              {errors.email?.type === 'required' && <p className={styles.error} role="alert">Email is required</p>}
              {errors.email?.type === 'pattern' && <p className={styles.error} role="alert">Enter a valid email</p>}
            </div>
            <div className={styles.inputElement}>
              <select {...register("country", { required: true })} placeholder="Select Country" className={styles.input} aria-invalid={errors.country ? "true" : "false"} >
                {countries?.map((country, index) => (
                  <option value={country.name} key={index}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country?.type === 'required' && <p className={styles.error} role="alert">Email is required</p>}
              {errors.country?.type === 'pattern' && <p className={styles.error} role="alert">Enter a valid email</p>}
            </div>
          </div>
        </div>
        <div className={styles.formElement}>
          <div className={styles.left}>
            <span className={styles.sn}>
              02
            </span>
            <h2 className={styles.title}>
              Trip Details
            </h2>
          </div>
          <div className={styles.right}>
            <div className={styles.inputElement}>
              <input type="text" {...register("trip", { required: true })} placeholder="Trip / Trek Name" className={styles.input} aria-invalid={errors.trip ? "true" : "false"} readOnly value="Everest Base Camp Trek" id="12" />
              {errors.trip?.type === 'required' && <p className={styles.error} role="alert">Please refresh the page</p>}
            </div>
            <div className={styles.inputElement}>
              <select {...register("size", { required: true, pattern: /^\d+$/ })} className={`${styles.input}`} defaultValue="Group Size">
                <option value="Group Size" disabled selected hidden>Group Size</option>
                {
                  multiplesOfTwo?.map((size, index) => (
                    <option value={size} key={index}>
                      {size}
                    </option>
                  ))
                }
              </select>
              {errors.size?.type === 'pattern' && <p className={styles.error} role="alert">Select your Group Size</p>}
            </div>
          </div>
        </div>
        <div className={styles.formElement}>
          <div className={styles.left}>
            <span className={styles.sn}>
              03
            </span>
            <h2 className={styles.title}>
              Payment Method
            </h2>
          </div>
          <div className={styles.right}>
            <div className={styles.paymentOptions}>
              <span>Payment Options</span>
              <div className={styles.paymentOption}>
                <label htmlFor="full">Pay Full Amount</label>
                <input type="radio" {...register("payment_type", { required: true })} name="full" className={styles.radioInput} required />
              </div>
              <div className={styles.paymentOption}>
                <label htmlFor="full">Pay Deposit Only</label>
                <input type="radio" {...register("payment_type", { required: true })} name="full" className={styles.radioInput} />
              </div>
              {errors.payment_type?.type === 'required' && <p className={styles.error} role="alert">Payment Type is Required</p>}
            </div>
            <div className={styles.cardInput}>
              <div className={styles.cardNumber}>
                <input type="number" pattern="[0-9]" {...register("cardnumber", { required: true })} className={`${styles.input} ${styles.cardNumberInput}`} placeholder="Credit / Debit Card Number" />
                {errors.cardnumber?.type === 'required' && <p className={styles.error} role="alert">Card Number is Required</p>}
                {cardErrorMSG && <p className={styles.error} role="alert">{cardErrorMSG}</p>}
              </div>
              <div className={styles.cardMonth}>
                <select {...register("cardmonth", { required: true, pattern: /^\d+$/ })} className={`${styles.input} ${styles.cardDate}`} defaultValue="MM">
                  <option value="MM" disabled selected hidden>MM</option>
                  {
                    month?.map((month, index) => (
                      <option value={month} key={index}>
                        {month}
                      </option>
                    ))
                  }
                </select>
                {errors.cardmonth?.type === 'pattern' && <p className={styles.error} role="alert">Select a Exp Month</p>}
              </div>
              <div className={styles.cardYear}>
                <select {...register("cardyear", { required: true, pattern: /^\d+$/ })} className={`${styles.input} ${styles.cardDate}`} defaultValue="YY">
                  <option value="YY" disabled hidden>YY</option>
                  {
                    year?.map((year, index) => (
                      <option value={year} key={index}>
                        {year}
                      </option>
                    ))
                  }
                </select>
                {errors.cardyear?.type === 'pattern' && <p className={styles.error} role="alert">Select a Exp Year</p>}
              </div>
              <div className={styles.cardCVV}>
                <input type="number" pattern="[0-9]" {...register("cvv", { required: true, pattern: /^\d{3,4}$/ })} className={styles.input} placeholder="CVV" />
                {errors.cvv?.type === 'required' && <p className={styles.error} role="alert">Card Number is Required</p>}
                {errors.cvv?.type === 'pattern' && <p className={styles.error} role="alert">Enter a valid cvv</p>}
              </div>
            </div>
          </div>
          <div className={styles.terms}>
            <input type="checkbox" {...register("terms", { required: true })} />
            <span>I accept booking terms and conditions.</span>
            {errors.terms?.type === 'required' && <p className={styles.error} role="alert">Terms & Condition must be accepted</p>}
          </div>
          <button type="submit" className={styles.btn}>
            Pay Now
          </button>
        </div>
      </form >
    </div >
  )
}

export default Form