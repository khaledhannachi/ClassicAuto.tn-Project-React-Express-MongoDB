// Import necessary libraries and components
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Favourites = ({ loggedUser }) => {
  const [favCars, setFavCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      try {
        // Fetch user data
        const responseUser = await axios.get("http://localhost:8000/api/user", {
          withCredentials: true,
        });

        const { token, loggedUser } = responseUser.data;

        // Fetch favorite cars based on user data
        const responseCars = await axios.get("http://localhost:8000/api/cars");
        const tempCars = responseCars.data.filter((car) =>
          loggedUser["favs"].includes(car._id)
        );

        setFavCars(tempCars);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    // Fetch data only if the user is logged in
    if (token) {
      fetchData();
    }
  }, []);

  if (!favCars.length || !loggedUser) {
    return <div>Loading...</div>;
  }

  const goToOne = (id) => {
    navigate(`/cars/${id}`);
  };
  
  return (
    <div className="flex flex-col w-6/6 m-auto justify-center mt-40">
      {/* All cars */}
      <h2 className="mb-12 pb-4 text-center text-3xl font-bold">Favourites</h2>
      <div className="flex flex-wrap w-6/6 m-auto justify-center gap-10">
        {/* Mapping through cars */}
        {favCars.map((oneCar) => (
          <div
            key={oneCar.id}
            className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
          >
            <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                className="h-[250px]"
                src={oneCar.photos[0]}
                alt="ui/ux review check"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
              {/* condition */}
              {/* {loggedUser && <>{loggedUser.role ==='user' &&<>
              {oneProduct.favorite ?
           <button
           class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
           type="button"
           data-ripple-dark="true"
         >
           <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
               aria-hidden="true"
               class="h-6 w-6"
             >
               <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
             </svg>
           </span>
         </button> : 
           <button
             class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
             type="button"
             data-ripple-dark="true"
           >
             <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="currentColor"
                 aria-hidden="true"
                 class="h-6 w-6"
               >
                 <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
               </svg>
             </span>
           </button>
             }</>}</>} */}
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
                  {oneCar.mileage}Km
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
              <button
                onClick={() => goToOne(oneCar._id)}
                class="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                View Car Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
