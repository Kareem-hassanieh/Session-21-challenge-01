import React, { useState } from 'react';
import useStore from '../stores/store';

function ReservationForm() {
  const { selectedSlot, reserveSlot, clearSelectedSlot } = useStore();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  function handleReserve() {
    if (selectedSlot && lastName && phone) {
      reserveSlot(selectedSlot, { name, lastName, phone });
      setName('');
      setLastName('');
      setPhone('');
      clearSelectedSlot(); // Clear the selected slot to go back to the time slots view
    }
  }

  return (
    <div className="h-[100vh] flex justify-center items-center flex-col">
      <div className="flex flex-col bg-gradient-to-r bg-[#5bdae8] p-4 rounded-md gap-[2px] w-[40%]">
        <h2 className="text-center mb-[20px] text-2xl font-bold">Reserve Your Slot</h2>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Please enter your name" 
          className="mb-2 p-2 border rounded"
        />
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          placeholder="Please enter your last name" 
          className="mb-2 p-2 border rounded"
        />
        <input 
          type="tel" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          placeholder="Please enter your number" 
          className="mb-4 p-2 border rounded"
        />
        <div className="flex justify-end">
          <button 
            onClick={handleReserve} 
            disabled={!name || !lastName || !phone}
            className={`p-2 rounded ${name && lastName && phone ? 'bg-gradient-to-r from-teal-100 to-teal-200 text-black' : 'bg-gray-300 text-gray-500'}`}
          >
            Reserve Slot
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReservationForm;
