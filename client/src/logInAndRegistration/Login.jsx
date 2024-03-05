import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({ email: '', password: '' })
    const login = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/api/login', user, { withCredentials: true })
            console.log('SERVER RESPONSE:', response.data)
             localStorage.setItem('token', response.data.token)
              window.location.href = '/home';
        } catch (error) {
            console.log("Error:", error.response.data);
            let tempErrors = {}
            for (let key of Object.keys(error.response.data)) {
                console.log(key, '------', error.response.data[key].message);
                tempErrors[key] = error.response.data[key].message
            }
            setErrors({ ...tempErrors })
        }
    }
    return (
        <div className=' container max-w-sm mt-44 mx-auto flex-1 flex flex-col items-center justify-center px-2'>
<div class="flex flex-col justify-center items-center text-black">
	<h1 class="font-bold text-2xl">Login</h1>
	<form onSubmit={login} class="flex flex-col bg-white rounded shadow-lg p-12 mt-12">
		<label >Email</label>
		<input   onChange={e => setUser({ ...user, email: e.target.value })}
value={user.email} class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text"/>
		  <span className=" text-red-600">{errors.email}</span>
        <label >Password</label>
		<input onChange={e => setUser({ ...user, password: e.target.value })}
value={user.password} class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"type="password"/>
		                        <span className="text-red-600">{errors.password}</span>

        <button class="flex items-center font-bold justify-center h-12 px-6 w-64 bg-gray-900 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-900">Login</button>

	</form>
	

</div>
</div>
        
    )
}

export default Login