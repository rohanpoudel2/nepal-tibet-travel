import styles from "./confirmationModal.module.scss";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Link from "next/link";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

const ConfirmationModal = ({ open, setOpen }) => {


  const handleClose = () => setOpen(false);

  return (
    <div className={styles.confirmationModal}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            className={styles.date}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >
            <span
              className={styles.title}
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
              }}
            >
              Get Instant Confirmation on your Booking
            </span>
            <div
              className={styles.dates}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                gap: "20px",
                background: "#47A5CF",
                padding: "10px",
                color: "white"
              }}
            >
              <div className={styles.startDate} style={{ fontWeight: "bold" }}>
                7 July
              </div>
              <i
                className="fa-solid fa-arrow-right"
                style={{
                  border: "1px solid white",
                  borderRadius: "50px",
                  width: 30,
                  height: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}></i>
              <div className={styles.endDate} style={{ fontWeight: "bold" }}>
                23 July
              </div>
            </div>
            <div
              className={styles.prices}
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <span
                className={styles.price}
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "green"
                }}
              >
                USD $1800
              </span>
              <span
                className={styles.availability}
                style={{
                  color: "green",
                  fontWeight: "bold",
                  fontSize: "1.3rem"
                }}
              >
                (Available)
              </span>
            </div>
            <Link href="/booking"
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <button
                className={styles.btn}
                style={{
                  padding: "10px",
                  fontSize: "1.2rem",
                  margin: "0px auto",
                  backgroundColor: "#47A5CF",
                  borderRadius: "10px",
                  cursor: "pointer",
                  border: "none",
                  fontWeight: "bold",
                  color: "white"
                }}
              >
                Book Now
              </button>
            </Link>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ConfirmationModal