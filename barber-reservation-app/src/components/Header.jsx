
import Nav from './Nav'
import React, { useState, useEffect } from 'react';



function Header() {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleScroll = () => {
      if (window.scrollY > 10) {
          setIsBlurred(true);
      } else {
          setIsBlurred(false);
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <div className={`flex items-center justify-between pl-[30px] pr-[50px]   text-black h-[60px] fixed top-0 left-0 w-full  shadow-lg transition-all duration-300 z-10 ${isBlurred ? 'backdrop-blur-md' : ''}`}>

      <img src="images/image.png" className='rounded-full'></img>
      <Nav />
    </div>
  )
}

export default Header