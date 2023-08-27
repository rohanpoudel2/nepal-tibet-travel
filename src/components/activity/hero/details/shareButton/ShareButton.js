"use client"
import styles from "./sharebutton.module.scss";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";

const ShareButton = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button className={styles.shareBtn} onClick={() => setOpenModal(true)}>
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
        Share this Trek
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}

export default ShareButton