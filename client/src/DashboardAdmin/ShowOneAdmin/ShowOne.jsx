
'use client';

import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import AccordionC from './AccordionC';


function ShowOne({ isOpen, setIsModalOpen, car }) {
    if (!isOpen) return null 
    // const [car,setCar] = useState(null)
    const [selectedcarImg,setSelectedCarImg] = useState(0)
    const [isLoading,setIsLoading] = useState(true)
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };
      scrollToTop ();
  return (
    <div className='w-2/3 shadow relative h-96 hover:shadow-lg border border-slate-600'>

            <button   
                type="button"
                className="absolute top-0 right-0 bg-red-500 text-white p-1 "
                onClick={() => setIsModalOpen(false)}
              >
                X
              </button>
      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
    <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex -mx-4">
            <div className="w-full mb-8 md:w-1/2 md:mb-0">
                <div className="sticky top-0 z-50 overflow-hidden ">
                    <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                        <img src={car.photos[selectedcarImg]} alt=""
                            className="object-cover w-full lg:h-full "/>
                    </div>
                        
                        Photos List
                        <div className="flex-wrap hidden md:flex ">
                      {  car.photos.map((photo,i)=> { return (<div onClick={()=>{setSelectedCarImg(i)}} key={i} className={` w-1/2 p-2 sm:w-1/4 ${selectedcarImg === i?"border-8":""}`}>
                            <a  className="block border border-orange-300 hover:border-orange-300">
                                <img src={photo} alt=""
                                    className="object-cover w-full lg:h-20"/>
                            </a>
                        </div>) }
                             
                                    )}
                                
                        
                    
                    </div>
                         
                    <div className="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400 "></div>
                </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-20">
                    <div className="mb-8 ">
                        <h2 className="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                        {car.brand} {car.model}</h2>
                        <p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                            <span>{car.price} DT </span>
                            <br />
                            <span className="text-base font-normal text-gray-500 dark:text-gray-400">{car.mileage} Km</span>
                        </p>
                        <br />
                        <label htmlFor=""> Description:
                        <p className="max-w-md text-gray-700 dark:text-gray-400">
                        {car.description}
                             </p></label>
                    </div>
                  
                </div>
                <div className="lg:pl-20">
                    <div className="mb-8 ">
                        <AccordionC car={car}/>
                    </div>
                  
                   
                </div>
            </div>
        </div>
    </div>
</section>
</div>

    );
  }
  
  export default ShowOne
  
  
  
  
  






