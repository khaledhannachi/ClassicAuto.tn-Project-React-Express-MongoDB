/* eslint-disable react/prop-types */
"use client";
import { Card } from "flowbite-react";

const FullDetials = ({car}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  scrollToTop ();
  return (
    <div>
      <Card className="max-w-sm">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        {car.category}
        </h5>
        
                    
        <div className="flex-wrap hidden md:flex ">
          <div className="flex">
            <svg
              className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-normal">
            <strong>Condition:</strong> {car.condition}
            </p>
            </div>
          <div className="flex">
            <svg
              className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-normal">
            <strong>Running:</strong> {car.running}
            </p>
            </div>
          <div className="flex">
            <svg
              className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-normal">
            <strong>Rarity:</strong> {car.rarity}
            </p>
            </div>
          <div className="flex">
            <svg
              className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-normal">
            <strong>hp:</strong> {car.hp}
            </p>
            </div>
          <div className="flex">
            <svg
              className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-normal">
            <strong>MaxSpeed:</strong> {car.maxSpeed}
            </p>
            </div>
          <div className="flex">
            <svg
              className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-normal">
            <strong>City:</strong> {car.city}
            </p>
            </div>
          <div className="flex">
            <svg
              className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-normal">
            <strong>Year:</strong> {car.year}
            </p>
            </div>
          <div className="flex">
            <svg
              className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-normal">
            <strong>ExteriorColor/InteriorColor:</strong> {car.exteriorColor+" / "+car.interiorColor}
            </p>
            </div>
         
          </div>
      </Card>
    </div>
  );
};

export default FullDetials;
