import React from "react";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div class="container my-24 mx-auto md:px-6">
      <section class="mb-32 text-center md:text-left">
        <h2 class="mb-12 text-center text-3xl font-bold">Latest Events</h2>

        {/* event 1 */}
        <div class="mb-6 flex flex-wrap">
          <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
            <div
              class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="./src/Events/img/pic5.png" 
                class="w-full"
                alt="Louvre"
              />
              <Link to={`/events/1`}>
                <a>
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                </a>
              </Link>
            </div>
          </div>

          <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
            <Link to={`/events/1`}>
              <h5 class="mb-3 text-lg font-bold  hover:text-blue-900">
                {" "}
                The Tunisian Association of Historical Automobiles
              </h5>
            </Link>

            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              <small>
                Organized <u>14/11/2023</u> in
                <a>Tunis</a>
              </small>
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
              In collaboration with STAFIM Peugeot, is delighted to celebrate
              the 85th anniversary of PEUGEOT in Tunisia. Join us on Saturday,
              November 14, 2024, from 2:00 PM to 4:00 PM at Avenue Habib
              Bourguiba for the prestigious "Peugeot Classic Day" event.
            </p>
          </div>
        </div>
        {/* Article 2*/}
        <div class="mb-6 flex flex-wrap">
          <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
            <div
              class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="./src/Events/img/pic4.jpg"
                class="w-full"
                alt="Louvre"
              />
              <Link to={`/events/2`}>
                <a>
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                </a>
              </Link>
            </div>
          </div>
          <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
            <Link to={`/events/2`}>
              <h5 class="mb-3 text-lg font-bold  hover:text-blue-900">
                Auto Expo at the Sousse Fair: Here we go for the 3rd edition!
              </h5>
            </Link>
            <div class="mb-3 flex items-center justify-center text-sm font-medium text-yellow-600 md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="mr-2 h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
              Classic Cars
            </div>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              <small>
                Organized <u>05/08/2023</u> in <a>Sousse</a>
                
              </small>
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
              Car Exhibition, Auto-Expo, brings together 80 exhibitors across a
              space of 10 thousand square meters. It's an exceptional
              opportunity to explore the classic cars in Tunisia, along with numerous booths from
              banks, financing companies, insurance providers, and leasing
              services.
            </p>
          </div>
        </div>
        {/* Article 3 */}
        <div class="mb-6 flex flex-wrap">
          <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
            <div
              class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="./src/Events/img/pic9.jpg"
                class="w-full"
                alt="Louvre"
              />
              <Link to={`/events/3`}>
                <a>
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                </a>
              </Link>
            </div>
          </div>
          <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
            <Link to={`/events/3`}>
              <h5 class="mb-3 text-lg font-bold  hover:text-blue-900">
                A VINTAGE CAR EXHIBITION THAT EMBODIES TIMELESS ELEGANCE!
              </h5>
            </Link>
            <div class="mb-3 flex items-center justify-center text-sm font-medium text-yellow-600 md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="mr-2 h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
              Classic Cars
            </div>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              <small>
                Organized <u>01/02/2023</u> in <a>Sfax</a>
                
              </small>
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
              The Tunisian Association of Classic and Historical Automobiles is
              organizing this event in partnership with the organizing committee
              of the International Half Marathon of the City of Sfax as part of
              the Marathon Village.
            </p>
          </div>
        </div>

        {/* Article 4 */}

        
      </section>
    </div>
  );
};

export default Events;
