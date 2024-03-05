import React from "react";
import { useState } from "react";
import Nav from "../components/Nav";
const CreateCar = () => {
  const [formData, setFormData] = useState({
    model: "",
    brand: "Mercedes",
    condition: "Excelent",
    categories: "Convertible",
    running: false,
    rarity: "Ordinary",
    horsePower: 2,
    maxSpeed: 100,
    city: "",
    exteriorColor: "",
    interiorColor: "",
    photos: [],
    yearMade: 1920, // Added field for the year made
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : type === "file" ? files : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", formData);
  };
  const brands = [
    "Mercedes",
    "Wolkswagen",
    "Peugeot",
    "Ferrari",
    "Fiat",
    "Alfa Romio",
    "Porshe",
    "Astin Martin",
    "Bently",
    "Rolls Royce",
    "Jaguar",
    "Land Rover",
    "Chevrolet",
    "Ford",
    "Dodge",
    "Mazda",
    "Cadilac",
    "Volvo",
    "Jeep",
    "Maserati",
  ];

  const create = {
    backgroundColor: "#E6CBAD",
    opacity: "0.8",
  };

  return (
      <div className="w-1/3 flex justify-center items-center h-screen">
      <div className="flex justify-center">

        <form
          onSubmit={handleSubmit}
          className="flex  flex-col w-full mt-5  border border-gray-300 rounded-lg p-7 text-center"
          style={create}
        >
          <div className="flex justify-between">
            <div className="mb-5 w-2/5 ">
              <label
                for="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Model
              </label>
              <input
                type="text"
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5 w-2/5 ">
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Brand:
              </label>
              <select
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {brands.map((e, idx) => (
                  <option key={idx} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="mb-5 w-1/5 ">
              <label
                htmlFor="yearMade"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Year :
              </label>
              <input
                type="text"
                id="yearMade"
                name="yearMade"
                value={formData.yearMade}
                onChange={handleChange}
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5 w-1/3 ">
              <label
                htmlFor="rarity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rarity:
              </label>
              <select
                type="text"
                id="rarity"
                name="rarity"
                value={formData.rarity}
                onChange={handleChange}
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Ordinary">Ordinary</option>
                <option value="Rare">Rare</option>
                <option value="Jewel">Jewel</option>
              </select>
            </div>
            <div className="mb-5 w-1/5 ">
              <label
                htmlFor="running"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Running:
              </label>
              <input
                type="checkbox"
                id="running"
                name="running"
                checked={formData.running}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mb-5 w-2/5 ">
              <label
                htmlFor="condition"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Condition:
              </label>
              <select
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                required
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Excelent">Excelent</option>
                <option value="Fine">Fine</option>
                <option value="Very Good">Very Good</option>
                <option value="Good">Good</option>
                <option value="Restorable">Restorable</option>
                <option value="Parts Cars">Parts Cars</option>
              </select>
            </div>
            <div className="mb-5 w-2/5 ">
              <label
                htmlFor="categories"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Categories:
              </label>
              <select
                type="text"
                id="categories"
                name="categories"
                value={formData.categories}
                onChange={handleChange}
                required
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="new">Convertible</option>
                <option value="Van">Van</option>
                <option value="Sports Cars">Sports Cars</option>
                <option value="Muscle cars">Muscle cars</option>
                <option value="Antique Cars">Antique Cars</option>
                <option value="Classic Trucks">Classic Trucks</option>
                <option value="Race Cars">Race Cars</option>
              </select>
            </div>
          </div>
          <label
            htmlFor="horsePower"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Horsepower:
          </label>
          <input
            type="number"
            id="horsePower"
            name="horsePower"
            value={formData.horsePower}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="maxSpeed"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Max Speed:
          </label>
          <input
            type="number"
            id="maxSpeed"
            name="maxSpeed"
            value={formData.maxSpeed}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="exteriorColor"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Exterior Color:
          </label>
          <input
            type="text"
            id="exteriorColor"
            name="exteriorColor"
            value={formData.exteriorColor}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="interiorColor"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Interior Color:
          </label>
          <input
            type="text"
            id="interiorColor"
            name="interiorColor"
            value={formData.interiorColor}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="photos"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Photos:
          </label>
          <input
            type="file"
            id="photos"
            name="photos"
            accept="image/*"
            multiple
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

  );
};

export default CreateCar;
