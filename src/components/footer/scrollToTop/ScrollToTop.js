"use client"
import styles from "./scrolltotop.module.scss";

const ScrollToTop = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <span className={styles.backtotop} onClick={scrollToTop}>
      <i className="fa-solid fa-arrow-up"></i>
      Back to top
    </span>
  )
}

export default ScrollToTop