import React from 'react'
import homeimg from '../Assests/homeimg.avif';
import logo from '../Assests/logo.png';


function WelcomeCard({comp}) {
  return (
    <>
    <div className="h-screen w-full bg-blue_green flex justify-center items-center  ">
        <div className='bg-white grid md:grid-cols-2 p-2 mob:rounded-lg mob:h-[90vh] lg:w-[930px] md:w-[800px] mob2:grid-cols-1 sm:w-[580px] mob:w-[480px] mob2:h-full  '>
            <div className='flex flex-col p-3 lg:w-[440px] h-[88vh] md:[310px] md:block mob2:hidden'>
                <div className='rounded-lg w-full h-full'>
                    <img src={homeimg} className='rounded-lg w-full h-full '/>
                </div>
            </div>
            <div className=' flex flex-col lg:w-[420px]  md:w-[390px]  overflow-y-auto no-scrollbar  '>
            <div className='w-full h-[90px] flex flex-row gap-3 items-center  mob2:justify-center md:justify-start'>
                <img src={logo} className='w-24 h-full'/>
                <h1 className='text-2xl font-bold text-blue_green'>Dairy Products</h1>
            </div>
                {comp}
            </div>
        </div>
    </div>
    </>
  )
}

export default WelcomeCard