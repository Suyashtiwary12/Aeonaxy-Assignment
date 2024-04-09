import React from "react";

export const Footer = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex-grow"> 
                <label className="relative block flex justify-center">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input className="placeholder:block bg-gray-100 rounded-md py-2 pl-9 pr-3 md:w-[42rem] shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="💡 Give it a go by typing/below" type="text" name="search" />
                </label>
            </div>
            <button className="relative w-8 h-8 mb-4 mr-2 bg-blue-200 rounded-md shadow-md">
                <span className="absolute top-0 right-0 h-2 w-2 bg-blue-900 rounded-full"></span>
                <span className="flex justify-center items-center text-blue-700 text-2xl">
                    ?
                </span>
            </button>
        </div>
    )
}
