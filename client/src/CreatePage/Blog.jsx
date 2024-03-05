import React from "react";
import { Link } from "react-router-dom";
const Blog = () => {
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
          >
          </label>
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
            <p class="text-gray-500">Published november 4, 2023</p>
            <h1 class="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              Tunisia Hidden Gems!
            </h1>
            <p class="mt-6 text-lg text-gray-700">By Federico Fabbri</p>
            <p class="mt-6 text-lg text-gray-700">Photography by Rosario Liberti</p>
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
              src="https://d2dsc1gf0t80gb.cloudfront.net/wp-content/uploads/2018/11/16100910/Rosario-Liberti-Grand-Prix-Historique-de-Tunisie-11-1000x667.jpg"
              alt=""
            />
          </header>

          <div class="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <h2 class="text-2xl font-semibold">
              Road Racing With A Truly Old School Approach In Tunisia
            </h2>
            <blockquote class="max-w-lg border-l-4 px-4">
              The universe is not only pixelated by stars, and in the same way
              that all the little worlds you’ve never seen behind the light of
              brighter objects nonetheless contribute their piece to the night
              sky, the automotive isle of the universe is also constellated with
              curious little events passing under the radar.
              <span class="whitespace-nowrap text-sm">— Federico Fabbri</span>
            </blockquote>
            <p>
              While Italy was troubled by some of the worst rainstorms that
              we’ve had in many years, Rosario and I flew off to Tunisia to
              check out the Grand Prix Historique de Yasmin-Hammamet to explore
              one of these lesser-known events, in this case a historic revival
              of the Tunis Grand Prix.
            </p>
            <p>
              The original race was a competition held between the end of the
              1920s and the 1930s in Tunis, at that time the capital of the
              African colony that was under the French protectorate. It was a
              street circuit. The first competition took place on June 3, 1928,
              and by its end Algerian-based driver Marcel Lehoux had won the
              200-mile-long race in his Bugatti T35C in a field mainly
              consisting of other Bugattis and some Amilcars. One year later,
              Italian driver Gastone Brilli-Peri won in a works Alfa Romeo P2
              after the early retirements of teammates Achille Varzi and Baconin
              Borzacchini. In 1931, after a year off, and until 1937, the event
              used a new route: a triangular highway circuit laid out between
              the then-separate cities of Tunis and Carthage. Achille Varzi won
              that version three times (with Bugatti and Auto Union), while
              Tazio Nuvolari (Scuderia Ferrari’s Alfa Romeo), Rudolf Caracciola
              (Mercedes-Benz), and Raymond Sommer (Talbot) finished first
              overall one time each.The event was then dormant for a time,
              returning in 1955 as a sports car race with a small 14-car entry
              in a public park, called the Circuit du Belvedere. The race saw a
              pair of Ferrari 750 Monzas take home the silverware with Luigi
              Piotti and Luigi Bordonaro driving with the rest of the pack
              filled with 2.0L cars.
            </p>
            <img src='https://d2dsc1gf0t80gb.cloudfront.net/wp-content/uploads/2018/11/16100941/Rosario-Liberti-Grand-Prix-Historique-de-Tunisie-14-1000x667.jpg' alt="..." />
            <p>
              There is now a revival event, made possible by a very close bunch
              of friends that took over the seaside of Hammamet for a weekend of
              races, conviviality, and relaxation. The roster of cars was pretty
              slim compared to some of the bigger historic gatherings, but we
              had the pleasure to see some curious and quite interesting
              specimens all the same. Amongst them I would underline the
              Scuderia del Portello’s Giulia Spider 1600 Carrera Panamericana,
              Giulia GTA 1300, and the Giulietta Sprint 1600. Gaby Von Oppenheim
              was driving a very rare prototype of the Giulia SS dressed by
              Carrozzeria Colli. Count Alessandro Federico—a man who
              participated in the Targa Florio, the real one—drove his 1935 Fiat
              Balilla 508S Coppa d’Oro from Sicily. Moreover, a black Porsche
              Speedster, a Triumph TR2, a red Marcos 1600 GT, a Mini Cooper, and
              a flaking red, unrestored, never-seen-before Ferrari. A very
              uncommon prancing horse with a particular story, entered by an
              Austrian gentleman driver.
            </p>
            <img src='https://d2dsc1gf0t80gb.cloudfront.net/wp-content/uploads/2018/11/16101330/Rosario-Liberti-Grand-Prix-Historique-de-Tunisie-37-1000x667.jpg' alt="..." />
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

export default Blog;
