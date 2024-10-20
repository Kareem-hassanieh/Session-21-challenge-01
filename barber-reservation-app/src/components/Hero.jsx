import React from 'react'

function Hero({ onBookNowClick }) {

  const divStyle = {
    backgroundImage: 'url("images/pexels-mati-2528695.jpg")', // Path to your image
   
    backgroundRepeat: 'no-repeat', //
    height: '80vh', // Full height of the parent
    
    display: 'flex', // Use flexbox for centering
    alignItems: 'center', // Center content vertically
    justifyContent: 'center', // Center content horizontally
    backgroundPosition:'center',
    
   
  };



  return (
  
     <div style={divStyle} >
     
     
     <div className='flex justify-center  mt-[0]'>
     <button className='  bg-[green] rounded-md p-2 text-white ' onClick={onBookNowClick}>Book now</button>

     </div>
     </div>
      
    
 
   
  )
}

export default Hero