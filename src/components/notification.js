import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const NotificationBar = () => {
  
  return (
    <div className="w-[46rem] md:w-full bg-blue-500 flex items-center justify-between px-4 py-2 text-white h-16 ">
      <p className="text-white flex-1 mr-4">Enable browser notifications to avoid missing out important activities.</p>
      <div className="flex items-center">
        <button className="bg-white text-blue-500 px-4 py-2 rounded mr-4">Enable Notifications</button>
        <FontAwesomeIcon icon={faTimes} className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default NotificationBar;
