import React, { useEffect, useState } from "react";
import { MdTaxiAlert } from "react-icons/md";
import { FaCarAlt, FaCar, FaUsers } from "react-icons/fa";
import axios from "axios";
import CarsRow from "./CarsRow";
import UsersCard from "./UsersCard";
import ShowOne from './ShowOneAdmin/ShowOne'
const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [index,setIndex] =useState(null)
  const [cars, setCars] = useState([]);
  const [users,setUsers] =useState([])
  const [tab,setTab]=useState(2)
  const [etat,setEtat]=useState(false)
  const [type,setType] =useState(null)
  const [updated, setUpdated] = useState(false)
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cars")
      .then((res) => {
        console.log("cars List", res.data);
        setCars(res.data);
      })
      .catch((error) => console.log(error));
  }, [etat]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => {
        console.log("users List", res.data);
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  }, [updated]);

  const pendingCars = cars.filter((car) => car.status === "pending" && car);
  const carsSold = cars.filter((car) => car.status === "sold" && car);
  const carsForSell = cars.filter((car) => car.status === "for sell" && car);

  return (
    <div className="mx-2 relative">
      <h1 className=" text-center font-bold text-2xl">Admin Dashboard</h1>
      <div className="flex justify-around mt-5">
        <div className="w-1/5 flex flex-col justify-center items-center gap-5 bg-slate-200 rounded  hover:bg-slate-600 hover:text-white" 
        onClick={(e)=>setTab(1)
        }>
          <div className="flex justify-between items-center gap-10">
            <MdTaxiAlert />
            <h3>Posts Pending </h3>
          </div>

          {pendingCars.length}
        </div>

        <div className="w-1/5 flex flex-col justify-center items-center gap-5  bg-slate-200 rounded  hover:bg-slate-600 hover:text-white"
        onClick={()=>setTab(2)}>
          <div className="flex justify-between items-center gap-10">
            <FaCarAlt />
            <h3>Cars for Sale </h3>
          </div>
          <h6>{carsForSell.length}</h6>
        </div>

        <div className=" w-1/5 flex flex-col justify-center items-center gap-5  bg-slate-200 rounded p-4   hover:bg-slate-600 hover:text-white"
        onClick={()=>setTab(3)}>
          <div className="flex justify-between items-center gap-10">
            <FaCar />
            <h3>Cars Sold </h3>
          </div>
          {carsSold.length}
        </div>
        <div className="w-1/5 flex flex-col justify-center items-center gap-5  bg-slate-200 rounded  hover:bg-slate-600 hover:text-white"
        onClick={()=>setTab(4)}>
          <div className="flex justify-between items-center gap-10" >
             <FaUsers />
          <h3>Users</h3>
          </div>
          <h6>{users.length}</h6>
         
        </div>
      </div>

        <div className="flex justify-center z-50 fixed  top-0 ">
          {type===1 ? <ShowOne  isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} car={pendingCars[index]}/>
          :type ===2?<ShowOne  isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} car={carsForSell[index]}/>:
          type===3 ?<ShowOne  isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} car={carsSold[index]}/>:""}
        
        </div>

      { tab ===1 ? <div className="text-gray-900 bg-gray-200">
      <div className="p-4 flex mt-5">
        <h1 className="text-3xl">Post Pending</h1>
      </div>
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Model</th>
              <th className="text-left p-3 px-5">Brand</th>
              <th className="text-left p-3 px-5">Created By</th>
              <th className="text-left p-3 px-5">Action</th>
            </tr>
          
         {pendingCars.map((car,idx)=> <CarsRow key={idx} car={car} setIndex={setIndex} setType={setType} setIsModalOpen={setIsModalOpen} ind={idx} etat={etat} setEtat={setEtat}  />)}
             
          </tbody>
        </table>
      </div>
     :tab ===2 ? <div className="text-gray-900 bg-gray-200 mt-5">
     <div className="p-4 flex">
       <h1 className="text-3xl">Cars For Sell</h1>
     </div>
       <table className="w-full text-md bg-white shadow-md rounded mb-4">
         <tbody>
           <tr className="border-b">
             <th className="text-left p-3 px-5">Model</th>
             <th className="text-left p-3 px-5">Brand</th>
             <th className="text-left p-3 px-5">Created By</th>
             <th className="text-left p-3 px-5">Action</th>
           </tr>
         
        {carsForSell.map((car,idx)=> <CarsRow key={idx} car={car} setIndex={setIndex} setType={setType} setIsModalOpen={setIsModalOpen} ind={idx} etat={etat} setEtat={setEtat}  />)}
            
         </tbody>
       </table>
     </div> :tab ===3 ? <div className="text-gray-900 bg-gray-200 mt-5">
     <div className="p-4 flex">
       <h1 className="text-3xl">Cars Sold </h1>
     </div>
       <table className="w-full text-md bg-white shadow-md rounded mb-4">
         <tbody>
           <tr className="border-b">
             <th className="text-left p-3 px-5">Model</th>
             <th className="text-left p-3 px-5">Brand</th>
             <th className="text-left p-3 px-5">Created By</th>
             <th className="text-left p-3 px-5">Action</th>
           </tr>
         
        {carsSold.map((car,idx)=> <CarsRow key={idx} car={car} setIndex={setIndex} setType={setType} setIsModalOpen={setIsModalOpen} ind={idx} etat={etat} setEtat={setEtat}  />)}
            
         </tbody>
       </table> </div> : tab ===4 ? <UsersCard  updated={updated} setUpdated={setUpdated} users ={users} /> : ""}
      
    </div> 
  );
};

export default Content;
