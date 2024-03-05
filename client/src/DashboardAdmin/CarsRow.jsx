import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowOne from "./ShowOneAdmin/ShowOne";
import Swal from 'sweetalert2';

const CarsRow = ({ car, etat, setEtat, setIsModalOpen, setIndex, ind, setType }) => {
  const [user, setUser] = useState({});
  const id = car.user;
  const id_car = car._id;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const confirm = (e) => {
    axios
      .patch(`http://localhost:8000/api/cars/${id_car}`, { status: "for sell" })
      .then((res) => {
        console.log(res.data);
        setEtat(!etat);
      })
      .catch((error) => console.log(error));
  };

  const Delete = async (e) => {
    // Delete Confirmation
    const result = await Swal.fire({
      title: "Are You Sure You Want To Delete This Car?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:8000/api/cars/${id_car}`);
        setEtat(!etat);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again.",
          icon: "error"
        });
      }
    }
  };

  return (
    <tr className="border-b hover:bg-orange-100">
      <td className="p-3 px-5">
        <input
          type="text"
          value={car.model}
          className="bg-transparent"
        />
      </td>
      <td className="p-3 px-5">
        <input
          type="text"
          value={car.brand}
          className="bg-transparent"
        />
      </td>
      <td className="p-3 px-5">
        <input
          type="text"
          value={user.username}
          className="bg-transparent"
        />
      </td>
      {car.status === "pending" ? (
        <td className="p-3 px-5 ">
          <button
            type="button"
            onClick={confirm}
            className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Confirm
          </button>
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIndex(ind);
              setType(1);
            }}
            type="button"
            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            View
          </button>

          <button
            type="button"
            onClick={Delete}
            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </td>
      ) : car.status === "for sell" ? (
        <td className="p-3 px-5 ">
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIndex(ind);
              setType(2);
            }}
            type="button"
            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            View
          </button>

          <button
            type="button"
            onClick={Delete}
            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </td>
      ) : car.status === "sold" ? (
        <td className="p-3 px-5 ">
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIndex(ind);
              setType(3);
            }}
            type="button"
            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            View
          </button>
          <button
            type="button"
            onClick={Delete}
            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
};

export default CarsRow;
