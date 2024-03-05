import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
const Logout = () => {
    const navigate = useNavigate();
// Alert
    const popUp = async (event) => {
      event.preventDefault();

      const result = await Swal.fire({
          title: 'Logging Out',
          text: "Are You Sure You Want To Log Out?",
          showCancelButton: true,
          confirmButtonText: 'Yes, logout!',
          cancelButtonText: 'Cancel',
          reverseButtons: true,
      });

      if (result.isConfirmed) {
          logout();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
              title: 'Cancelled',
              text: 'Your session is safe :)',
              icon: 'error',
          });
      }
  };
// End Alert


    const logout = async () =>{
     
        try {
            await axios.post('http://localhost:8000/api/logout',{}, {withCredentials:true})
            localStorage.removeItem('token')
            navigate(window.location.href='/home')
        } catch (error) {
            console.log('Error', error)
        }
    }
  return (<button className='bg-red font-bold'  onClick={popUp} >
   Logout</button>
  )
}
export default Logout