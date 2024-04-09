import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, } from '@fortawesome/free-solid-svg-icons';

export const Body = () => {
    return (
        <>
            <center>
                <div className="sm:ml-64 m-4 sm:w-[44rem] sm:text-left font-custom">
                    <h1 className="text-bold  text-5xl font-[700]">
                        Getting Started
                    </h1>
                    <div className="sm:h-52 mt-8 bg-gray-100 pl-10 pt-4">

                        <p className="text-left w-100">
                            <FontAwesomeIcon icon={faLock} style={{ color: "#5a8c7d", }} className="mr-2" />
                            This doc is in your private channel, where you can store your <span className="font-[700]">private work</span>, You can share docs one by one from here, but to properly organize your team's knowledge  base, use <span className="font-[700]">workspace channels</span>.
                            <br /> <br />You can make channels <span className="font-[700]">public</span> to make all docs visible to everyone on the team, or <br /> <span className="font-[700]">private</span> if you want the channel's docs to only be visible by a selection of teammates.
                        </p>
                    </div>
                    {/* second part */}
                    <div>
                        <h1 className="mt-16 mb-8 text-bold text-3xl font-[600]">Collaborate with your team with these three features</h1>
                        <h2 className="text-[500] text-xl mb-4"> ✍️ Docs</h2>
                        <div className="bg-indigo-200 sm:pl-8 pt-8">
                            <span className="bg-blue-300 rounded text-white">
                                Docs
                            </span>
                            <div className="grid-cols-1 sm:flex">

                                <p className="font-serif mt-4 mr-4 text-2xl">
                                    Create docs to collaborate with your team.<br />

                                    Type <span className="bg-blue-300">/</span> to discover Slite's editor tools and bring your docs to life.
                                </p>

                                <img src="/pic1.jpg" alt="#" className="w-96 h-64"></img>
                            </div>
                        </div>
                    </div>
                </div>
           </center>
        </>
    )
}