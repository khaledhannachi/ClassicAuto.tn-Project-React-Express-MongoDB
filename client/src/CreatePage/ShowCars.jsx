import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
import './ShowAllCars.css'

const ShowCars = ({loggedUser}) => {
    
    const [cars, setCars] = useState([])
    const [cars2, setCars2] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/cars')
            .then(response => {
                console.log(response.data)
                const AllcarsForSell = response.data.filter((car) => car.status === "for sell" )
                setCars(AllcarsForSell)
                setCars2(AllcarsForSell)
            })
            .catch(error => console.log(error))
    }, [])

    const filterCars1 = (brand) => {
        const filteredByBrand = cars.filter(car => car.brand == brand)
        setCars2(filteredByBrand)
        console.log(filteredByBrand);
    }

    const filterCars2 = (category) => {
        const filteredByCategory = cars.filter(car => car.category == category)
        setCars2(filteredByCategory)
        console.log(filteredByCategory);
    }
    const goToOne = (id) => {
      navigate(`/cars/${id}`);
    };
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    scrollToTop ();
  return (
<div >
            <div class="relative isolate overflow-hidden py-40 sm:py-32 h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('../src/assets/imgs/shaz-sedighzadeh-foW-3mK78YE-unsplash.jpg')`,
        }}></div>
            <div className='main'>
                <Sidebar className='sidebar'>
                    <Menu>
                        <SubMenu label="Filter by :" />
                        <SubMenu label="Category">
                            <MenuItem onClick={() => filterCars2("Antique Cars")}>Antique Cars</MenuItem>
                            <MenuItem onClick={() => filterCars2("Classic Trucks")}>Classic Trucks</MenuItem>
                            <MenuItem onClick={() => filterCars2("Convertible")}>Convertible</MenuItem>
                            <MenuItem onClick={() => filterCars2("Muscle Cars")}>Muscle Cars</MenuItem>
                            <MenuItem onClick={() => filterCars2("Race Cars")}>Race Cars</MenuItem>
                            <MenuItem onClick={() => filterCars2("Sport Cars")}>Sport Cars</MenuItem>
                            <MenuItem onClick={() => filterCars2("Van")}>Van</MenuItem>
                        </SubMenu>
                        <SubMenu label="Brand">
                            <MenuItem onClick={() => filterCars1("Alfa Romeo")}>Alfa Romeo</MenuItem>
                            <MenuItem onClick={() => filterCars1("Aston Martin")}>Aston Martin</MenuItem>
                            <MenuItem onClick={() => filterCars1("Bentley")}>Bentley</MenuItem>
                            <MenuItem onClick={() => filterCars1("Cadillac")}>Cadillac</MenuItem>
                            <MenuItem onClick={() => filterCars1("Chevrolet")}>Chevrolet</MenuItem>
                            <MenuItem onClick={() => filterCars1("Dodge")}>Dodge</MenuItem>
                            <MenuItem onClick={() => filterCars1("Ferrari")}>Ferrari</MenuItem>
                            <MenuItem onClick={() => filterCars1("Fiat")}>Fiat</MenuItem>
                            <MenuItem onClick={() => filterCars1("Ford")}>Ford</MenuItem>
                            <MenuItem onClick={() => filterCars1("Jaguar")}>Jaguar</MenuItem>
                            <MenuItem onClick={() => filterCars1("Jeep")}>Jeep</MenuItem>
                            <MenuItem onClick={() => filterCars1("Land Rover")}>Land Rover</MenuItem>
                            <MenuItem onClick={() => filterCars1("Maserati")}>Maserati</MenuItem>
                            <MenuItem onClick={() => filterCars1("Mazda")}>Mazda</MenuItem>
                            <MenuItem onClick={() => filterCars1("Mercedes")}>Mercedes</MenuItem>
                            <MenuItem onClick={() => filterCars1("Peugeot")}>Peugeot</MenuItem>
                            <MenuItem onClick={() => filterCars1("Porsche")}>Porsche</MenuItem>
                            <MenuItem onClick={() => filterCars1("Rolls Royce")}>Rolls Royce</MenuItem>
                            <MenuItem onClick={() => filterCars1("Volkswagen")}>Volkswagen</MenuItem>
                            <MenuItem onClick={() => filterCars1("Volvo")}>Volvo</MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>
                <div className="flex flex-col w-6/6 m-auto justify-center mt-10">
        <h2 class="mb-12 pb-4 text-center text-3xl font-bold">Classic cars for sale
</h2>
        <div className="flex flex-wrap m-auto justify-center gap-10">
          {cars2.map((oneCar) => {
            return (
              <div  
                key={oneCar.id}
                className="relative flex w-full  max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
              >
                <div className=" relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">

                  <img className='h-[250px]' src={oneCar.photos[1]} alt="ui/ux review check"/>
                 
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                
                </div>
                <div class="p-6">
                  <div class="mb-3 flex items-center justify-between">
                    <div className="flex flex-col">
                    <h4 class="block font-sans text-xl font-medium leading-snug tracking-normal text-black antialiased">
                    {oneCar.brand}
                    </h4>
                    <h4 class="block font-sans text-xl font-medium leading-snug tracking-normal text-black antialiased">
                      {oneCar.model}
                    </h4>
              
                    <p class="block font-sans text-l font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {oneCar.condition} 
                    </p>
                    <p class="block font-sans text-l font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Available At {oneCar.city}
                    </p>
                    </div>
                  
                  </div>
                  <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased"></p>
                  <div class="group mt-8 inline-flex  justify-around w-full gap-3">
                   <span
                      data-tooltip-target="tv"
                      class="cursor-pointer rounded-full flex justify-end border border-pink-500/5 bg-pink-500/5 p-3 text-black font-bold transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                        {oneCar.mileage} Km
                    </span>
             

                    <span
                      data-tooltip-target="tv"
                      class="cursor-pointer rounded-full flex justify-end border border-pink-500/5 bg-pink-500/5 p-3 text-black font-bold transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
               {oneCar.year} 
                    </span>
               

                    <span
                      data-tooltip-target="tv"
                      class="cursor-pointer rounded-full flex justify-end border border-pink-500/5 bg-pink-500/5 p-3 text-black font-bold transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                      {oneCar.price} DT
                    </span>
                  </div>
                </div>
                <div class="p-6 pt-3">
                  <button onClick={() => goToOne(oneCar._id)}
                    class="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    View Car Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>




                </div>
                </div>
              
                

     )
};

export default ShowCars;