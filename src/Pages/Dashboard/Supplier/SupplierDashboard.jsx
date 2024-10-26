import React from 'react'
import SupplierDashboardCard from '../../../Components/DashboardCards/Supplier/SupplierDashboardCard'
import pendingImg from '../../../Assests/Dashboard/supplier/pendingOrder.png';
import { GoDotFill } from "react-icons/go";
import SupplierCurrentOrders from './SupplierCurrentOrders';


function SupplierDashboard() {
  return (
    <div className='mt-[-60px] p-4 flex flex-col gap-8 w-full'>

    {/* The dashborad count card section */}
      <div className='grid grid-cols-4 w-full gap-6'>
        <SupplierDashboardCard title="Pending Orders" amount='250' image={pendingImg}/>
        <SupplierDashboardCard title="Completed Orders" amount='180' image={pendingImg}/>
        <SupplierDashboardCard title="Cancelled Orders" amount='30' image={pendingImg}/>
        
        {/* The card for Live stock */}
        <div className='bg-white/70 rounded-lg h-24 w-64 p-3 flex flex-row justify-between'>
            <div className='flex flex-col justify-between'>
                <h3 className='font-semibold text-sm'>Live stock</h3>
                <div className='flex flex-row items-center gap-2'>
                    <h1 className='text-3xl font-bold'>589</h1>
                    <div className='flex flex-row gap-1 flex-wrap'>
                        <GoDotFill className='text-green-500 text-xl' />
                        <p className='text-xs text-blue_green font-semibold '>Rs 450/= per 1L</p>
                    </div>      
                </div>
            </div>
            <div className=' rounded-lg bg-blue_green w-12 h-12 p-2'>
                <img src={pendingImg}/>
            </div>
        </div>
      </div>


      {/* The current orders are shown in here */}
      <SupplierCurrentOrders />
    </div>
  )
}

export default SupplierDashboard
