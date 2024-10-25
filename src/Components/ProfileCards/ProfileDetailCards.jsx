import React from 'react';

function ProfileDetailCards({ profiledes, img }) {
  return (
    <div className='w-full rounded-lg h-auto flex items-center flex-row gap-4'>
      {/* Image container with flex-shrink-0 to prevent shrinking */}
      <div className='rounded-full bg-blue_green p-2 flex-shrink-0'>
        <img src={img} className='w-6 h-6' alt="Profile Icon" />
      </div>
      <h3 className='text-xs text-wrap text-gray-600 font-semibold break-words'>
        {profiledes}
      </h3>
    </div>
  );
}

export default ProfileDetailCards;
