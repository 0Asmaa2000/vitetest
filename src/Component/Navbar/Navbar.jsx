import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='container fixed top-0 left-0 right-0'>
    <ul className='flex flex-wrap justify-between items-baseline  py-5 px-10'>
      <div>
      <li className='frame p-3'><NavLink to=""><h1 className=''>SrartFrameWorK</h1></NavLink></li> 
      </div>
    <div className='flex'> <li className='p-3 '><Link to="About">About</Link></li>
    <li className='p-3 '><NavLink to="Portofolio">Portofoli</NavLink></li>
    <li className='p-3 '><NavLink to="Contact">Contact</NavLink></li> </div>
    

    </ul>
    </div>
  )
}
React