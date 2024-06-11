import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Detect from '../components/detect'

function Header() {
  return (
    <>
      <div className='flex justify-between p-4 mt-4 mx-4 border-b border-gray-400'>
        <div className='text-5xl mr-5 p-2'>
         <NavLink to={'/'} > Detection </NavLink>
        </div>

         <div className='mt-5'> 
             <NavLink to={'/detect'} className='mr-5 p-2'> Object Detection </NavLink>
              <NavLink  to={'/pose'} className=' mr-5 p-2'> Pose Estimation </NavLink>
              <NavLink  to={'/handpose'}  className=' mr-5 p-2'> Hand Pose </NavLink>
              <NavLink className=' mr-5 p-2'> Home </NavLink>
         </div>

         
      </div>
    </>
  )
}

export default Header