import { Button } from "@/components/ui/button";
import styles from "./confirmationModal.module.scss";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Link from "next/link";
import Image from "next/image";
import BookingImage from "@/../public/images/checkmark.svg";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fitContent',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: "10px",
};

const parseDate = (dateStr) => {
  const [day, month, year] = dateStr?.split('/').map(Number);
  return new Date(year, month - 1, day);
};

const formatDateString = (date) => {
  return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

const ConfirmationModal = ({ open, setOpen, duration, name }) => {
  const initialDate = parseDate(open.bookingDate || '1/1/1990');
  initialDate.setDate(initialDate.getDate() + parseInt(duration));
  const formattedDate = formatDateString(initialDate);

  const handleClose = () => setOpen(prev => ({ ...prev, state: false }));

  return (
    <div className={styles.confirmationModal}>
      <Modal
        open={open?.state || false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="relative max-h-full flex items-center justify-center px-5 py-10 w-[80vw] md:w-[50vh] md:py-24">
            <div className="flex items-center justify-center flex-col gap-5 text-center">
              <Image
                src={BookingImage}
                alt="Blue Booking Icon"
                width={100}
                height={100}
              />
              <span className="font-medium text-gray-700">Do you want to confirm your booking for <br /><span className="font-semibold">{name}</span>?</span>
              <div className="text-xl font-semibold space-x-2">
                <span>{formatDateString(parseDate(open.bookingDate || '1/1/1990'))}</span>
                <span className="text-gray-500 font-medium">|</span>
                <span>{formattedDate}</span>
              </div>
              <Link href="/booking">
                <Button className="rounded-xl bg-sky-500 px-4 py-2 text-xl font-semibold text-white hover:bg-sky-600 focus:ring focus:ring-sky-200">Continue</Button>
              </Link>
              <div className="absolute top-5 right-5 bg-sky-500 p-2 text-lg rounded text-white cursor-pointer  hover:bg-sky-600" onClick={() => setOpen(false)}>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div >
  )
}

export default ConfirmationModal;
