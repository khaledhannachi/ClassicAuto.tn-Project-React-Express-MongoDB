import React from "react";

const Event2 = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  scrollToTop ();
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div></div>
        <div
          className="bg-cover bg-center text-center overflow-hidden"
          title="Woman holding a mug"
        >
          <img src="./assets/classic-car-show.2.jpg" alt="" width="1350px" />
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-gray-900 font-bold text-3xl mb-2">
                Auto Expo at the Sousse Fair: Here we go for the 3rd edition!
              </h1>
              <p className="text-gray-700 text-xs mt-2">
                Date:
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  15 November 2023, 11:00
                </a>
                In
                <a
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Sousse
                </a>
              </p>
              <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
                <div
                  className="bg-cover bg-center text-center overflow-hidden"
                  title="Woman holding a mug"
                >
                  <img src="./assets/pic11.jpg" alt="" />
                </div>
                <h3 className="text-base leading-8 my-5">
                  Car Exhibition, Auto-Expo, brings together 80 exhibitors
                  across a space of 10 thousand square meters. It's an
                  exceptional opportunity to explore the latest technologies and
                  best market offers in the automotive sector, along with
                  numerous booths from banks, financing companies, insurance
                  providers, and leasing services.
                </h3>

                <h3 className="text-2xl font-bold my-5">Announcement</h3>

                <div>
                  <h3 className="text-base leading-8 my-5">
                    All brands will showcase their latest models and recent
                    technological innovations focused on environmental
                    sustainability, well-being, and safety (connected cars,
                    hybrids and electric vehicles, high-tech engines, emergency
                    braking).
                  </h3>

                  <h3 className="text-base leading-8 my-5">
                    Following the undeniable success of previous editions, this
                    exhibition, serving as a comprehensive platform for
                    displays, networking, demonstrations, and sales, has become
                    an essential event for professionals. It is particularly
                    important for those looking to seize the opportunity to
                    choose their vehicle. Attendees can also take advantage of
                    numerous promotions, credit options, and insurance
                    conditions offered by distributors and financial
                    institutions.
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

export default Event2;
