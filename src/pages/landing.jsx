import React from 'react'

function Landing() {
  return (
    <>
     <div className='flex mx-4 my-12 justify-between'>
          <div >
            <h1 className='text-5xl p-5'> Object Detection </h1>
              <p className='p-5 text-2xl'>Object detection is a technique that uses neural networks 
                to localize and classify objects in images. This computer vision task has a wide range of applications, 
                from medical imaging to self-driving cars. Object detection is a computer vision task that aims to locate objects in digital images </p> 
          </div>
          <div className= ' mx-5'>
             <img className=' rounded-3xl'  src='https://www.searchenginejournal.com/wp-content/uploads/2020/07/how-to-generate-structured-data-automatically-using-computer-vision-5f06c03959da0.png'/>
          </div>
     </div>
     <div className='flex my-28 justify-evenly rounded-3xl'>
          <div className='bg-blue-300 rounded-3xl'>
               <p className='p-10'> Noufer</p>
          </div>
          <div className='bg-blue-500 p-10 rounded-3xl'>
               <p> Mohamed </p>
          </div>
     </div>
    </>
  )
}

export default Landing