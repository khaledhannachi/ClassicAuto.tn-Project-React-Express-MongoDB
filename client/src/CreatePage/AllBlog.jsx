import React from "react";
import { Link } from "react-router-dom";

const AllBlog = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  scrollToTop ();
  return (
    
    <div class="container my-24 mx-auto md:px-6">
      <section class="mb-32 text-center md:text-left">
        <h2 class="mb-12 text-center text-3xl font-bold">Latest articles</h2>

        {/* Article 1 */}
        <div class="mb-6 flex flex-wrap">
          <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
            <div
              class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://d2dsc1gf0t80gb.cloudfront.net/wp-content/uploads/2018/11/16100941/Rosario-Liberti-Grand-Prix-Historique-de-Tunisie-14-1000x667.jpg"
                class="w-full"
                alt="Louvre"
              />
               <Link  to={`/blogs/1`}><a>
                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </a></Link>
              
            </div>
          </div>

          <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
            <Link  to={`/blogs/1`}><h5 class="mb-3 text-lg font-bold  hover:text-blue-900">Tunisia Hidden Gems</h5></Link>
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
                Published <u>11.04.2023</u> by
                <a href="#">Federico Fabbri</a>
              </small>
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
              While Italy was troubled by some of the worst rainstorms that
              we’ve had in many years, Rosario and I flew off to Tunisia to
              check out the Grand Prix Historique de Yasmin-Hammamet to explore
              one of these lesser-known events, in this case a historic revival
              of the Tunis Grand Prix.
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
                src="https://media.licdn.com/dms/image/C5612AQF0Ud5XNc2DAQ/article-cover_image-shrink_720_1280/0/1520062924774?e=1710374400&v=beta&t=U7lnRR4F8iqYlxOWiZHrAGCOVGg4YGgDXf8fcO1I-vg"
                class="w-full"
                alt="Louvre"
              />
              <Link  to={`/blogs/2`}><a>
                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </a></Link>
              
            </div>
          </div>
          <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
            <Link to={`/blogs/2`}><h5 class="mb-3 text-lg font-bold  hover:text-blue-900"> Bugatti type 101 in Tunisia</h5></Link>
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
                Published <u>01.08.2020</u> by
                <a href="#">Zein Mohsen</a>
              </small>
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
            odolfo Brignone will own, in Tunis, the car with chassis 101 502
              from 1956. In 1964, he sold the car to a dealer specialized in the
              Bugatti living in Brussels, Jean Dobbeleer who resell it to
              Georges Marquet Delina, heir of an hotel chain located in Brussels
              (Belgium Great hotels SA) and Madrid.
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
                src="https://s3.us-east-2.amazonaws.com/prod.mm.com/uploads/2020/10/09/1602247646_brooklands_heritage_drive_34_mmthumb.jpg"
                class="w-full"
                alt="Louvre"
              />
              <Link  to={`/blogs/3`}><a>
                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </a></Link>
              
            </div>
          </div>
          <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
           <Link to={`/blogs/3`}><h5 class="mb-3 text-lg font-bold  hover:text-blue-900"> 5 Classic Cars You Must Drive</h5></Link> 
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
                Published <u>01.01.2024</u> by
                <a>Staff Writer</a>
              </small>
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
            In most cases, classic cars are rubbish. As James May once
                  said, if they were any good, they’d still be made. Modern cars
                  are faster, better handling, more reliable, more comfortable,
                  cleaner, safer, more economical, and mostly cheaper to
                  purchase, too. Basically, they’re better in just about every
                  way.
            </p>
          </div>
        </div>

        {/* Article 4 */}

        <div class="mb-6 flex flex-wrap">
          <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
            <div
              class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://d2dsc1gf0t80gb.cloudfront.net/wp-content/uploads/2015/06/20193602/why-do-people-still-love-classic-cars-1476934609388.jpg"
                class="w-full"
                alt="Louvre"
              />
              <Link  to={`/blogs/4`}> <a>
                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </a></Link>
            </div>
          </div>
          <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
            <Link to={`/blogs/4`}><h5 class="mb-3 text-lg font-bold hover:text-blue-900 ">Why Do People Still Love Classic Cars?</h5></Link>
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
                Published <u>01.14.2024</u> by
                <a href="#">Ian Davies</a>
              </small>
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
            In most cases, classic cars are rubbish. As James May once said,
              if they were any good, they’d still be made. Modern cars are
              faster, better handling, more reliable, more comfortable, cleaner,
              safer, more economical, and mostly cheaper to purchase, too.
              Basically, they’re better in just about every way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllBlog;
