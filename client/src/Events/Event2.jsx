import React from "react";
import { Link } from "react-router-dom";

const Event2 = () => {
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
            <p class="text-gray-500">August 5, 2023</p>
            <h1 class="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              Auto Expo at the Sousse Fair: Here we go for the 3rd edition!
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
              src="../src/Events/img/classic-car-show.2.jpg"
              alt=""
            />
          </header>

          <div class="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <h2 class="text-2xl font-semibold">

            </h2>
            <p>
              Car Exhibition, Auto-Expo, brings together 80 exhibitors
              across a space of 10 thousand square meters. It's an
              exceptional opportunity to explore the latest technologies and
              best market offers in the automotive sector, along with
              numerous booths from banks, financing companies, insurance
              providers, and leasing services.
            </p>
          </div>
          <div class="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <h2 class="text-2xl font-semibold">

            </h2>
            <p>
              All brands will showcase their latest models and recent
              technological innovations focused on environmental
              sustainability, well-being, and safety (connected cars,
              hybrids and electric vehicles, high-tech engines, emergency
              braking).
            </p>
          </div>
          <div class="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <h2 class="text-2xl font-semibold">

            </h2>
            <p>
              Following the undeniable success of previous editions, this
              exhibition, serving as a comprehensive platform for
              displays, networking, demonstrations, and sales, has become
              an essential event for professionals. It is particularly
              important for those looking to seize the opportunity to
              choose their vehicle. Attendees can also take advantage of
              numerous promotions, credit options, and insurance
              conditions offered by distributors and financial
              institutions.
            </p>
          </div>
          <div class="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <p>
              If you are the owner of a classic PEUGEOT from the years 1929 to
              1985 and wish to partake in the Peugeot Classic Day event,
              please contact the association at 98356563. We are pleased to
              offer assistance in transporting your vehicle via towing
              services or covering fuel expenses. Your participation will
              contribute to the success of this memorable event.
            </p>
            <img
              src="../src/Events/img/classic-car-show.2.jpg"
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
            to={`/events/1`}
          >
            Back
          </Link>

          <Link
            className="mr-96 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            to={`/events/3`}
          >
            Next
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

export default Event2;


