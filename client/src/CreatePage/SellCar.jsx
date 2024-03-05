import React from "react";
import Create from "./Create";
import { Link } from "react-router-dom";
const SellCar = ({loggedUser}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  scrollToTop ();
  return (
    <div className="top-0 mt-0 ">
      <div className=" bg-gray-50 flex items-center ">
        <section
          className="w-full bg-cover bg-center h-screen top-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534093607318-f025413f49cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
            <div className=" pl-32 text-center mt-72  max-w-2xl lg:mx-0 flex flex-col justify-center item">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Why Sell my Classic Car on classicauto.tn?
            </h2>
            <h4 className="mt-6 leading-8 text-white font-bold text-xl">
              Reach over 20 thousands automotive enthusiasts per month!
            </h4>
            <div class=" ml-48 mt-10 w-44 pt-6 md:pt-0  flex justify-center">
              {loggedUser? <a
                href="#create"
                class="bg-red-500 justify-center text-center text-white rounded-3xl shadow px-10 py-3 flex items-center"
              >
                Get Started
              </a>: <Link to={"/login"}><a
                
                class="bg-red-500 font-bold w-60 justify-center text-center text-white rounded-3xl shadow px-10 py-3 flex items-center"
              >
                Login To Post A Car
              </a> </Link>}
             
            </div>
          </div>
        </section>
      </div>
      <div id="create" >
        {loggedUser && <Create loggedUser ={loggedUser}/>}
        
      </div>
    </div>
  );
};

export default SellCar;
