import React from "react";

const Event3 = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  scrollToTop ();
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden"
          title="Woman holding a mug"
        >
          <img src="./assets/pic10.jpg" alt="" width="1350px" />
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <div>
                <h1 className="text-gray-900 font-bold text-3xl mb-2">
                  SFAX: A VINTAGE CAR EXHIBITION THAT EMBODIES TIMELESS
                  ELEGANCE!
                </h1>
                <p className="text-gray-700 text-xs mt-2">
                  Date:
                  <a
                    href="#"
                    className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    18 November 2023, 10:00
                  </a>
                  In
                  <a
                    href="#"
                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    Sfax
                  </a>
                </p>
                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
                  <div
                    className="bg-cover bg-center text-center overflow-hidden"
                    title="Woman holding a mug"
                  >
                    <img src="./assets/pic16.jpg" alt="" width="1250px" />
                  </div>
                  <h3 className="text-base leading-8 my-5">
                    Enthusiasts of classic cars gather to celebrate their shared
                    passion for mechanics and vintage vehicles in Sfax on April
                    6, 2024.
                  </h3>

                  <h3 className="text-2xl font-bold my-5">Announcement</h3>

                  <h3 className="text-base leading-8 my-5">
                    The Tunisian Association of Classic and Historical
                    Automobiles is organizing this event in partnership with the
                    organizing committee of the International Half Marathon of
                    the City of Sfax as part of the Marathon Village.
                  </h3>

                  <h3 className="text-base leading-8 my-5">
                    Numerous vintage cars are showcased in "The Rendezvous of
                    Beauties of Yesteryear." This exhibition features cars
                    dating from 1900 to 1975, elegantly displayed in front of
                    the majestic Ibis Sfax, embodying the timeless allure of
                    these classic vehicles.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event3;
