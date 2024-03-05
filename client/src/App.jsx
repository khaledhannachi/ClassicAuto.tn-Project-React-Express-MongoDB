import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Footer from "./components/Footer";
import Home from "./CreatePage/Home";
import Subscribe from "./components/Subscribe";
import AllBlog from "./CreatePage/AllBlog";
import Blog from "./CreatePage/Blog";
import Nav from "./components/Nav";
import SellCar from "./CreatePage/SellCar";
import BlogTwo from "./CreatePage/BlogTwo";
import BlogThree from "./CreatePage/BlogThree";
import BlogFour from "./CreatePage/BlogFour";
import Faq from "./CreatePage/Faq";
import "./App.css";
import ShowCars from "./CreatePage/ShowCars";
import ShowOne from "./ShowOne/ShowOne";
import DashboardPage from "./DashboardAdmin/DashboardPage";
import LoginReg from "./logInAndRegistration/LoginReg";
import RegisterAdmin from "./logInAndRegistration/RegisterAdmin";
import DashboardPageUser from "./DashboardUser/DashboardPageUser";
import Event1 from "./Events/Event1";
import Event2 from "./Events/Event2";
import Event3 from "./Events/Event3";
import Events from "./Events/Events";
import About from "./components/About";
import AboutPage from "./pages/AboutPage";
import Cookies from "js-cookie";
import Favourites from "./components/Favourites";

function App() {
  const token1 = Cookies.get("userToken");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [loggedUser, setLoggedUser] = useState(null); // Initialize loggedUser state
  const [favCars, setFavCars] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const GetLoggedUser = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user", {
          withCredentials: true,
        });
        console.log("Server Response:", response);
        const { token, loggedUser } = response.data;
        setLoggedUser(loggedUser);
      } catch (error) {
        console.log("Frontend Request Error:", error);
      }
    };
    if (token) {
      GetLoggedUser();
    }

    axios
    .get("http://localhost:8000/api/cars")
    .then((res) => {
        console.log("✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅ I AM HERE");
        console.log("✅NO_Fav_Cars: allCars gotten successfully!", res.data);
        const tempCars = [...res.data].filter((car)=>loggedUser["favs"].includes(car._id))
        
       setFavCars(tempCars);
        // setFavCars(res.data)
        setTimeout(console.log("***********",favCars),2000)
})
.catch((err) => console.log("❌NO_Fav_Cars: something went wrong!", err));



  }, [token]);

  return (
    <div>
      <Routes>
        {token1 ? (
          <>
            (
                 {/* Home Page */}
                 
  <Route
    path={"/home"}
    element={
      <>
        <Nav loggedUser={loggedUser} />
        <Home loggedUser={loggedUser} />
        <Subscribe />
        <Footer />
      </>
    }
  />

            <Route path="/" element={<Navigate to="/home" />} />
            <Route
          path="/favourites"
          element={
            <>
             <Nav loggedUser={loggedUser} />
          <Favourites loggedUser={loggedUser} favCars={favCars} />
          <Subscribe />
                  <Footer />
        </>
        }
        />
            <Route
              path="/admin/dashboard"
              element={
                <>
                  <DashboardPage />
                </>
              }
            />
            <Route
              path="/user/:id/dashboard"
              element={
                <>
                  <DashboardPageUser loggedUser={loggedUser} />
                </>
              }
            />
         <Route
              path="/login"
              element={
                <>
                  <Nav loggedUser={loggedUser} />
                  <LoginReg />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/admin/register"
              element={
                <>
                  <Nav loggedUser={loggedUser} />
                  <RegisterAdmin />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
         
            
     
            <Route
              path="/about"
              element={
                <AboutPage loggedUser={loggedUser} scrollToTop={scrollToTop} />
              }
            />
            <Route
              path="/blogs"
              element={
                <>
                  <Nav loggedUser={loggedUser}  />
                  <AllBlog />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/blogs/1"
              element={
                <>
                  <Nav loggedUser={loggedUser}  />
                  <Blog />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/blogs/2"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars} />
                  <BlogTwo />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/blogs/3"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars} />
                  <BlogThree />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/blogs/4"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars} />
                  <BlogFour />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/events"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <Events />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/events/1"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars} />
                  <Event1 />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/events/2"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <Event2 />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/events/3"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <Event3 />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/cars/new"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <SellCar loggedUser={loggedUser} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <Faq />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/cars/:id"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <ShowOne loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
                  <Footer />
                </>
              }
            />
            <Route
              path="/cars"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <ShowCars loggedUser={loggedUser} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars} />
                  <About />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route path={"*"} element={<Navigate to={"/home"} />} />)
            
          </>
        ) : (
          <>
            ({/* Login and registration */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/login"
              element={
                <>
                  <Nav loggedUser={loggedUser}  favCars={favCars}/>
                  <LoginReg />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/admin/register"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <RegisterAdmin />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            {/* Home Page */}
            <Route
              path="/home"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <Home />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
      
            <Route
              path="/about"
              element={
                <AboutPage loggedUser={loggedUser} scrollToTop={scrollToTop} />
              }
            />
            <Route
              path="/blogs"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <AllBlog />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/blogs/1"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars} />
                  <Blog />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/blogs/2"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars} />
                  <BlogTwo />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/blogs/3"
              element={
                <>
                  <Nav loggedUser={loggedUser}  favCars={favCars}/>
                  <BlogThree />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/blogs/4"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <BlogFour />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/events"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <Events />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/events/1"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <Event1 />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/events/2"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <Event2 />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/events/3"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <Event3 />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/cars/new"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars} />
                  <SellCar loggedUser={loggedUser} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars} />
                  <Faq />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route
              path="/cars/:id"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <ShowOne loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/cars"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <ShowCars loggedUser={loggedUser} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Nav loggedUser={loggedUser} favCars={favCars}/>
                  <About />
                  <Subscribe />
                  <Footer />
                </>
              }
            />
            <Route path={"*"} element={<Navigate to={"/home"} />} />)
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
