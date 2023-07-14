"use client"
import styles from "./sharemodel.module.scss";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from "next/image";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "fit-content",
  height: "fit-content",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "20px"
};

const socialIcons = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px"
}

const ShareModel = ({ open, setOpen }) => {

  const handleClose = () => setOpen(false);

  return (
    <div className={styles.shareModel}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
      >
        <Box sx={style} className={styles.box}>
          <h3 className={styles.title} style={{ fontSize: "24px" }}>
            Share the Trekking Magic: Inspire Wanderlust!
          </h3>
          <h4 className={styles.subtitle} style={{ fontSize: "16px", fontWeight: "normal" }}>
            Spread the joy of trekking and ignite a passion for exploration!
          </h4>
          <div className={styles.shareLink} style={{ width: "100%", height: "50px", backgroundColor: "#e3e3e3e3", borderRadius: "20px", padding: "20px", textAlign: "center", display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", fontSize: "20px", letterSpacing: "1.2px", margin: "20px 0px" }}>
            https://www.nepaltibettravel.com
            <i className="fa-regular fa-clipboard"></i>
          </div>
          <div className={styles.socialIcons} style={socialIcons}>
            <div className={styles.socialIcon}>
              <Image
                src="/images/facebook.png"
                alt="Share to Facebook"
                width={40}
                height={40}
                className={styles.image}
              />
            </div>
            <div className={styles.socialIcon}>
              <Image
                src="/images/instagram.png"
                alt="Share to Instagram"
                width={40}
                height={40}
                className={styles.image}
              />
            </div>
            <div className={styles.socialIcon}>
              <Image
                src="/images/twitter.png"
                alt="Share to Twitter"
                width={40}
                height={40}
                className={styles.image}
              />
            </div>
            <div className={styles.socialIcon}>
              <Image
                src="/images/linkedin.png"
                alt="Share to Linkedin"
                width={40}
                height={40}
                className={styles.image}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ShareModel