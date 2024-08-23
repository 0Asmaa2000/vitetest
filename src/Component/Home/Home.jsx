import React from 'react'
import img from '../../assets/public/avataaars (1).svg'

export default function Home() {
  return (
    <div className=' flex flex-col items-center justify-center h-screen mx-auto Home p-20'>
      
      <img src={img} className='w-40' alt="fdgdfgfdg" />
     <div className="lines mt-6 flex justify-between gap-10">
      <div className="line1 "></div>
      <i  className="fa-solid fa-star"></i>
      <div className="line2 "></div>
     </div>
      <h1 className='size text-white'>ReactFrameWorK </h1>
      <p className='text-white'>Graphic Artist - Web Designer - Illustrato </p>

          
         
    </div>
  )
}
React

