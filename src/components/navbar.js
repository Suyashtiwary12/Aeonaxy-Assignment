import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faBars, faLock, faMessage, faStar, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    return (
        <div className="w-full flex justify-between">
            <div className="flex">
                <a>
                    <FontAwesomeIcon icon={faBars} className="mx-8" />
                </a>
                <a>
                    <FontAwesomeIcon icon={faAngleLeft} className="mx-2" />
                </a>
                <a>
                    <FontAwesomeIcon icon={faAngleRight} className="mx-2" />
                </a>
                <a  className="sm:flex sm:items-center sm:ml-4 hidden sm:visible"> 
                    <FontAwesomeIcon icon={faLock} className="mr-2" /> 
                    <p className="font-[200]">My channel/👋 Getting started</p> 
                </a>
            </div>
            <div className="flex justify-around">
                <a  className="mx-4 font-[200]">Share</a>
                <a  className="mx-4">
                <FontAwesomeIcon icon={faMessage} />
                </a>
                <a  className="mx-4">
                <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}} />
                </a>
                <a  className="mx-4">
                <FontAwesomeIcon icon={faEllipsisVertical} />
                </a>
            </div>
        </div>
    )
}
