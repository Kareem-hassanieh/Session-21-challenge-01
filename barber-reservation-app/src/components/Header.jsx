import React from 'react'
import Nav from './Nav'

function Header() {
  return (
    <div className='flex items-center justify-between pl-[30px] pr-[50px] bg-[black] text-white'>
      <img src="images/image.png" className='rounded-full'></img>
      <Nav />
    </div>
  )
}

export default Header