"use client"
import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import ConstructionImage from "@/../public/images/construction.png";
import Image from 'next/image';

const DevelopmentAlert = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const lastClosedTime = localStorage.getItem('developmentAlertLastClosedTime');
    const twoDaysInMillis = 2 * 24 * 60 * 60 * 1000;

    if (!lastClosedTime || Date.now() - lastClosedTime > twoDaysInMillis) {
      setShow(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('developmentAlertLastClosedTime', Date.now());
    setShow(false);
  };

  if (show) {
    return (
      <Alert className="fixed bottom-2 right-2 z-10 w-96 space-y-3">
        <AlertTitle className="flex justify-between items-center">
          <div className='flex items-center gap-3'>
            <Image
              src={ConstructionImage}
              alt='Construction Icon'
              width={25}
              height={25}
            />
            <span className='font-semibold text-xl'>
              Site in Development
            </span>
          </div>
          <div onClick={handleClose} className='text-xl bg-primary-mac p-1 rounded-full text-white w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-sky-600'>
            <i className="fa-solid fa-xmark" />
          </div>
        </AlertTitle>
        <AlertDescription className="prose">
          Functional but under construction. Thank you for your patience! 😀
        </AlertDescription>
      </Alert>
    );
  }

  return null;
};

export default DevelopmentAlert;
