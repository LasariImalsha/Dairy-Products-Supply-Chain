import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import DashboardProfile from './DashboardProfile';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className='h-screen w-full p-1 bg-cream '>
      <div className='bg-cream/30 h-full rounded-lg flex flex-row'>
        <div className='w-[80px] bg-white rounded-l-lg flex flex-col'>
            <Sidebar />
        </div> 
        <div className='w-5/6  flex flex-col'>
            <Outlet />
        </div>  
        <div className='w-3/12 bg-white/70 rounded-r-lg'>
            <DashboardProfile />
        </div>  
      </div>
    </div>
  );
}

export default Dashboard;
