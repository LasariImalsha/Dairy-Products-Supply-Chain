import React from 'react'
import Header from '../../Components/Header/Header'
import SupplierDashboard from './Supplier/SupplierDashboard'


function DashboardContent() {
  const userRole ="supplier"
  return (
    <div className='w-full'>
      <Header mainTitle="My Dashboard" subTitle="Overview"/>

      {userRole === "supplier" && (
        <SupplierDashboard />
      )}
    </div>
  )
}

export default DashboardContent