import React from 'react'
import img1 from '../../assets/public/poert1.png'
import img2 from '../../assets/public/port2.png'
import img3 from '../../assets/public/port3.png'
export default function Portofolio() {
  return (
    <div>
      <div className=' flex flex-col items-center justify-center mt-14  mx-auto  pt-20'>
        <h1 className='size text-sky-900 uppercase'>portfolio component </h1>

        <div className="lines mt-6 flex justify-between gap-10 ">
          <div className="linee1  bg-sky-900 "></div>
          <i className="fa-solid fa-star mb-7 text-sky-900 "></i>
          <div className="linee2  bg-sky-900 "></div>
        </div>
        
        </div>

        <div className='container mx-auto p-12'>
        <div className="portofolio  grid grid-cols-3  gap-4">
          
          <div className="port1">
              <img src= {img1} className='rounded-md ' alt="" />
            <div className="inner p-4 ">
          

            </div>
          </div>
          <div className="port1">
            <div className="inner p-4">
              <img src= {img2} className='' alt="photo" />

            </div>
          </div>
          <div className="port1 p-4">
            <div className="inner">
              <img src= {img3} className='' alt="photo" />
            </div>
          </div>
          <div className="port1">
              <img src= {img1} className='rounded-md ' alt="" />
            <div className="inner p-4 ">
          

            </div>
          </div>
          <div className="port1">
            <div className="inner p-4">
              <img src= {img2} className='' alt="photo" />

            </div>
          </div>
          <div className="port1 p-4">
            <div className="inner">
              <img src= {img3} className='' alt="photo" />
            </div>
          </div>
         
          </div>








</div>
</div>
        





    
      )
}
React