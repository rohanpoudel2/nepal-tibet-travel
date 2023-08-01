"use client"
import { ModalContext } from "@/context/ModalContext";
import styles from "./sharebutton.module.scss";
import { useContext } from "react";
import Modal from "@/components/ui/modal/Modal";

const ShareButton = () => {

  const { setOpenModal } = useContext(ModalContext);

  return (
    <>
      <button className={styles.shareBtn} onClick={() => setOpenModal(true)}>
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
        Share this Trek
      </button>
    </>
  )
}

export default ShareButton