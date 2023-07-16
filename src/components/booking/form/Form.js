"use client"
import { useForm } from "react-hook-form";
import styles from "./form.module.scss";
import Image from "next/image";
import Visa from "@/../public/images/visa.png";
import MasterCard from "@/../public/images/master_card.png";
import AmericanExpress from "@/../public/images/american_express.png";
import { countries } from "@/utils/countryList";
import { useEffect, useState } from "react";

const Form = () => {

  const [cardNumber, setCardNumber] = useState("");
  const [cardImage, setCardImage] = useState(null);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }

  useEffect(() => {
    if (cardNumber.charAt(0) === "4") {
      setCardImage(Visa);
    } else if (cardNumber.charAt(0) === "2" || cardNumber.charAt(0) === "5") {
      setCardImage(MasterCard);
    } else if (cardNumber.charAt(0) === "3") {
      setCardImage(AmericanExpress);
    } else {
      setCardImage(null);
    }
  }, [cardNumber]);

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
              <select type="country" {...register("country", { required: true })} placeholder="Email Address" className={styles.input} aria-invalid={errors.country ? "true" : "false"} >
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
              Payment Method
            </h2>
          </div>
          <div className={styles.right}>
            <div className={styles.cardInput}>
              <div className={styles.inputElement}>
                <div className={styles.card}>
                  {
                    cardImage &&
                    <Image
                      src={cardImage}
                      alt="Card Type"
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  }

                  <input type="text" {...register("cardnumber", { required: true, pattern: /^((4\d{3}|\d{4})[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}|5[1-5]\d{2}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}|6011[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}|3\d{3}[- ]?\d{6}[- ]?\d{5})$/ })} placeholder="Credit/Debit Card Number" className={`${styles.input} ${styles.cardInput}`} aria-invalid={errors.cardnumber ? "true" : "false"} onChange={(e) => setCardNumber(e.target.value)} />
                </div>
                {errors.cardnumber?.type === 'required' && <p className={styles.error} role="alert">Card Number is required</p>}
                {errors.cardnumber?.type === 'pattern' && <p className={styles.error} role="alert">Enter a valid card</p>}
              </div>
              <div className={styles.expire}>
                <div className={styles.inputElement}>
                  <input type="text" {...register("month", { required: true, pattern: /^(0?[1-9]|1[0-2])$/, maxLength: 2 })} placeholder="MM" className={styles.input} aria-invalid={errors.month ? "true" : "false"} />
                  {errors.month?.type === 'required' && <p className={styles.error} role="alert">!</p>}
                  {errors.month?.type === 'pattern' && <p className={styles.error} role="alert">Enter valid Month</p>}
                </div>
                <span>
                  /
                  {errors.month?.type === 'required' && <p className={styles.error} role="alert"> -</p>}
                  {errors.month?.type === 'pattern' && <p className={styles.error} role="alert"> -</p>}
                </span>
                <div className={styles.inputElement}>
                  <input type="text" {...register("year", { required: true, pattern: /^[1-9][0-9]$/, maxLength: 2 })} placeholder="DD" className={styles.input} aria-invalid={errors.year ? "true" : "false"} />
                  {errors.year?.type === 'required' && <p className={styles.error} role="alert">!</p>}
                  {errors.year?.type === 'pattern' && <p className={styles.error} role="alert">Enter valid Year</p>}
                </div>
              </div>
              <div className={styles.inputElement}>
                <input type="text" {...register("cvv", { required: true, pattern: /^\d{3,4}$/, maxLength: 4 })} placeholder="CVV" className={`${styles.input} ${styles.cvv}`} aria-invalid={errors.cvv ? "true" : "false"} />
                {errors.cvv?.type === 'required' && <p className={styles.error} role="alert">CVV is required</p>}
                {errors.cvv?.type === 'pattern' && <p className={styles.error} role="alert">Enter valid CVV</p>}
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
        </div>
      </form>
    </div>
  )
}

export default Form