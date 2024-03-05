import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPW: "",
    
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPW: "",
  });
  const register = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        user,
        { withCredentials: true }
      );
      console.log("SERVER RESPONSE:", response.data);
      localStorage.setItem("token", response.data.token);
      window.location.href = '/home';
      //navigate("/home");
      console.log('Redirected to /home');
    } catch (error) {
      console.log("Error:", error.response.data);
      let tempErrors = {};
      for (let key of Object.keys(error.response.data)) {
        console.log(key, "------", error.response.data[key].message);
        tempErrors[key] = error.response.data[key].message;
      }
      setErrors({ ...tempErrors });
    }
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <h1 class="font-bold text-2xl text-center">Sign up</h1>
        <form
          onSubmit={register}
          class="bg-white px-6 py-8 rounded shadow-xl text-black w-full"
        >
          
          <div>
          <label >User Name </label>
          <input
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            value={user.username}
            type="text"
            class="flex items-center h-12 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            name="text"
          />
</div>
          <span className="text-red-600">{errors.username}</span>
          <div>
          <label >Email </label>

          <input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
            type="text"
            class="flex items-center h-12 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            name="email"
          /></div>
          <span className="text-red-600">{errors.email}</span>
          <div>
          <label >Password </label>

          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
            type="password"
            class="flex items-center h-12 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            name="password"
          /></div>
          <span className="text-red-600">{errors.password}</span>
          <div>
          <label >Confirm Password </label>
          <input
            onChange={(e) => setUser({ ...user, confirmPW: e.target.value })}
            value={user.confirmPW}
            type="password"
            class="flex items-center h-12 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            name="confirm_password"
          /></div>
          <span className="text-red-600">{errors.confirmPW}</span>
          <button
            type="submit"
            className="w-full flex items-center justify-center h-12 font-bold px-6 bg-gray-900 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-900"
          >
            Create Account
          </button>

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
            >
              Terms of Service and Privacy Policy
            </a>
      
            
          </div>
        </form>

       
      </div>
    </div>
  );
};

export default Register;
