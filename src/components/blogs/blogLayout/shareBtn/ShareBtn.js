"use client"
import Modal from "@/components/ui/modal/Modal";
import styles from "./share.module.scss"
import { useState } from "react";

const ShareBtn = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button className={styles.shareBtn} onClick={() => setOpenModal(true)}>
        <span>Share this Blog</span>
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}

export default ShareBtn