import React from "react";

const Event1 = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  scrollToTop ();
  return (
    <div>
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        title="Woman holding a mug"
      >
        <img src="./assets/pic5.png" alt="" />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">
              The Tunisian Association of Historical Automobiles
            </h1>
            <p className="text-gray-700 text-xs mt-2">
              Date:
              <a
                href="#"
                className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                14/11/2023
              </a>
              In
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Tunisia
              </a>
            </p>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
              <div
                className="bg-cover bg-center text-center overflow-hidden"
                title="Woman holding a mug"
              >
                <img src="./assets/pic7.webp" alt="" />
              </div>
              <h3 className="text-base leading-8 my-5">
                In collaboration with STAFIM Peugeot, is delighted to celebrate
                the 85th anniversary of PEUGEOT in Tunisia. Join us on Saturday,
                November 14, 2024, from 2:00 PM to 4:00 PM at Avenue Habib
                Bourguiba for the prestigious "Peugeot Classic Day" event.
              </h3>
              <h3 className="text-2xl font-bold my-5">Announcement</h3>
              <h3 className="text-base leading-8 my-5">
                This exceptional occasion will feature an exhibition showcasing
                approximately 50 classic PEUGEOT automobiles spanning from 1929
                to 1985. Additionally, we are honored to have the participation
                of Tourathna Association, bringing together individuals adorned
                in traditional Tunisian attire.
              </h3>
              <div>
                <h3 className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                  In collaboration with the Maram Solidarity Association, we are
                  proud to include the presence of 20 children battling cancer
                  who will actively participate in the parade.
                </h3>
              </div>
              <h3 className="text-base leading-8 my-5">
                If you are the owner of a classic PEUGEOT from the years 1929 to
                1985 and wish to partake in the Peugeot Classic Day event,
                please contact the association at 98356563. We are pleased to
                offer assistance in transporting your vehicle via towing
                services or covering fuel expenses. Your participation will
                contribute to the success of this memorable event.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event1;
