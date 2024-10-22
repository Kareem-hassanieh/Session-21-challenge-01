import React from 'react';
import useStore from '../stores/store';
import ReservationForm from './ReservationForm';

function TimeSlots() {
  const { reservedSlots, selectSlot, selectedSlot } = useStore();

  const timeSlots = [
    { id: 1, time: '10:00 AM - 11:00 AM' },
    { id: 2, time: '11:00 AM - 12:00 PM' },
    { id: 3, time: '12:00 PM - 1:00 PM' },
    { id: 4, time: '1:00 PM - 2:00 PM' },
    { id: 5, time: '2:00 PM - 3:00 PM' },
  ];

  function handleSlotClick(slotId) {
    selectSlot(slotId);
  }

  const Style = {
    backgroundImage: 'url(images/bg-image.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
  };

  return (
    <div style={Style} className="flex justify-center items-center">
      {selectedSlot ? (
        <ReservationForm />
      ) : (
        <div className="flex justify-center items-center flex-col space-between gap-[50px]">
          <h1 className="text-center text-2xl md:text-2xl font-bold text-[#000000] mb-6 tracking-wide">
            Available time slots
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-72 gap-y-11">
            {timeSlots.map((slot) => (
              <button
                key={slot.id}
                className={`${
                  reservedSlots.includes(slot.id)
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed' // Style for reserved slots
                    : 'bg-gradient-to-r from-teal-100 to-teal-200 text-gray-800'
                } rounded-full py-2 px-4 shadow-md transition transform hover:scale-105`}
                onClick={() => handleSlotClick(slot.id)}
                disabled={reservedSlots.includes(slot.id)}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TimeSlots;
