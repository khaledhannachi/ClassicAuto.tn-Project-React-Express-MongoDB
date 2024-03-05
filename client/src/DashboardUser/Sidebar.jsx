import React,{useState} from 'react'
import { FaHome } from 'react-icons/fa'
import { MdEventAvailable,MdFavorite } from 'react-icons/md';
import { BiLogOutCircle } from "react-icons/bi";
import { GrUserSettings } from "react-icons/gr";
import { Link } from 'react-router-dom';
import Logout from '../logInAndRegistration/Logout';
const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white p-4 min-h-full flex flex-col items-center gap-4 ">

      <h2 className="text-xl font-bold mb-4"></h2>

   
      <div className='w-1/2 flex justify-evenly items-center p-3 hover:bg-slate-500 '
    >
        <FaHome/>
        <Link to={"/home"}>
        <h5> Home </h5></Link>
    </div>
    
    <div className='w-1/2 flex justify-evenly items-center p-3  hover:bg-slate-500'  >
        <MdFavorite/>
        <Link to={"/favourites"}>
        <h5> Favorite </h5></Link>
    </div>
    
    
    <div className='w-1/6 flex justify-evenly items-center p-3  fixed hover:bg-slate-500  left-0 bottom-2'  >
        <BiLogOutCircle/>
        <Logout/>
    </div>
      {/* Add sidebar links here */}
    </div>
  )
}

export default Sidebar