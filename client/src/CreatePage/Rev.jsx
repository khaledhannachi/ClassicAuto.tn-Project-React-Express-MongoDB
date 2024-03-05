import React, { useState, useEffect } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";

const Rev = ({ loggedUser }) => {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  useEffect(() => {
    // Fetch reviews whenever hasBeenSubmitted changes
    fetchReviews();
  }, [hasBeenSubmitted]);

  const fetchReviews = () => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => {
        const filteredReviews = res.data.filter(
          (user) => user.review && user.rating
        );
        setReviews(filteredReviews);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (selectedValue) => {
    setRating(selectedValue);
  };

  useEffect(() => {
    if (loggedUser) {
      axios
        .get(`http://localhost:8000/api/users/${loggedUser._id}`)
        .then((res) => {
          // Handle the response data if needed
        })
        .catch((err) => console.error(err));
    }
  }, [loggedUser]);

  const submitHandler = (e) => {
    e.preventDefault();

    // Ensure loggedUser is not null before accessing _id
    if (loggedUser) {
      const updated = {
        rating,
        review,
      };

      axios
        .patch(`http://localhost:8000/api/users/${loggedUser._id}`, updated)
        .then(() => {
          setReview("");
          setRating(0);
          setHasBeenSubmitted(true);
          // No need to fetch reviews here, it will be done by the effect
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className=" w-screen  bg-stone-100 xl:h-scree ">
         {loggedUser && 
   
      <div className="flex items-center justify-center w-screen  bg-stone-100 xl:h-scree">
        <div className=" flex justify-center ">
          <div className="py-3 flex flex-col ">
            
            <div className="text-center mb-10 ">
              <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
                Your opinion matters to us!
              </h2>
            </div>
            <div className=" flex justify-center rounded-xl shadow-lg">
              <img
                className=" h-96"
                src="./src/assets/imgs/yoav-hornung-I0Q0r6TWQ8k-unsplash.jpg"
                alt=""
              />

              <form
                onSubmit={submitHandler}
                className="bg-gray-200 h-96 w-96 flex flex-col items-center"
              >
                <div className="flex flex-col items-center py-6 space-y-3">
                  <span className="text-lg text-gray-800">
                    How was Your Experience on Classicauto.tn?
                  </span>
                  <div className="">
                    <Rating
                      className=""
                      style={{ maxWidth: 180 }}
                      onChange={handleChange}
                      value={rating}
                    />
                  </div>
                </div>
                <div className="w-3/4 flex flex-col">
                  <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Enter your review..."
                    rows="3"
                    className="p-4 text-gray-500 rounded-xl resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="py-3 my-8 text-lg bg-gradient-to-r bg-gray-900 to-indigo-600 rounded-xl text-white"
                  >
                    Submit A Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>}
      {/* Testimonial */}
      <section className="flex items-center  xl:h-screen font-poppins dark:bg-gray-800 ">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {reviews.map((user) => (
              <blockquote
                key={user._id}
                className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center justify-center gap-4">
                  <div flex justify-center items-center text-center>
                    <div className="flex justify-center items-center text-center  gap-0.5">
                      <Rating
                        style={{
                          maxWidth: 180,
                          justifyContent: "center",
                          textAlign: "center",
                          alignContent: "center",
                          alignItems: "center",
                        }}
                        value={user.rating}
                        radius="large"
                        spaceInside="large"
                      />
                    </div>
                    <p className="mt-0.5 text-lg text-center font-medium text-gray-900">
                      {user.username}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-center">{user.review}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Rev;
