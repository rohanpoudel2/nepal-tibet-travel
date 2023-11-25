import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Image from "next/image";
import { Button } from '../ui/button';

const PhotoModal = ({ url, open, close }) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '1920',
    height: '1080',
    bgcolor: 'background.paper',
    boxShadow: 24,
    border: "none",
    p: 4,
  };


  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Button
          className="bg-white text-gray-700 hover:bg-sky-500 hover:text-white ring-sky-300 cursor-pointer absolute shadow-sm top-10 right-10"
          onClick={close}
        >
          Close
        </Button>
        <Image
          src={url}
          width={1920}
          height={1080}
          className='object-cover'
        />
      </Box>
    </Modal>
  )
}

export default PhotoModal