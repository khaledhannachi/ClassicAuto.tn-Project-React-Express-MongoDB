import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Edit = ({isOpen,car,setIsEdit,setEtat,etat }) => {
  console.log("============**************=========**************=========>",car)
  if (!isOpen) return null 
  
  const [formData, setFormData] = useState(car);
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? Array.from(files)
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata1 = new FormData();
    formdata1.append("brand", formData.brand);
    formdata1.append("category", formData.category);
    formdata1.append("city", formData.city);
    formdata1.append("condition", formData.condition);
    formdata1.append("exteriorColor", formData.exteriorColor);
    formdata1.append("hp", formData.hp);
    formdata1.append("interiorColor", formData.interiorColor);
    formdata1.append("maxSpeed", formData.maxSpeed);
    formdata1.append("mileage", formData.mileage);
    formdata1.append("model", formData.model);
    formdata1.append("price", formData.price);
    formdata1.append("rarity", formData.rarity);
    formdata1.append("running", formData.running);
    formdata1.append("year", formData.year);
    formdata1.append("description", formData.description);
    formdata1.append("phoneNumber", formData.phoneNumber);
    axios
      .patch(`http://localhost:8000/api/cars/${car._id}`, formData,console.log("For Data ID ********>>>>>",formData))
      .then((res) => {
        
        console.log(res);
        setEtat(!etat)
        setIsEdit(false);


      })
      .catch((err) => console.log(err));
  };

  const brands = [
    "Alfa Romeo",
    "Aston Martin",
    "Bentley",
    "Cadillac",
    "Chevrolet",
    "Dodge",
    "Ferrari",
    "Fiat",
    "Ford",
    "Jaguar",
    "Jeep",
    "Land Rover",
    "Maserati",
    "Mazda",
    "Mercedes",
    "Peugeot",
    "Porsche",
    "Rolls Royce",
    "Volkswagen",
    "Volvo",
    "Toyota",
    "Lancia",
  ];
  const Edit = {
    backgroundColor: "#E6CBAD",
    opacity: "1",
  };

  return (
    <div className="bg-slate-200 relative rounded-lg p-3 flex justify-center w-3/4 opacity-95">
      <button   
                type="button"
                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-lg "
                onClick={() => setIsEdit(false)}
              >
                X
              </button>
      <form
        onSubmit={handleSubmit}
        className="flex   flex-col w-full mt-2    text-center"
        
      >
        <div className="flex justify-between">
          <div className="mb-2 w-2/5 ">
            <label
              htmlFor="model"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Model
            </label>
            <input
              type="text"
              id="large-input"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-2 w-2/5 ">
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
          <div className="mb-2 w-1/5 ">
            <label
              htmlFor="year"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Year :
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-2 w-1/3 ">
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
          <div className="mb-2 w-1/5 ">
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
          <div className="mb-2 w-2/5 ">
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

          <div className="mb-2 w-2/5 ">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Categories:
            </label>
            <select
              type="text"
              id="category"
              name="category"
              value={formData.categories}
              onChange={handleChange}
              required
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Convertible">Convertible</option>
              <option value="Van">Van</option>
              <option value="Sports Cars">Sports Cars</option>
              <option value="Muscle cars">Muscle cars</option>
              <option value="Antique Cars">Antique Cars</option>
              <option value="Classic Trucks">Classic Trucks</option>
              <option value="Race Cars">Race Cars</option>
            </select>
          </div>
        </div>
        <div className=" flex justify-between">
          <div className="w-2/5">
            <div className="mb-2">
              <label
                htmlFor="hp"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Horsepower:
              </label>
              <input
                type="number"
                id="horsePower"
                name="hp"
                value={formData.hp}
                onChange={handleChange}
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mb-2">
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
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                price :
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="w-2/5">
            <div className="mb-2">
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
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-2">
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
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mb-2">
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
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mb-2 w-2/5">
            <label
              htmlFor="mileage"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mileage:
            </label>
            <input
              type="number"
              id="mileage"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-2 w-2/5">
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone Number :
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
       
        

        <div className="flex justify-center mt-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-1/3 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
