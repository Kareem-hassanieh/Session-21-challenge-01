import React, { useState } from 'react';
import useStore from '../stores/store';

function ReservationForm() {
  const { selectedSlot, reserveSlot, clearSelectedSlot } = useStore();
  const [name, setName] = useState('');

  function handleReserve() {
    if (selectedSlot && name) {
      reserveSlot(selectedSlot, name);
      setName('');
      clearSelectedSlot(); // Clear the selected slot to go back to the time slots view
    }
  }

  return (
    <div>
      <h2>Reserve Your Slot</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name" 
      />
      <button 
        onClick={handleReserve} 
        disabled={!name}
      >
        Reserve Slot
      </button>
    </div>
  );
}

export default ReservationForm;
