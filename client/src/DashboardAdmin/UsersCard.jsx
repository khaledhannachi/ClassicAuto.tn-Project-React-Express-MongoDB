import React from 'react'
import { FaUsers } from "react-icons/fa";
import axios from 'axios';
const UsersCard = ({users, updated, setUpdated}) => {
      // Delete
  const Delete = (id) => {
    axios
      .delete(`http://localhost:8000/api/user/${id}`)
      .then((res) => { setUpdated(!updated);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="text-gray-900 bg-gray-200 mt-5">
    <div className="p-4 flex">
        <h1 className="text-3xl">
            Users
        </h1>
    </div>
    <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4 t">
            <tbody>
                <tr className="border-b ">
                    <th className="text-left p-3 px-5">Name</th>
                    <th className="text-left p-3 px-5">Email</th>
                    <th className="text-left p-3 px-5">Role</th>
                    <th className="text-left p-3 px-5">Action</th>
                </tr>
              {users.map((user,idx)=><tr className="border-b hover:bg-orange-100">
                    <td className="p-3 px-5"><input type="text" value={user.username} className="bg-transparent" /></td>
                    <td className="p-3 px-5"><input type="text" value={user.email} className="bg-transparent"/></td> 
                    <td className="p-3 px-5"><input type="text" value={user.role} className="bg-transparent"/></td> 
                {user.role==="user"?<button
                      onClick={() => Delete(user._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                    >
                      Delete
                    </button>:""}
                </tr>)}
            </tbody>
        </table>
    </div>
</div>
  )
}

export default UsersCard