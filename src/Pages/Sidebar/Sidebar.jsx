import React from 'react';
import logo from '../../Assests/logo.png';
import dashboardicon from '../../Assests/sidebar/newdashboardicon.png';
import profile from "../../Assests/sidebar/profile.png";
import logout from '../../Assests/sidebar/logout.png';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      {/* Logo */}
      <img src={logo} alt="Logo" />

      <div className='flex flex-col h-full w-full mt-12'>
        
        {/* Top menu items */}
        <div className='flex flex-col gap-8 flex-grow'>
          <div className='hover:border-l-4 hover:border-blue_green p-2 h-8 flex items-center'>
            <Link to="/dashboard">
              <div className='hover:border p-3 hover:rounded-lg hover:bg-light_gray/20'>
                <img src={dashboardicon} className='h-full w-full' alt="Dashboard Icon" />
              </div>
            </Link>
          </div>

          <div className='hover:border-l-4 hover:border-blue_green p-2 h-8 flex items-center'>
            <Link to="/dashboard/dashboardProfile">
              <div className='hover:border p-3 hover:rounded-lg hover:bg-light_gray/20'>
                <img src={profile} className='h-full w-full' alt="Profile Icon" />
              </div>
            </Link>
          </div>
        </div>

        {/* Logout item at the bottom */}
        <div className='flex-shrink-0 mb-12'>
          <div className='hover:border-l-4 hover:border-blue_green p-2 h-8 flex items-center'>
            <Link to="/dashboard/logout">
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
