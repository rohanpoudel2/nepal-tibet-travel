"use client"
import ShareModel from "@/components/modal/Modal";
import styles from "./sharebutton.module.scss";
import { useState } from "react";

const ShareButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className={styles.shareBtn} onClick={() => setOpen(true)}>
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
        Share this Trek
      </button>
      {open && <ShareModel set={setOpen} show={open} />}
    </>
  )
}

export default ShareButton