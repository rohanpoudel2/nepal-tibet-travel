"use client"
import { useContext } from "react"
import styles from "./share.module.scss"
import { ModalContext } from "@/context/ModalContext"

const ShareBtn = () => {

  const { setOpenModal } = useContext(ModalContext);

  return (
    <>
      <button className={styles.shareBtn} onClick={() => setOpenModal(true)}>
        <span>Share this Blog</span>
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
    </>
  )
}

export default ShareBtn