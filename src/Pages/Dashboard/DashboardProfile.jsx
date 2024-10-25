import React from 'react';
import profileimg from "../../Assests/sidebar/profile.png";
import uploadimg from '../../Assests/profile/uploadNew.png';
import ProfileDetailCards from '../../Components/ProfileCards/ProfileDetailCards';
import name from '../../Assests/profile/nameIcon.png';
import companyId from '../../Assests/profile/companyIdIcon.png.png';
import address from '../../Assests/profile/addressIcon.png';
import contact from '../../Assests/profile/contact.png';
import email from '../../Assests/profile/emailIcon.png';
import editIcon from '../../Assests/editicon.png';


function DashboardProfile() {
  return (
    <div className='flex flex-col items-center'>
        <div className='relative  rounded-full w-48 flex justify-center bg-white h-48 mt-8 p-2'>
            <div className='mt-2'>
                <img src={profileimg}/>
            </div>
            <div className='bg-white  rounded-full h-14 flex items-center justify-center w-14 absolute bottom-[-20px]'>
                <img src={uploadimg} className='w-9 h-9 '/>
            </div>
        </div>

        <h1 className='mt-8 text-blue_green font-bold text-xl tracking-widest text-center'>Profile Information</h1>
        <p className='text-gray-400 text-wrap text-center text-sm mt-2'>This is my profile in the supply chain of dairy management system</p>

        <button className='w-64 bg-dark_orange mt-4 flex flex-row items-center justify-center gap-3 font-semibold py-1 text-white'>
            <img src={editIcon}  className='w-4 h-4'/> Edit Profile
        </button>

        <div className='flex flex-col gap-3 mt-4 justify-center '>
            <ProfileDetailCards img={name} profiledes="John Steves"/>
            <ProfileDetailCards img={companyId} profiledes="DMS125897"/>
            <ProfileDetailCards img={contact} profiledes="0775897468"/>
            <ProfileDetailCards img={address} profiledes="22A/12B, WUS building, pepiliyana, Dehiwala"/>
            <ProfileDetailCards img={email} profiledes="john123@gmail.com"/>
        </div>

    </div>
  )
}

export default DashboardProfile