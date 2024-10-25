import React from 'react'
import homeimg from '../Assests/homeimg.avif';
import logo from '../Assests/logo.png';

function WelcomeCard({comp}) {
  return (
    <>
    <div className="h-screen w-full bg-blue_green flex justify-center items-center ">
        <div className='bg-white min-w-64 grid grid-cols-2 p-2 rounded-lg w-[930px] h-[90vh] '>
            <div className='flex flex-col p-3 '>
                <div className='rounded-lg h-full'>
                    <img src={homeimg} className='rounded-lg h-full'/>
                </div>
            </div>
            <div className=' flex flex-col w-[420px] overflow-y-auto no-scrollbar'>
            <div className='w-auto h-[90px] flex flex-row gap-3 items-center'>
                <img src={logo} className='w-24 h-full  '/>
                <h1 className='text-2xl font-bold text-blue_green '>Dairy Products</h1>
            </div>
                {comp}
            </div>
        </div>
    </div>
    </>
  )
}

export default WelcomeCard