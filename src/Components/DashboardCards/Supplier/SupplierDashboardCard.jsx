import React from 'react'


function SupplierDashboardCard({title,amount, image}) {
  return (
    <>
    <div className='bg-white/70 rounded-lg h-24 w-64 p-3 flex flex-row justify-between'>
      <div className='flex flex-col justify-between'>
        <h3 className='font-semibold text-sm'>{title}</h3>
        <h1 className='text-3xl font-bold'>{amount}</h1>
      </div>

      <div className=' rounded-lg bg-blue_green w-12 h-12 p-2'>
        <img src={image}/>
      </div>
    </div>

 
    </>
  )
}

export default SupplierDashboardCard