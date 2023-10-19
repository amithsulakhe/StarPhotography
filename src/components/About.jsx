import React from 'react'
import img1 from "../assets/safeer.jpg"

const About = () => {
  return (
    <div className='flex justify-between' id='about-section'>
        <div className='w-1/2 p-1 border-green-300 border-2 shadow-xl'>
            <img src={img1} alt="" className='shadow-lg' width="800" />
        </div>
        <div className='w-1/2 flex flex-col gap-10 py-16 px-10'> 
            <h1 className='font-bold text-2xl  underline font-serif'>About Us</h1>
            <h2 className='text-xl font-normal'>

       
            Star-Studio Production is a Photography & Videography company located in Savanur 📸. Our expertise extends to a wide range of services, including Weddings, Events, Birthdays, Real Estate, and other commercial Photo and Video shoots. 🎥

We take great pride in our commitment to delivering exceptional quality results, and to achieve this, we exclusively employ state-of-the-art professional gadgets and equipment. 💼 Our dedication to cutting-edge technology ensures that every moment we capture is nothing short of extraordinary. 🌟
            </h2>
        </div>
    </div>
  )
}

export default About