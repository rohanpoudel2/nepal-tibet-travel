"use client";
import Title from "@/components/ui/title/Title";
import ConfirmationModal from "./confirmationModal/ConfirmationModal";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const parseDate = (dateStr) => {
  const [day, month, year] = dateStr?.split('/').map(Number);
  return new Date(year, month - 1, day);
};

const Booking = ({ data, duration, name }) => {
  const [open, setOpen] = useState({
    bookingDate: '',
    state: false
  });
  return (
    <div>
      <div>
        <Title
          title="Booking"
        />
        <div className="flex mt-10 gap-5">
          {
            data.map((booking, i) => (
              <div key={i} className="p-4 bg-primary-mac w-36 text-center text-white font-semibold rounded-lg hover:bg-sky-700 active:scale-95 cursor-pointer select-none" onClick={() => setOpen({
                bookingDate: booking.booking_date,
                state: true
              })}>
                {parseDate(booking.booking_date || '1/1/1991').toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
              </div>
            ))
          }
          <Popover>
            <PopoverTrigger asChild>
              <div className="p-4 bg-green-500 w-36 text-center text-white font-semibold rounded-lg hover:bg-green-700 active:scale-95 cursor-pointer select-none">
                Custom Date
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={open.bookingDate}
                onSelect={(data) => {
                  const selectedDate = new Date(data);
                  const formattedDate = selectedDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).split('/').join('/');
                  setOpen({
                    bookingDate: formattedDate,
                    state: true
                  })
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <ConfirmationModal open={open} setOpen={setOpen} duration={duration} name={name} />
    </div>
  )
}

export default Booking;
