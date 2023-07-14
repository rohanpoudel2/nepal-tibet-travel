"use client"
import ShareModel from "@/components/activity/shareModel/ShareModel";
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
      <ShareModel open={open} setOpen={setOpen} />
    </>
  )
}

export default ShareButton