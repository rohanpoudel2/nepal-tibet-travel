"use client"
import styles from "./modal.module.scss";
import { useRef, useEffect } from "react";

const Modal = ({ set, show, content }) => {

  const modalRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        set(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [show]);



  return (
    <div className={styles.sharemodal}>
      <div className={styles.shareOptions} ref={modalRef}>
        {content}
      </div>
    </div>
  )
}

export default Modal