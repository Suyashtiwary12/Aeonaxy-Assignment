import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faClock, faMessage, faLock, faBook, faUserPlus, faCircleHalfStroke, faBoxArchive, faDownload } from '@fortawesome/free-solid-svg-icons';


export const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside className="bg-gray-100 text-black w-72 flex-shrink-0">
      <div className="p-4">
        <div className='flex justify-between mb-4'>

          <p className='font-[500] text-sm'>refro team</p>
          <a>
            <FontAwesomeIcon icon={faBell} />
          </a>
        </div>


        <div className='flex justify-between mb-3'>

          <label className="relative block flex justify-center">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input className="placeholder:block bg-white w-52 rounded-md py-2 pl-9 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Ask your AI assistant" type="text" name="search" />
          </label>
          <button className="w-9 h-9 bg-white rounded-md border-none cursor-pointer"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>

        <div className='bg-gray-300 p-4 rounded mb-4'>
          <h3 className='text-sm font-[500]'>
            Your team used 8/50 free docs.
          </h3>
          <p className='text-sm font-[200]'>
            Upgrade to create unlimited docs.
          </p>
        </div>
        <ul className='mb-4'>
          <li className="mb-2">
            <a href='#' className='block py-2 px-4 text-sm font-[300]'><FontAwesomeIcon icon={faClock} className='mr-2' /> Catch up</a>
          </li>
          <li className="mb-6">
            <a href='#' className='block py-2 px-4 text-sm font-[300]'><FontAwesomeIcon icon={faMessage} className='mr-2' /> Discussions</a>
          </li>
          <li>
            <a>
              <h3 className='text-sm font-[500] mb-4 ml-4'>
                Favorites
              </h3>
              <p className='font-[300] text-sm mb-8 ml-4'>
                👋 Getting started
              </p>
            </a>
          </li>
          <li>
            <a>
              <h3 className='text-sm font-[500] mb-4 ml-4'>
                My channels
              </h3>
              <div className="relative inline-block text-left">
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md px-4 bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                      onClick={toggleDropdown}
                    >

                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <FontAwesomeIcon icon={faLock} className="mr-2 ml-2" />  My private channel
                    </button>
                  </div>

                  {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 mb-4 z-50 w-56 rounded-md bg-indigo-200 ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

                        <p className="block px-4 py-2 text-sm text-gray-700">👋 Getting started</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </a>
          </li>
          <li>
            <div>
              <div className="relative inline-block text-left">
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"

                  >
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <FontAwesomeIcon icon={faBook} className='mr-2 ml-2' />  Engineering
                  </button>
                </div>
              </div>
            </div>
          </li>
          {/* 3rd icon */}
          <li>
            <div>
              <div className="relative inline-block text-left">
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"

                  >

                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <FontAwesomeIcon icon={faBook} className='mr-2 ml-2' />  Product
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>


      </div>
      <div className='mt-32'>
        <ul>
          <li className="mb-2">
            <a  className="block py-2 px-6 text-sm font-[300]"><FontAwesomeIcon icon={faUserPlus} className='mr-2' /> Add People</a>
          </li>
          <li className="mb-2">
            <a  className="block py-2 px-6 text-sm font-[300]"><FontAwesomeIcon icon={faCircleHalfStroke} rotation={-50} className='mr-2' /> Templates</a>
          </li>
          <li className="mb-2">
            <a  className="block py-2 px-6 text-sm font-[300]"><FontAwesomeIcon icon={faDownload} className='mr-2' /> Shared with me</a>
          </li>
          <li className="mb-2">
            <a  className="block py-2 px-6 text-sm font-[300]"><FontAwesomeIcon icon={faBoxArchive} className='mr-2' /> Archive</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

