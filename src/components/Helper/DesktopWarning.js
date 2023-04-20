import React from 'react';

const DesktopWarning = () => {
  return (
    <div className='flex flex-col h-full w-full items-center justify-center'>
        <div className='text-2xl pb-4 text-orange-700 font-bold'>Dear visitor,</div>
        <div className='text-xl text-orange-700'>Apologies for the inconvenience. Please open the app on your mobile device for a better experience.</div>
        <div className='text-xl text-orange-700'>We'll let you know when the desktop version is launched 😃 </div>
    </div>
  )
}

export default DesktopWarning;