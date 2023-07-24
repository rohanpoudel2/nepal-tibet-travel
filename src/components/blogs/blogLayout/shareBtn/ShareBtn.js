"use client"
import { useState, useEffect } from "react"
import styles from "./share.module.scss"
import ShareModal from "@/components/modal/Modal";
import { usePathname } from "next/navigation";

const ShareBtn = () => {

  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowModal(false);
  }, [pathname]);

  return (
    <>
      <button className={styles.shareBtn} onClick={() => setShowModal(!showModal)}>
        <span>Share this Blog</span>
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
      {
        showModal && <ShareModal show={showModal} set={setShowModal} />
      }
    </>
  )
}

export default ShareBtn