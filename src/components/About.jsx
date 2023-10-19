import React from 'react'
import img1 from "../assets/aijaz.jpg"

const About = () => {
  return (
    <div className='flex justify-between'>
        <div className='w-1/2 p-1'>
            <img src={img1} alt="" className='shadow-lg' width="800" />
        </div>
        <div className='w-1/2 flex flex-col gap-10 py-16 px-10'> 
            <h1 className='font-bold text-2xl  underline font-serif'>About Us</h1>
            <h2 className='text-xl font-normal'>

       
Te-Jay Production is a Photography  & Videography company situated in Goa.

Involved in Weddings , Events , Birthdays , Real Estate and other commercial Photo and Video shoots.

We Use highly professional Gadgets and  Equipments For  High Quality Results.
            </h2>
        </div>
    </div>
  )
}

export default About