import React from "react";
import { Link } from "react-router-dom";
const BlogTwo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  scrollToTop ();
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
            <p class="text-gray-500">Published January 8, 2020</p>
            <h1 class="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              Bugatti type 101 in Tunisia
            </h1>
            <p class="mt-6 text-lg text-gray-700">By Zein Mohsen</p>
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
              src="https://cars.bonhams.com/_next/image.jpg?url=https%3A%2F%2Fimages1.bonhams.com%2Fimage%3Fsrc%3DImages%2Flive%2F2008-01%2F20%2F7600745-2-10.jpg&w=2400&q=75"
              alt=""
            />
          </header>

          <div class="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <h2 class="text-2xl font-semibold">
              
            </h2>
            <p>
              odolfo Brignone will own, in Tunis, the car with chassis 101 502
              from 1956. In 1964, he sold the car to a dealer specialized in the
              Bugatti living in Brussels, Jean Dobbeleer who resell it to
              Georges Marquet Delina, heir of an hotel chain located in Brussels
              (Belgium Great hotels SA) and Madrid. Delina, owner of the Palace
              Hotel and the Ritz in Madrid, is a relentless collector of
              Bugatti; he will buy 28 to Dobbeleer, that he keeps in different
              locations around Brussels. Reversal of fortune forced him to
              disperse his collection in the 70's and 101 502 was auctioned at
              Christie's, the 22th of March 1973 (Lot 34) and sold to the
              well-known collector Michel Founex, in Switzerland. Roquet put the
              car on sale in May 1975, it was bought by Pim Hascher, whom keeps
              it until his death in 2007.
            </p>
            
            <img
              src="https://media.licdn.com/dms/image/C5612AQF0Ud5XNc2DAQ/article-cover_image-shrink_720_1280/0/1520062924774?e=1710374400&v=beta&t=U7lnRR4F8iqYlxOWiZHrAGCOVGg4YGgDXf8fcO1I-vg"
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

      <aside
        aria-label="Recent Posts"
        class="mx-auto mt-10 max-w-screen-xl py-20"
      >
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* <!-- Heading --> */}
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Most Recent Posts
            </h2>
      
          </div>
          {/* <!-- /Heading --> */}
          <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {/* <!-- Article 1 --> */}
            <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://d2dsc1gf0t80gb.cloudfront.net/wp-content/uploads/2018/11/16100941/Rosario-Liberti-Grand-Prix-Historique-de-Tunisie-14-1000x667.jpg"
                  loading="lazy"
                  alt=""
                  class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">November 4, 2023</span>

                <h2 class="text-xl font-bold text-gray-800">
                <Link to={`/blogs/1`}>
                  <a
                    class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    Tunisia Hidden Gems!
                  </a>   </Link>
                </h2>

                <p class="text-gray-500">
                  While Italy was troubled by some of the worst rainstorms that
                  we’ve had in many years, Rosario and I flew off to Tunisia to
                  check out the Grand Prix Historique de Yasmin-Hammamet to
                  explore one of these lesser-known events, in this case a
                  historic revival of the Tunis Grand Prix...
                </p>

                <div>
                  <Link to={`/blogs/1`}>
                    <a class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">
                      Read more
                    </a>
                  </Link>
                </div>
              </div>
            </article>
            {/* <!-- /Article -->

      <!-- Article 2 --> */}
            <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://s3.us-east-2.amazonaws.com/prod.mm.com/uploads/2020/10/09/1602247646_brooklands_heritage_drive_34_mmthumb.jpg"
                  loading="lazy"
                  alt=""
                  class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">January 1, 2024</span>

                <h2 class="text-xl font-bold text-gray-800">
                <Link to={`/blogs/3`}>
                  <a
                    class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    5 Classic Cars You Must Drive
                  </a>
                  </Link>
                </h2>

                <p class="text-gray-500">
                  Wonderful automobiles don’t become revered based solely on
                  their shapes or smells, however; the driving experience is the
                  paramount feature, as it separates a car from a lesser,
                  stationary piece of equipment.A great driving car is able to
                  elevate itself above the sum of its parts...
                </p>

                <div>
                  <Link to={`/blogs/3`}>
                    <a class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">
                      Read more
                    </a>
                  </Link>
                </div>
              </div>
            </article>
            {/* <!-- /Article -->

      <!-- Article 3 --> */}
            <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://d2dsc1gf0t80gb.cloudfront.net/wp-content/uploads/2015/06/20193602/why-do-people-still-love-classic-cars-1476934609388.jpg"
                  loading="lazy"
                  alt=""
                  class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">January 14, 2024</span>

                <h2 class="text-xl font-bold text-gray-800">
                <Link to={`/blogs/4`}>
                  <a
                
                    class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    Why Do People Still Love Classic Cars?
                  </a>
                  </Link>
                </h2>

                <p class="text-gray-500">
                  In most cases, classic cars are rubbish. As James May once
                  said, if they were any good, they’d still be made. Modern cars
                  are faster, better handling, more reliable, more comfortable,
                  cleaner, safer, more economical, and mostly cheaper to
                  purchase, too. Basically, they’re better in just about every
                  way.
                </p>

                <div>
                  <Link to={`/blogs/4`}>
                    
                    <a class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">
                      Read more
                    </a>
                  </Link>
                </div>
              </div>
            </article>
            {/* <!-- /Article -->

      <!-- Article 4--> */}
            <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://cars.bonhams.com/_next/image.jpg?url=https%3A%2F%2Fimages1.bonhams.com%2Fimage%3Fsrc%3DImages%2Flive%2F2008-01%2F20%2F7600745-2-10.jpg&w=2400&q=75"
                  loading="lazy"
                  alt=""
                  class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">January 8, 2020</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <Link to={`/blogs/2`}>
                    <a class="active:text-rose-600 transition duration-100 hover:text-rose-500">
                      Bugatti type 101 in Tunisia
                    </a>
                  </Link>
                </h2>

                <p class="text-gray-500">
                  odolfo Brignone will own, in Tunis, the car with chassis 101
                  502 from 1956. In 1964, he sold the car to a dealer
                  specialized in the Bugatti living in Brussels, Jean Dobbeleer
                  who resell it to Georges Marquet Delina, heir of an hotel
                  chain located in Brussels (Belgium Great hotels SA) and
                  Madrid...
                </p>

                <div>
                  <Link to={`/blogs/2`}>
                    <a class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">
                      Read more
                    </a>
                  </Link>
                </div>
              </div>
            </article>
            {/* <!-- /Article --> */}
          </div>
        </div>
      </aside>
    </section>
  );
};

export default BlogTwo;
