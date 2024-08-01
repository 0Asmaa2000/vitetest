import React from 'react'

export default function Footer() {
  return (
    <div className='container'>
          <div className='flex justify-around location p-12'>
      <div className=''>
        <h1 className='text-2xl font-bold'> Location</h1>
        <h1 className='text-2xl font-bold'>2215 John Daniel Drive</h1>
      </div>
      <div className="h1">
        <h1>AROUND THE WEB</h1>
        <div className="icons"><i  className="fa-brands fa-facebook mx-1 icon"></i><i className="fa-brands fa-twitter mx-1 icon"></i><i  className="fa-brands fa-linkedin-in mx-1 icon"></i><i className="fa-solid fa-globe mx-1 icon"></i></div>
      </div>
      
      <div className=''>
        <h1 className='text-2xl font-bold'> ABOUT FREELANCER
        </h1>
        <h1 className='text-2xl font-bold'>2215 John Daniel Drive</h1>
      </div>
    </div>
    <div>

    </div>
    <h1 className='text-center footer text-white p-5'>Copyright © Your Website 2021</h1>

    </div>
  )
}
