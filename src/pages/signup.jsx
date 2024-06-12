import React, { useEffect } from 'react'
import InputBox from '../components/inputbox'
import { faUser, faEnvelope, faKey  } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from './Authcontext';

function Signup({type}) {

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () =>{
    try{
       await googleSignIn();
       navigate('/')
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    if(user!=null){
      navigate('/');
    }
  },[user])

  return (
         <div className=' px-60 my-44'>
              <h1 className='text-3xl capitalize text-center mb-24'> 
                {type === "sign-in" ? "Welcome back" : "Join us today"}
              </h1>
              {
                type !== "sign-in" ?
                <InputBox 
                 name="fullname"
                 type="text"
                 placeholder="Full name"
                 icon= {faUser}
                />
                : " "
              }
              <InputBox 
                 name="email"
                 type="email"
                 placeholder="E-mail"
                 icon= {faEnvelope}
                />

              <InputBox 
                 name="password"
                 type="password"
                 placeholder="Password"
                 icon= { faKey }
                />

                <button className='whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80 block mx-auto mt-14'
                type="submit"
                > 
                   { type.replace("-", " ")}
                </button>


                <div className='relative w-full flex items-center gap-2
                my-10 opacity-10 uppercase text-black font-bold'>
                    <hr className='w-1/2 border-black'/>
                    <p className='text-black'> OR </p>
                    <hr className='w-1/2 border-black'/>
                </div>

                <button className='whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80  bg-grey block mx-auto'
                   onClick={handleGoogleSignIn}>
                  {/* <GoogleIcon  className='mr-3'/> */}
                  {/* <FontAwesomeIcon icon="fa-brands fa-google" /> */}
                    Continue With Google
                </button>

                 {
                    type === "sign-in" ?  
                     
                      <Link to="/signup" className="underline text-black
                      text-xl ml-1">
                        <p className='mt-6 text-dark-grey text-xl text-center'>
                      Don't have an account ?
                      </p>
                      </Link>
                    
                    : <Link to="/signin" className="underline text-black
                    text-xl ml-1">
                      <p className='mt-6 text-dark-grey text-xl text-center'>
                    Already have an account
                    </p>
                    </Link>
                }

        </div>
  )
}

export default Signup