import React, { useEffect, useState } from "react";
import { MdTaxiAlert } from "react-icons/md";
import { FaCarAlt, FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import CarsRowUser from "./CarsRowUser";
import ShowOne from "./ShowOneUser/ShowOne";
import Edit from "./Edit";
const ContentUser = ({loggedUser} ) => {
  if (!loggedUser || !loggedUser._id) {
    return <div>Loading...</div>}

  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("loggedUser-------------", loggedUser._id);

  
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  const [index,setIndex] =useState(null)
  const [cars, setCars] = useState([]);
  const [users,setUsers] =useState([])
  const [tab,setTab]=useState(2)
  const [etat,setEtat]=useState(false)
  const [type,setType] =useState(null)
  const [isEdit,setIsEdit]=useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cars")
      .then((res) => {
        console.log("cars List-------------", res.data);
        setCars(res.data.filter((car)=>car.user===loggedUser._id))
        console.log("*********************** IDDD", loggedUser._id);
      })
      .catch((error) => console.log(error));
  }, [etat]);
  console.log("*********************** cars", cars);
  const pendingCars = cars.filter((car) => car.status === "pending" && car);
  const carsSold = cars.filter((car) => car.status === "sold" && car);
  const carsForSell = cars.filter((car) => car.status === "for sell" && car);
  return (
    <div className="mx-2 relative">
      <div className="flex justify-between text-center items-center">
        <h1 className="text-center ml-96 font-bold text-2xl" > {loggedUser.username} Dashboard</h1>
        <Link to={"/cars/new"}>
        <button
        //  onClick={()=>setIsCreate(true)}
         className="mx-2 btn p-4  bg-slate-200 rounded  hover:bg-slate-600 hover:text-white">
          Add Post</button></Link>
        </div>
      
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
            <h3>cars sold </h3>
          </div>
          {carsSold.length}
        </div>
      </div>

        <div className="flex justify-center z-50 absolute  top-0 ">
          {type===1 ? <ShowOne  isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setIsEdit={setIsEdit} car={pendingCars[index]}/>
          :type ===2?<ShowOne  isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setIsEdit={setIsEdit} car={carsForSell[index]}/>:
          type===3 ?<ShowOne  isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}  setIsEdit={setIsEdit}car={carsSold[index]}/>:""}
        
        </div>

        <div className="flex justify-center z-50 absolute  top-0 w-full ">
          {type===1 ? <Edit  isOpen={isEdit} setIsEdit={setIsEdit} setEtat={setEtat} etat={etat} car={pendingCars[index]}/>
          :type ===2?<Edit  isOpen={isEdit} setIsEdit={setIsEdit} setEtat={setEtat} etat={etat} car={carsForSell[index]}/>:
          type===3 ?<Edit  isOpen={isEdit} setIsEdit={setIsEdit} setEtat={setEtat} etat={etat} car={carsSold[index]}/>:""}
        
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
              {/* <th className="text-left p-3 px-5">Created By</th> */}
              <th className="text-left p-3 px-5">Action</th>
            </tr>
          
         {pendingCars.map((car,idx)=> <CarsRowUser key={idx} car={car} setIndex={setIndex} setType={setType} setIsModalOpen={setIsModalOpen} setIsEdit={setIsEdit} ind={idx} etat={etat} setEtat={setEtat}  />)}
             
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
             {/* <th className="text-left p-3 px-5">Created By</th> */}
             <th className="text-left p-3 px-5">Action</th>
           </tr>
         
        {carsForSell.map((car,idx)=> <CarsRowUser key={idx} car={car} setIndex={setIndex} setType={setType} setIsModalOpen={setIsModalOpen} setIsEdit={setIsEdit} ind={idx} etat={etat} setEtat={setEtat}  />)}
            
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
             {/* <th className="text-left p-3 px-5">Created By</th> */}
             <th className="text-left p-3 px-5">Action</th>
           </tr>
         
        {carsSold.map((car,idx)=> <CarsRowUser key={idx} car={car} setIndex={setIndex} setType={setType} setIsModalOpen={setIsModalOpen} setIsEdit={setIsEdit} ind={idx} etat={etat} setEtat={setEtat}  />)}
            
         </tbody>
       </table> </div>  : ""}
      
    </div>
  );
};

export default ContentUser;
