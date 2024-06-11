import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
     <div className='flex mx-4 my-12 justify-between '>
          <div className='w-1/2'>
            <h1 className='text-5xl p-5'> Object Detection </h1>
              <p className='p-5 text-2xl'>Object detection is a technique that uses neural networks 
                to localize and classify objects in images. This computer vision task has a wide range of applications, 
                from medical imaging to self-driving cars. Object detection is a computer vision task that aims to locate objects in digital images </p> 
          </div>
          <div className= 'w-1/2 mx-5'>
             <img className=' w-100 rounded-3xl'  src='https://www.searchenginejournal.com/wp-content/uploads/2020/07/how-to-generate-structured-data-automatically-using-computer-vision-5f06c03959da0.png'/>
          </div>
     </div>
     <div className='flex my-28 justify-evenly rounded-3xl'>
          <div className='bg-black rounded-3xl text-white p-10'>
               <Link to={'/detect'}>  Object Detection</Link>
          </div>
          <div className='bg-black p-10 rounded-3xl text-white'>
               <p> Pose Estimation </p>
          </div>
          <div className='bg-black rounded-3xl'>
               <p className='p-10 text-white'> Object Detection</p>
          </div>
          <div className='bg-black p-10 rounded-3xl text-white'>
               <p> Pose Estimation </p>
          </div>
     </div>
    </>
  )
}

export default Landing