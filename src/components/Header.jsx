import React from 'react'

const Header = () => {
  return (
    <div>
<nav className='flex justify-between py-1 px-8 shadow-lg items-center'>

    <div className='w-[60%] flex items-center transition-all duration-500 hover:text-orange-400 '>
    <img width="60" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWuj_sDG91sPCG67SZPMMtU0Yjed43sfj9inMojHWyS_fTCM7UDnNwm4G1dhrbT3VjwI&usqp=CAU" alt="" />

        <h1 className='text-2xl font-bold'>StarStudios</h1>
    </div>
    <div className='w-[40%] flex justify-between'>
        <div className='hover:text-sky-500 text-lg hover:underline'><a href="">Home</a></div>
        <div className='hover:text-sky-500 text-lg  hover:underline'><a href="">About</a></div>
        <div className='hover:text-sky-500 text-lg  hover:underline'><a href="">Location</a></div>
        <div className='hover:text-sky-500 text-lg  hover:underline'><a href="">Gallery</a></div>
        <div className='hover:text-sky-500 text-lg  hover:underline'><a href="">Contact</a></div>

    </div>

</nav>

    </div>
  )
}

export default Header