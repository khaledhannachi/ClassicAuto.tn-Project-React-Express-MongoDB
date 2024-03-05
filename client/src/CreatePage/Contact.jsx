import React from "react";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  scrollToTop();
  return (
    <div>
      <div class="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-16 font-[sans-serif]">
        <div class="absolute inset-0">
          <img
            src="../src/assets/imgs/ferrari-vintage-car-wallpaper-preview.jpg"
            alt="Background Image"
            class="w-full h-full object-cover opacity-50"
          />
        </div>
        <div class="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Contact us
          </h1>
          <p class="text-lg md:text-xl mb-8"></p>
        </div>
      </div>
      <div class="container my-24 mx-auto md:px-6">
        <section class="mb-32">
          <div class="container mx-auto text-center lg:text-left xl:px-32">
            <div class="grid items-center lg:grid-cols-2">
              <div class="mb-12 lg:mb-0">
                <div class="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                  <h3 class="mb-3 text-2xl font-bold">
                    We know how valuable your time is
                  </h3>
                  <h5 class="mb-12 text-lg font-bold text-primary dark:text-primary-400 lg:mb-10 xl:mb-12">
                    Let us answer your questions
                  </h5>
                  <p class="mb-4 font-bold">
                    How often should you run a classic car?
                  </p>
                  <p class="mb-6 text-gray-500 dark:text-neutral-300">
                    It's generally recommended to start a classic car at least
                    once a week if it's not being used regularly. This helps to
                    keep the engine and other components lubricated and prevents
                    issues such as rusting and corrosion.
                  </p>
                  <p class="mb-4 font-bold">What makes a good classic car?</p>
                  <p class="mb-6 text-gray-500 dark:text-neutral-300">
                    A good rule of thumb in general though is cars that still
                    hold a high value after 15 years. Many cars depreciate in
                    value over time, but when a car starts to increase in value
                    again, there is definitely some interest in it and you could
                    consider it a classic car.
                  </p>
                  <p class="mb-4 font-bold">
                    How often do you change the oil in a classic car?
                  </p>
                  <p class="mb-6 text-gray-500 dark:text-neutral-300">
                    For a collector, classic, vintage, legacy or historic street
                    or muscle car, I recommend every 3000 miles or once a year,
                    whichever comes first. It's always best to change oil prior
                    to any lengthy storage period (weeks to months) so the
                    engine sits with fresh oil in its block.
                  </p>
                  <p class="mb-4 font-bold">Do classic cars use more fuel?</p>
                  <p class="mb-6 text-gray-500 dark:text-neutral-300">
                    Yes, in general, an older engine may consume more fuel than
                    a new one, even if they are the same model and make of car.
                    This is because over time, the efficiency of the engine can
                    decrease due to wear and tear, resulting in decreased fuel
                    economy
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://wallpapercave.com/dwp1x/NtY2HLU.jpg"
                  class="w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section
        class="bg-[hsla(0,0%,100%,0.55)] m-20 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]"
        id="contact"
      >
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div class="mb-4">
            <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                Contact
              </p>
              <h2 class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Get in Touch
              </h2>
            </div>
          </div>
          <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
              <div class="h-full pr-6">
                <p class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  If you would like to contact us please use the form below and
                  we will get back to you as soon as possible.
                </p>
                <ul class="mb-6 md:mb-0">
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                       Tunis, Tunisia.
                      </p>
                     
                    </div>
                  </li>
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                        Mobile: +00 (12) 456-789
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        Mail: contact@classicauto.tn
                      </p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Working hours
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 class="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                <form id="contactForm">
                  <div class="mb-6">
                    <div class="mx-0 mb-1 sm:mb-4">
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="email"
                        />
                      </div>
                    </div>
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
