import React from 'react';
import logo from '../../Assests/logo.png';
import dashboardicon from '../../Assests/sidebar/newdashboardicon.png';
import currentOrder from "../../Assests/sidebar/CurrentOrders.png";
import logout from '../../Assests/sidebar/logout.png';
import pendingOrder from '../../Assests/sidebar/pendingOrders.png';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      {/* Logo */}
      <img src={logo} alt="Logo" className='mt-4'/>

      <div className='flex flex-col h-full w-full mt-24'>
        
        {/* Top menu items */}
        {/* The dashboard Icon */}
        <div className='flex flex-col gap-12 flex-grow'>
          <div className='hover:border-l-4 hover:border-blue_green p-2 h-8 flex items-center'>
            <Link to="/dashboard">
              <div className='hover:border p-3 hover:rounded-lg hover:bg-light_gray/20'>
                <img src={dashboardicon} className='h-full w-full' alt="Dashboard Icon" />
              </div>
            </Link>
          </div>

          {/* The pending orders */}
          <div className='hover:border-l-4 hover:border-blue_green p-2 h-8 flex items-center'>
            <Link to="/dashboard/supplierPending">
              <div className='hover:border p-1 hover:rounded-lg hover:bg-light_gray/20'>
                <img src={pendingOrder} className='h-full w-full' alt="Dashboard Icon" />
              </div>
            </Link>
          </div>

          {/* The past orders */}
          <div className='hover:border-l-4 hover:border-blue_green p-2 h-8 flex items-center'>
            <Link to="/dashboard/supplierPast">
              <div className='hover:border p-2 hover:rounded-lg hover:bg-light_gray/20'>
                <img src={currentOrder} className='h-full w-full' alt="Profile Icon" />
              </div>
            </Link>
          </div>
        </div>

        {/* Logout item at the bottom */}
        <div className='flex-shrink-0 mb-12'>
          <div className='hover:border-l-4 hover:border-blue_green p-2 h-8 flex items-center'>
            <Link to="/">
              <div className='hover:border p-3 hover:rounded-lg hover:bg-light_gray/20'>
                <img src={logout} className='h-full w-full' alt="Logout Icon" />
              </div>
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Sidebar;
