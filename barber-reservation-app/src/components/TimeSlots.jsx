import React from 'react';
import useStore from '../stores/store';
import ReservationForm from './ReservationForm';

function TimeSlots() {
  const { reservedSlots, selectSlot, selectedSlot } = useStore();

  const timeSlots = [
    { id: 1, time: '10:00 AM - 11:00 AM' },
    { id: 2, time: '11:00 AM - 12:00 PM' },
    { id: 3, time: '12:00 PM - 1:00 PM' }
  ];

  function handleSlotClick(slotId) {
    selectSlot(slotId);
  }

  return (
    <div>
     
        <div>
          <h2>Available time slots</h2>
          <ul>
            {timeSlots.map((slot) => (
              <li key={slot.id}>
                <button
                  className={`text-[#fff] p-[10px] m-[5px] border-none ${
                    reservedSlots.includes(slot.id) ? 'bg-gray-500' : 'bg-blue-500'
                  }`}
                  onClick={() => handleSlotClick(slot.id)}
                  disabled={reservedSlots.includes(slot.id)}
                >
                  {slot.time}
                </button>
              </li>
            ))}
          </ul>
        </div>
        </div>
  );
}

export default TimeSlots;
