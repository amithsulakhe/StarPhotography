import React from 'react'
import img1 from "../assets/couples.jpg"
const Body = () => {
  return (
    
       
        <div className='flex  flex-col  gap-3 text-2xl text-white bg '>
          <div className='relative'>
            <div className='overlay'></div>
            <img className='w-[100%] absolute top-0 -z-10 h-[100vh] object-cover ' src={img1} alt="" />
          </div>
          <div className='absolute picture-tag leading-10 font-bold right-0  pt-96 pr-8'>
          <h1 >Safeer</h1>
<h1>Production</h1>
<h1>Photography/Videography</h1>
          </div>


        
    </div>
  )
}

export default Body