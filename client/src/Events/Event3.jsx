import React from "react";
import { Link } from "react-router-dom";
const Event3 = () => {
  return (
    <section>
      <header class="bg-white">
        <div class="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
          <input type="checkbox" class="peer hidden" id="navbar-open" />
          <label
            class="absolute top-5 right-7 cursor-pointer md:hidden"
            for="navbar-open"
          ></label>
          <nav
            aria-label="Header Navigation"
            class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
          >
            <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
              <li class="font-bold md:mr-12">
                <a href="#">Blog</a>
              </li>
              <li class="md:mr-12">
                <a href="#">Features</a>
              </li>
              <li class="md:mr-12">
                <a href="#">Support</a>
              </li>
              <li class="md:mr-12">
                <button class="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white">
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <article>
          <header class="mx-auto mt-20 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
            <p class="text-gray-500">February 1, 2023</p>
            <h1 class="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              A VINTAGE CAR EXHIBITION THAT EMBODIES TIMELESS ELEGANCE!
            </h1>
            <p class="mt-6 text-lg text-gray-700">By ClassicAuto.TN</p>
            <div class="mt-6 flex flex-wrap justify-center gap-2">
              <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Classic
              </button>
              <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Sports Car
              </button>
              <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Vintage
              </button>
              <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Race cars
              </button>
            </div>
            <img
              class="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover"
              src="../src/Events/img/pic10.jpg"
              alt=""
            />
          </header>
          <div class="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <p>
              Enthusiasts of classic cars gather to celebrate their shared
              passion for mechanics and vintage vehicles in Sfax on April
              6, 2024.
            </p>
          </div>
          <div class="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <p>
              The Tunisian Association of Classic and Historical
              Automobiles is organizing this event in partnership with the
              organizing committee of the International Half Marathon of
              the City of Sfax as part of the Marathon Village.
            </p>
          </div>
          <div class="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <p>
              Numerous vintage cars are showcased in "The Rendezvous of
              Beauties of Yesteryear." This exhibition features cars
              dating from 1900 to 1975, elegantly displayed in front of
              the majestic Ibis Sfax, embodying the timeless allure of
              these classic vehicles.
            </p>

            <img
              className="ml-40"
              src="../src/Events/img/pic10.jpg"
              alt="..."
            />
          </div>
        </article>
      </main>
      <div class="w-fit mx-auto mt-10 flex space-x-2">
        <div class="h-0.5 w-2 bg-gray-600"></div>
        <div class="h-0.5 w-32 bg-gray-600"></div>
        <div class="h-0.5 w-2 bg-gray-600"></div>
      </div>
      <div className="flex justify-between ">
        <Link
          className="ml-96 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          to={`/events/2`}
        >
          Back
        </Link>
        <Link
          className="mr-96 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          to={`/events/1`}
        >
          Back to First Event
        </Link>
      </div>
      <aside
        aria-label="Recent Posts"
        class="mx-auto mt-10 max-w-screen-xl py-20"
      >
      </aside>
    </section>
  );
};

export default Event3;


