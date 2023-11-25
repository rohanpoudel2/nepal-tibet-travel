"use client"
import { useState } from "react";
import PhotoModal from "./PhotoModal";

const GalleryImages = ({ gallery }) => {
  const [open, setOpen] = useState(false);
  const [url, seturl] = useState();
  const handleOpen = (url) => {
    seturl(url)
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      {
        gallery.map((image, index) => (
          <div key={image.id} onClick={() => handleOpen(image.url)} className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 cursor-pointer">
            <img src={image.url} loading="lazy" alt={image.title} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{image?.alt}</span>
          </div>
        ))
      }
      <PhotoModal open={open} close={handleClose} url={url} />
    </>
  )
}

export default GalleryImages