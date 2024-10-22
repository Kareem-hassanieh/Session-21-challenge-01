import React from 'react'

function Hero({ onBookNowClick }) {

  const divStyle = {
    backgroundImage: 'url(images/barber-shop-img.webp)',
   
  
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    
   
  };



  return (
  
     <div style={divStyle} className='relative' >
     
     
     
     <button className='  bg-yellow-600  p-2 text-white absolute right-10 bottom-10 w-[200px]  text-lg hover:bg-yellow-500 hover:text-xl transition-all duration-300 rounded-lg' onClick={onBookNowClick}>Book now !!</button>

     </div>
      
    
 
   
  )
}

export default Hero