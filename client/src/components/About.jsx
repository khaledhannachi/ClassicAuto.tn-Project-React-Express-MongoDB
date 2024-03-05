import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const About = () => {
  return (

    <section class="pb-24 ">
    <div class="relative mb-20 h-96">
    <img class="object-cover w-full h-full" src="./src/assets/imgs/50.avif" alt=""/>
    
    </div>
    <div class="max-w-3xl px-4 mx-auto text-center">
    <h2 class="text-3xl font-bold text-black mb-14 lg:text-5xl dark:text-gray-400">
   About Us
    </h2>
    <div class="inline-flex items-center mb-10 lg:mb-14">
    </div>
    <div class="mx-auto md:max-w-3xl">
    <p class="pb-10 mb-8 text-lg text-black border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 md:text-xl">
    ClassicAuto.tn has earned the trust of thousands of
                  individuals seeking a reliable platform for buying and selling
                  classic vehicles. Fueled by an unapologetic passion for
                  classic cars, trucks, and all things in between, our mission
                  is to go beyond being a marketplace. We aspire to cultivate a
                  vibrant community where enthusiasts can wholeheartedly engage
                  with their shared passion. Whether you're in pursuit of a
                  timeless classic or looking to connect with fellow
                  enthusiasts, ClassicAuto.tn is dedicated to providing a
                  seamless and enriching experience. Our commitment to the world
                  of classic vehicles extends beyond transactions; it's about
                  creating a space where the love for these automotive gems can
                  be celebrated, shared, and cherished.</p>
    </div>
    </div>
    </section>
  );
};

export default About;
