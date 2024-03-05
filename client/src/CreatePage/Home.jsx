import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Rev from "./Rev";
// import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = ({ loggedUser }) => {
  // all state
  const [cars, setCars] = useState([]);
  const [countCars, setCountCars] = useState("");
  const token = localStorage.getItem("token");
  // Fetch all
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cars")
      .then((response) => {
        console.log(response.data);
        const AllcarsForSell = response.data.filter(
          (car) => car.status === "for sell"
        );
        setCars(AllcarsForSell);
      })
      .catch((err) => console.log(err));
  }, []);
  // Count all
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cars/count")
      .then((count) => setCountCars(count.data))
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();
  const goToOne = (id) => {
    navigate(`/cars/${id}`);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  scrollToTop();
  return (
    <div>
      {/* Header */}
      <div
        class="relative isolate overflow-hidden py-40 sm:py-32 h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('./src/assets/imgs/shaz-sedighzadeh-foW-3mK78YE-unsplash.jpg')`,
        }}
      >
        <div
          class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 items-start">
          <div className="mx-auto max-w-2xl lg:mx-0 w-full">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {countCars} CLASSIC AND AUTHENTIC CARS FOR SALE TODAY!
            </h2>
            <h4 className="mb-12 pb-4 mt-5 text-3xl font-semi-bold text-white">
              The First Tunisian Marketplace For Classic Vehicles.
            </h4>
          </div>
          <Link to={"/cars"}>
            <div class="bg-red-500  mt-14 font-bold  w-64 text-xl flex justify-center text-center h-12 p-2 px-5 text-white rounded-2xl hover:shadow-lg transition duration-3000 cursor-pointer">
              <span>Browse Classic Cars</span>
            </div>
          </Link>
        </div>
      </div>
      {/* All cars */}
      <div className="flex flex-col w-6/6 m-auto justify-center mt-20">
        <h2 class="mb-12 pb-4 text-center text-4xl font-bold">Latest Deals</h2>
        <div className="flex flex-wrap w-6/6 m-auto justify-center gap-10">
          {cars.slice(-6).map((oneCar) => {
            return (
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
            );
          })}
        </div>
      </div>
      {/* Blog */}
      <div class="container my-24 mx-auto md:px-6">
        <section class="mb-32 text-center">
          <h2 class="mb-12 pb-4 text-center text-3xl font-bold">
            Latest articles
          </h2>
          <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
            <div class="mb-6 lg:mb-0">
              <div class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="flex">
                  <div
                    class="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://d2dsc1gf0t80gb.cloudfront.net/wp-content/uploads/2018/11/16100941/Rosario-Liberti-Grand-Prix-Historique-de-Tunisie-14-1000x667.jpg"
                      class="w-full"
                    />
                    <Link to={`/blogs/1`}>
                      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </Link>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="mb-3 text-lg font-bold">Tunisia Hidden Gems!</h5>
                  <p class="mb-4 text-neutral-500 dark:text-neutral-300">
                    <small>
                      Published <u>november 4, 2023</u> by
                      <a href="#">Federico Fabbri</a>
                    </small>
                  </p>
                  <p class="mb-4 pb-2">
                    odolfo Brignone will own, in Tunis, the car with chassis 101
                    502 from 1956. In 1964, he sold the car to a dealer
                    specialized in the Bugatti living in Brussels, Jean
                    Dobbeleer who resell it to Georges Marquet Delina, heir of
                    an hotel chain located in Brussels (Belgium Great hotels SA)
                    and Madrid. Delina, owner of the Palace Hotel and the Ritz
                    in Madrid, is a relentless collector of Bugatti; he will buy
                    28 to Dobbeleer.
                  </p>
                  <Link to={`/blogs/1`}>
                    <a
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      class="inline-block rounded-full  bg-gray-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Read more
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div class="mb-6 lg:mb-0">
              <div class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="flex">
                  <div
                    class="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://s3.us-east-2.amazonaws.com/prod.mm.com/uploads/2020/10/09/1602247677_img_0801_mmthumb.JPG"
                      class="w-full"
                    />
                    <a href="#">
                      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="mb-3 text-lg font-bold">
                    5 Classic Cars You Must Drive
                  </h5>
                  <p class="mb-4 text-neutral-500 dark:text-neutral-300">
                    <small>
                      Published <u>January 1, 2024</u> by
                      <a href="#">Staff Writer</a>
                    </small>
                  </p>
                  <p class="mb-4 pb-2">
                    Wonderful automobiles don’t become revered based solely on
                    their shapes or smells, however; the driving experience is
                    the paramount feature, as it separates a car from a lesser,
                    stationary piece of equipment. A great driving car is able
                    to elevate itself above the sum of its parts, much as a
                    jug-headed Fred Astaire became more handsome and
                    sophisticated as soon as he started dancing.
                  </p>
                  <Link to={`/blogs/3`}>
                    {" "}
                    <a
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      class="inline-block rounded-full bg-gray-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Read more
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div class="mb-0">
              <div class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="flex">
                  <div
                    class="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://d2dsc1gf0t80gb.cloudfront.net/wp-content/uploads/2015/06/20193602/why-do-people-still-love-classic-cars-1476934609388.jpg"
                      class="w-full"
                    />
                    <a href="#">
                      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="mb-3 text-lg font-bold">
                    Why Do People Still Love Classic Cars?
                  </h5>
                  <p class="mb-4 text-neutral-500 dark:text-neutral-300">
                    <small>
                      Published <u>January 14, 2024</u> by
                      <a href="#"> Ian Davies</a>
                    </small>
                  </p>
                  <p class="mb-4 pb-2">
                    In most cases, classic cars are rubbish. As James May once
                    said, if they were any good, they’d still be made. Modern
                    cars are faster, better handling, more reliable, more
                    comfortable, cleaner, safer, more economical, and mostly
                    cheaper to purchase, too. Basically, they’re better in just
                    about every way. Yet despite this, the clearly inferior
                    classic car not only still exists, but is positively
                    thriving these days. Why?
                  </p>
                  <Link to={`/blogs/4`}>
                    <a
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      class="inline-block rounded-full bg-gray-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Read more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Events */}
      <section class="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap ">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src="./src/assets/imgs/100.webp"
                alt=""
                class="relative z-40 object-cover w-full h-96 rounded-3xl"
              />
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <h2 class="mb-12 pb-4 text-3xl font-bold">
                Our Latest Events
              </h2>
              <p class="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                Interested in attending Tunisia's classic, collectible and
                racing events? Don't miss these major classic car experiences in
                2024. Use our calendar to get up to date on all important
                classic, vintage and youngtimer car occasions throughout
                Tunisia. These are all major and important events where you can
                see a huge variety of unique and rare cars. If you are planning
                to attend one or several of these events please reach out to us
                so we can meet up and share the passion! If you feel your
                favourite classic car event is missing, please send us an email
                with your recommendation.
              </p>
              <Link to={`/events`}>
                <a class="px-4 py-3 text-white bg-gray-900 transition-all transform border border-blue-500 rounded-3xl hover:bg-blue-600 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-gray-100 dark:hover:border-blue-500 dark:text-blue-400 hover:text-gray-100">
                  Discover more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Rev  loggedUser={ loggedUser }/>
    
    </div>
  );
};

export default Home;
