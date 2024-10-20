import Hero from './components/Hero';
import './App.css';
import Header from './components/Header';

import React, { useRef } from 'react';
import TimeSlots from './components/TimeSlots';
import ReservationForm from './components/ReservationForm';
import useStore from './stores/store';

function App() {
  const { selectedSlot } = useStore();
  const reservationsRef = useRef(null);

  const scrollToReservations = () => {
    if (reservationsRef.current) {
      reservationsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header />
      <Hero onBookNowClick={scrollToReservations} />
      {selectedSlot ? (
        <ReservationForm />
      ) : (
        <div ref={reservationsRef} className="bg-[#d9ff00] flex justify-center items-center h-[100vh]">
          <TimeSlots />
        </div>
      )}
    </div>
  );
}
  


export default App;
