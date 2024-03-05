import React from "react";
import { Link } from "react-router-dom";
import Logout from "../logInAndRegistration/Logout";

const Nav = ({ loggedUser }) => {
  console.log("loggedUser*******************************************************:", loggedUser);
  const token = localStorage.getItem("token");
  return (
    <div className="flex flex-wrap place-items w-full">
      {/* <!-- navbar --> */}
      <nav className="flex bg-gray-900 text-white w-full z-50 fixed">
        <div className="px-5 xl:px-12 py-6 flex w-screen items-center">
          <Link to={`/home`}>
            <img
              className=" w-28 m-0"
              src="./src/assets/imgs/9.png"
              alt="logo"
            />
          </Link>
          {/* <!-- Nav Links --> */}
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <Link to={`/home`}>
              <li>Home</li>
            </Link>
            <Link to={`/cars`}>
              <li>Cars For Sale</li>
            </Link>
            <Link to={`/cars/new`}>
              <li>Sell Your Car</li>
            </Link>
            <Link to={`/blogs`}>
              <li>Blog</li>
            </Link>
            <Link to={`/events`}>
              <li>Events</li>
            </Link>
            <Link to={`/about`}>
              <li>About</li>
            </Link>
            <Link to={`/contact`}>
              <li>Contact Us</li>
            </Link>
          </ul>
          {/* <!-- Header Icons --> */}
          <div className="hidden xl:flex items-center space-x-5">
            {/* <!-- Sign In / Register      --> */}
            {loggedUser ? (
              <>
                <h2 className="">{loggedUser.role === "admin" ?"Welcome Admin": <h2> {loggedUser.username}</h2> }  </h2>
                <Logout />
                {loggedUser.role === "admin" ? (
                  <Link to={"/admin/dashboard"}>
                    <a className="flex items-center hover:text-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 hover:text-gray-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>
                  </Link>
                ) : (
                  <>
<Link to={"/favourites"}>
                  <a className="hover:text-gray-200">
              
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
</Link>
                  <Link to={`/user/${loggedUser._id}/dashboard`}>
                    <a className="flex items-center hover:text-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 hover:text-gray-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>
                  </Link>
                  </>
                )
              }
              </>
            ) : (
              <>
                <Link to="/login">
                  <h2>Login</h2>
                </Link>
              </>
            )}

          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
