import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faBars, faLock, faMessage, faStar, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    return (
        <div className="w-full flex justify-between">
            <ul className="flex">

                <li>
                    <FontAwesomeIcon icon={faBars} className="mx-8" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faAngleLeft} className="mx-2" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faAngleRight} className="mx-2" />
                </li>
                <li  className="sm:flex sm:items-center sm:ml-4 hidden sm:visible"> 
                    <FontAwesomeIcon icon={faLock} className="mr-2" /> 
                    <p className="font-[200]">My channel/👋 Getting started</p> 
                </li>
            </ul>
            <ul className="flex justify-around">
                <li  className="mx-4 font-[200]">Share</li>
                <li  className="mx-4">
                <FontAwesomeIcon icon={faMessage} />
                </li>
                <li  className="mx-4">
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}} />
                </li>
                <li  className="mx-4">
                <FontAwesomeIcon icon={faEllipsisVertical} />
                </li>
            </ul>
        </div>
    )
}
