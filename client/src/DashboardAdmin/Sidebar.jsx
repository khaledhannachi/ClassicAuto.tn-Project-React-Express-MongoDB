import React,{useState} from 'react'
import { FaBlogger, FaHome, FaUsers } from 'react-icons/fa'
import { MdEventAvailable } from 'react-icons/md';
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Logout from '../logInAndRegistration/Logout';
const Sidebar = () => {
  
  
  return (
    <div className=" bg-gray-900 text-white p-4 min-h-full flex flex-col items-center gap-4 ">
      <h2 className="text-xl font-bold mb-4"></h2>

    <div className='w-1/2 flex justify-evenly items-center p-3 hover:bg-slate-500 '
    >
        <FaHome/>
        <Link to={"/home"}>
        <h5> Home </h5></Link>
    </div>
   
    <div className='w-1/2 flex justify-evenly items-center p-3  hover:bg-slate-500'  >
        <FaBlogger/>
        <Link to={"/blogs"}>
        <h5> Blog </h5></Link>
    </div>
    <div className='w-1/2 flex justify-evenly items-center p-3  hover:bg-slate-500'  >
        <MdEventAvailable/>
        <Link to={"/events"}>
        <h5> Events</h5></Link>
    </div>
    
    <div className='w-1/6 flex justify-evenly items-center p-3  hover:bg-slate-500 absolute left-0 bottom-2'  >
        <BiLogOutCircle/>
     <Logout/>
    </div>

    </div>
  )
}

export default Sidebar