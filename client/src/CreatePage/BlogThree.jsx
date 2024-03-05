import React from "react";
import { Link } from "react-router-dom";
const BlogThree = () => {
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
            <p class="text-gray-500">Published January 1, 2024</p>
            <h1 class="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              5 Classic Cars You Must Drive
            </h1>
            <p class="mt-6 text-lg text-gray-700">By Staff Writer</p>
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
              src="https://s3.us-east-2.amazonaws.com/prod.mm.com/uploads/2020/10/09/1602247646_brooklands_heritage_drive_34_mmthumb.jpg"
              alt=""
            />
          </header>

          <div class="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <h2 class="text-2xl font-semibold">
              A world-class automobile is a combination of tangible and etherial
              attributes.
            </h2>
            <blockquote class="max-w-lg border-l-4 px-4">
              Wonderful automobiles don’t become revered based solely on their
              shapes or smells, however; the driving experience is the paramount
              feature, as it separates a car from a lesser, stationary piece of
              equipment. A great driving car is able to elevate itself above the
              sum of its parts, much as a jug-headed Fred Astaire became more
              handsome and sophisticated as soon as he started dancing.
              <span class="whitespace-nowrap text-sm">— Federico Fabbri</span>
            </blockquote>
            <h2 class="text-2xl font-semibold">
              The Original Sports Car: Mercer 35R Raceabout, 1910-’15
            </h2>
            <p>
              We start our list with the car that arguably started the sports
              car craze. Long before MGs, Triumphs and Corvettes were cruising
              our streets and terrorizing our tracks, the Mercer Raceabout was
              the supercar of every boy’s dreams. Back in the days when a top
              speed of 30 or 40 mph was out of sight, the Mercer guaranteed 70
              mph. The Raceabout was small and low-slung in an age of huge,
              top-heavy, brass-era machines. It was also the first automobile to
              use handling, not bags of horsepower, to win races. While its 56
              horsepower may not sound like much, the Mercer accelerates more
              like a ’50s-era MG or Triumph than something built before World
              War I. The transmission is also much better than one would
              reasonably expect, and the car handles quite well despite its
              vintage. The biggest letdown is probably the brakes, which
              unfortunately are next to nonexistent.
            </p>
            {/* artic 2 */}
            <h2 class="text-2xl font-semibold">
              A Big, Hairy Machine From a Bygone Era: Bentley, 1919-’32
            </h2>
            <p>
              According to Ettore Bugatti, W.O. Bentley built “the world’s
              fastest lorries.” That statement is as true today as it was then,
              since Bentleys are big, powerful sporting cars with engines
              ranging anywhere from 3 to 8 liters, some with superchargers. The
              vintage Bentleys are certainly unlike the low-slung machines
              produced by Bugatti. The driver sits tall in the saddle. You don’t
              drive one of these big Bentleys; you make an attempt to tame it.
            </p>

            <img
              src="https://s3.us-east-2.amazonaws.com/prod.mm.com/uploads/2020/10/09/1602247646_brooklands_heritage_drive_34_mmthumb.jpg"
              alt="..."
            />
            {/* artic 3 */}
            <h2 class="text-2xl font-semibold">
              Pick Your Poison—Gentle or Rough: Alfa Romeo 6C and 8C, 1929-’38
            </h2>
            <p>
              The Alfa Romeo 6C 1750 and its replacement, the 8C 2300, are two
              of the most famous and most coveted Alfas ever released. Both were
              developed by Vittorio Jano, but they’re very different cars. The
              6C 1750’s strength lies in the terrific balance of its engine and
              chassis. It handles extremely well and is capable of 100 mph. The
              controls are reasonably light, and the rev-happy, six-cylinder
              engine sounds glorious. The result is a very nice car that’s a joy
              to drive at the limit, something that feels quite modern for its
              time.
            </p>

            <img
              src="https://s3.us-east-2.amazonaws.com/prod.mm.com/uploads/2020/10/09/1602247661_dsc_7699_mmthumb.jpg"
              alt="..."
            />
            {/* artic 4*/}
            <h2 class="text-2xl font-semibold">
              Know Your Roots: MG T-series, 1936-’55
            </h2>
            <p>
              Here’s the machine that afflicted Americans with the sports car
              bug. Most of us know the story: Servicemen stationed in Europe
              catch the fever and return home with their MGs in tow. Domestic
              hobby follows. While it’s not fast by today’s standards, the MG
              was a revelation at the time because it handled well and had
              decent brakes. It was also light on its feet. All of this was a
              huge contrast to just about everything else available in America.
              Sure, the MG doesn’t sport acres of chrome or cool tail fins, but
              it follows its master’s every command. Ask it to change direction,
              and it does so without any hesitation.
            </p>

            <img
              src="https://s3.us-east-2.amazonaws.com/prod.mm.com/uploads/2020/10/09/1602247677_img_0801_mmthumb.JPG"
              alt="..."
            />
            {/* artic 5*/}
            <h2 class="text-2xl font-semibold">
              The Sports Car That’s Built Like a Vault: Mercedes-Benz 300 SL,
              1954-’63
            </h2>
            <p>
              he Mercedes-Benz 300 SL is one of the tightest convertibles ever
              built. The build quality is simply stunning, draping the occupants
              in quality and luxury while cocooning them in comfort. Everything
              within reach feels and looks so right. The driving experience
              follows that same path. This isn’t a light roadster like an MG or
              Triumph. Instead, the 300 SL feels big and powerful—because it is,
              thanks to its injected 3.0-liter inline six.
            </p>

            <img
              src="https://s3.us-east-2.amazonaws.com/prod.mm.com/uploads/2020/10/09/1602247703_dsc_0049_mmthumb.JPG"
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

export default BlogThree;
