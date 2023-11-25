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
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="flex items-start justify-between p-4 border-b rounded-t ">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Get Instant Confirmation on your Booking
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="static-modal" onClick={() => setOpen(false)}>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                </button>
              </div>
              <div className="p-6 space-y-2 h-[50%] overflow-y-scroll">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                    {name}
                  </h2>
                </div>
                <div className="flex flex-row gap-10 items-center justify-center md:gap-30 p-2 transition-colors duration-300 transform rounded-lg bg-gray-50 ">
                  <div>
                    <h4 className="mt-2 text-xl md:text-3xl font-semibold text-green-500 ">$1820.00
                      <span className="text-sm md:text-base font-medium text-gray-500 ">/per person</span></h4>
                  </div>
                  <div className="bg-white rounded-lg p-2 flex gap-5 items-center justify-between mt-5 w-fit">
                    <span className="w-10">{formatDateString(parseDate(open.bookingDate || '1/1/1990'))}</span>
                    <div className="border-2 rounded-full flex items-center justify-center p-1 w-6 h-6">
                      <i className="fa-solid fa-arrow-right w-5" />
                    </div>
                    <span className="w-10">{formattedDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
                <Link href="/booking">
                  <button data-modal-hide="static-modal" type="button" className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Continue</button>
                </Link>
                <button data-modal-hide="static-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-sky-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10" onClick={() => setOpen(false)}>Go back</button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div >
  )
}

export default ConfirmationModal;
