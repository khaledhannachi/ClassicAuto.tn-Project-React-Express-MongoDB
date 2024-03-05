import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Create = ({loggedUser}) => {
  const handleRemoveImage = (index) => {
    setFormData((prevData) => {
      const updatedPhotos = [...prevData.photos];
      updatedPhotos.splice(index, 1); // Remove the image at the specified index
      return { ...prevData, photos: updatedPhotos };
    });
  };
  const [formData, setFormData] = useState({
    model: "",
    brand: "Alfa Romeo",
    condition: "Excelent",
    category: "Convertible",
    running: false,
    rarity: "Ordinary",
    hp: "",
    maxSpeed: "",
    price: "",
    city: "",
    exteriorColor: "",
    interiorColor: "",
    photos: [],
    mileage: "",
    phoneNumber:"",
    description: "",
    year: "", // Added field for the year made
  });

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
  const navigate = useNavigate();
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
    formdata1.append("user",loggedUser._id)

    for (let i = 0; i < formData.photos.length; i++) {
      // newarr.push(selectedFile[i]);
      formdata1.append("files", formData.photos[i]);
    }
    axios
      .post("http://localhost:8000/api/cars", formdata1)
      .then((res) => {
        console.log(res);
        navigate(`/user/${loggedUser._id}/dashboard`);  

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
  const create = {
    backgroundColor: "#E6CBAD",
    opacity: "0.8",
  };

  return (
    
    <div className="bg-slate-200 m-auto my-24 rounded-lg p-3 flex flex-col justify-center w-3/6 opacity-95">
      <h1 className="text-start mb-2 text-xl font-medium w-full my-4 ">It's always free to list with ClassicAuto.tn! Advertise to Tunisia's largest audience of classic car buyers, without it costing you a Dinar!</h1>
      <form
        onSubmit={handleSubmit}
        className="flex  flex-col w-full mt-2  p-3 text-center"
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

        <div className="flex justify-between" >
          <div className="mb-2 w-1/5 ">
            <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year :</label>
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
            <label htmlFor="rarity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rarity:</label>
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
            <label htmlFor="running" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Running:</label>
            <input
              type="checkbox"
              id="running"
              name="running"
              checked={formData.running}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-between" >


          <div className="mb-2 w-2/5 ">
            <label htmlFor="condition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Condition:</label>
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
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categories:</label>
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
          <div className="w-2/5" >
            <div className="mb-2">
              <label htmlFor="hp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Horsepower:</label>
              <input
                type="number"
                id="horsePower"
                name="hp"
                value={formData.horsePower}
                onChange={handleChange}

                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

              />
            </div>

            <div className="mb-2">
              <label htmlFor="maxSpeed" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Max Speed:</label>
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
              <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">price :</label>
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
              <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City:</label>
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
              <label htmlFor="exteriorColor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Exterior Color:</label>
              <input
                type="text"
                id="exteriorColor"
                name="exteriorColor"
                value={formData.exteriorColor}
                onChange={handleChange}

                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

              /></div>

            <div className="mb-2">
              <label htmlFor="interiorColor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Interior Color:</label>
              <input
                type="text"
                id="interiorColor"
                name="interiorColor"
                value={formData.interiorColor}
                onChange={handleChange}

                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

              /></div>

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
              type="tel"
              id="phoneNumber"
              name="phoneNumber"                                                                              
              // value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+000 00 000 000"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <label htmlFor="photos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photos:</label>

        <div className="flex items-center justify-center w-full">
          <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-29 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input type="file"
              name="photos"
              accept="image/*"
              multiple
              onChange={handleChange} id="dropzone-file" className="hidden" />
        <div>{formData.photos.length}</div>
          </label>
        </div>


        <div className="flex justify-center mt-2">
        

        
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-1/3 ">
            Submit
          </button>
        </div>
        <div className="flex justify-around flex-wrap gap-3 mt-4">
          {formData.photos &&
            formData.photos.map((image, idx) => (
              <div key={idx} className="relative">
                <img
                  width={150}
                  height={150}
                  src={URL.createObjectURL(image)}
                  alt={`preview-${idx}`}
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded"
                  onClick={() => handleRemoveImage(idx)}
                >
                  X
                </button>
              </div>
            ))}
        </div>

      </form>
    </div>
  );
};

export default Create;
