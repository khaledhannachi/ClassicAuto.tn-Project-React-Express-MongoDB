import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AccordionC from "./AccordionC";

function ShowOne({ loggedUser, setLoggedUser }) {
  const [favList, setFavList] = useState([]);
  const [car, setCar] = useState(null);
  const [selectedcarImg, setSelectedCarImg] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cars/${id}`)
      .then((res) => {
        console.log("✅ShowOne: oneCar gotten successfully!", res.data);
        setCar(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log("❌ShowOne: something went wrong!", err));
  }, [id]);

  useEffect(() => {
    if (car && car.user) {
      axios
        .get(`http://localhost:8000/api/user/${car.user}`)
        .then((res) => {
          console.log("✅ShowOne: oneUser gotten successfully!", res.data);
          setUser(res.data);
        })
        .catch((err) => console.log("❌ShowOne: something went wrong!", err));
    }
  }, [car]);

  const favFn = (car_id) => {
    if (!isLoading) {
      axios
        .put(
          `http://localhost:8000/api/user/${loggedUser._id}`,
          {
            $push: {
              favs: car_id,
            },
          },
          { new: true, runValidators: true }
        )
        .then((res) => {
          console.log("✅favFn: Added to Favourites successfully!", res.data);
          setLoggedUser(res.data);
          setFavList(res.data["favs"]);
        })
        .catch((err) => console.log("❌favFn: something went wrong!", err));
    }
  };

  const unFavFn = (car_id) => {
    if (!isLoading) {
      axios
        .put(
          `http://localhost:8000/api/user/${loggedUser._id}`,
          {
            $pull: {
              favs: car_id,
            },
          },
          { new: true, runValidators: true }
        )
        .then((res) => {
          console.log("✅favFn: Removed from Favourites successfully!", res.data);
          setLoggedUser(res.data);
          setFavList(res.data["favs"]);
        })
        .catch((err) => console.log("❌favFn: something went wrong!", err));
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToTop();
  }, []); // Run only once on mount

  return (
    <div>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
          <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex -mx-4">
              <div className="w-full mb-8 md:w-1/2 md:mb-0">
                <div className="sticky top-0 overflow-hidden">
                  <div className="relative mb-6 lg:mb-10 lg:h-2/4">
                    <img
                      src={car.photos[selectedcarImg]}
                      alt=""
                      className="object-cover w-full lg:h-full"
                    />
                  </div>
                  Photos List
                  <div className="flex-wrap hidden md:flex">
                    {car.photos.map((photo, i) => (
                      <div
                        onClick={() => setSelectedCarImg(i)}
                        key={i}
                        className={`w-1/2 p-2 sm:w-1/4 ${
                          selectedcarImg === i ? "border-8" : ""
                        }`}
                      >
                        <a className="block border border-orange-300 hover:border-orange-300">
                          <img
                            src={photo}
                            alt=""
                            className="object-cover w-full lg:h-20"
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400"></div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="lg:pl-20">
                  <div className="mb-8 ">
                    <div className="flex justify-between">
                      <h2 className="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                        {car.model}
                      </h2>
                      {!favList.includes(car._id) ? (
                        <button
                          onClick={() => favFn(car._id)}
                        >
                          <p>🤍</p>
                        </button>
                      ) : (
                        <button
                          onClick={() => unFavFn(car._id)}
                        >
                          <p>💓</p>
                        </button>
                      )}
                    </div>
                    <h2 className="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                      {car.brand}
                    </h2>
                    <p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400">
                      <span>{car.price / 1000} DT </span>
                      <br />
                      <span className="text-base font-bold text-black dark:text-gray-400">
                        {car.mileage} KM
                      </span>
                    </p>
                    <br />
                    <label htmlFor="">
                      Description:
                      <p className="max-w-md text-gray-700 dark:text-gray-400">
                        {car.description}
                      </p>
                    </label>
                  </div>

                  <div className="mb-7 flex">
                    {loggedUser ? (
                      <>
                        <div className=" mb-7 flex flex-col text-start gap-2 border-2 rounded-3xl shadow font-bold border-cyan-800 p-3">
                          <h2>Name : {user.username}</h2>
                          <h2>Email : {user.email}</h2>
                          <h2>Tel :{car.phoneNumber}</h2>
                        </div>
                      </>
                    ):(
                      <Link to={"/login"}>
                        <a className="bg-blue-800 w-72 justify-center text-center text-white rounded-3xl shadow px-10 py-3 flex items-center">
                          Login To View Seller Details
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="lg:pl-20">
                  <div className="mb-8">
                    <AccordionC car={car} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ShowOne;
