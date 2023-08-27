import { Button } from "@/components/ui/button";
import styles from "./confirmationModal.module.scss";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Link from "next/link";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fitContent',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
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
          <h3 className="text-2xl">
            Get Instant Confirmation on your Booking
          </h3>
          <div className="flex flex-col gap-1 my-5">
            <h3>Everest Base Camp Trek</h3>
            <div className="flex flex-col gap-1">
              <span>
                <strong>From:</strong> 27 July, 2023
              </span>
              <span>
                <strong>To:</strong> 27 Aug, 2023
              </span>
            </div>
          </div>
          <div className="mb-5">
            <span className="text-green-600 text-2xl font-semibold tracking-wide">
              $1820.00
            </span>
          </div>
          <div className="flex justify-between gap-3">
            <Button className="bg-red-600 hover:bg-red-700" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Link href="/booking">
              <Button className="bg-green-600 hover:bg-green-700">
                Continue
              </Button>
            </Link>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ConfirmationModal