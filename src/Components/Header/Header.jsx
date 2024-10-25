import React from 'react'

function Header({mainTitle, subTitle}) {
  return (
    <div className='w-full bg-gradient-to-r from-blue_green via-black to-blue_green h-[20vh] p-4'>
        <div className=' p-2 pl-4 flex flex-col gap-6 text-white'>
            <h1 className='text-4xl  font-bold'>{mainTitle}</h1>
            <h3 className='text-lg font-semibold'>{subTitle}</h3>
        </div>
   
    </div>
  )
}

export default Header