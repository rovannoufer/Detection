import React from 'react'
import { NavLink, Link, Navigate, useNavigate } from 'react-router-dom'
import Detect from '../components/detect'
import { UserAuth } from './Authcontext'

function Header() {

  const {user, logOut } = UserAuth();
  const navigate = useNavigate();


  const handleSignOut =async () =>{
        try{
          await logOut();
        }catch(err){
          console.log(err);
        }
  }

  const handleSignIn =() =>{
       
    navigate('/signin');
  }

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
              { user ? <button onClick={ handleSignOut }> SignOut </button> : <button onClick={ handleSignIn }> SignIn </button> }
         </div>

         
      </div>
    </>
  )
}

export default Header