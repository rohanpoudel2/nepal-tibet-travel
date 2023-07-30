"use client"
import styles from "./sharebutton.module.scss";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "fit-content",
  bgcolor: 'background.paper',
  borderRadius: "20px",
  boxShadow: 24,
  p: 5,
};

const ShareButton = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const urlRef = useRef('');

  useEffect(() => {
    urlRef.current = window.location.href;
  }, []);

  return (
    <>
      <button className={styles.shareBtn} onClick={() => setOpen(true)}>
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
        Share this Trek
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="relative flex flex-col gap-5 mx-10">
            <h1 className="text-4xl text-center mt-5">
              Spread the Word, Share this Trek 😀
            </h1>
            <div className="relative flex item-center p-5 pr-24 bg-gray-100 rounded-2xl text-[1rem]">
              {urlRef?.current}
              <div className="absolute right-5 text-3xl">
                <i className="fa-solid fa-copy"></i>
              </div>
            </div>
            <div className="flex gap-10 justify-center">
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={50}
                height={50}
              />
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                width={50}
                height={50}
              />
              <Image
                src="/images/linkedin.png"
                alt="Linkedin"
                width={50}
                height={50}
              />
              <Image
                src="/images/twitter.png"
                alt="twitter"
                width={50}
                height={50}
              />
            </div>
            <div className="absolute top-[-20px] right-[-20px] text-3xl cursor-pointer" onClick={handleClose}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default ShareButton