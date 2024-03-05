import React from 'react'
import Register from './Register'
import Login from './Login'
const LoginReg = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  scrollToTop ();
  return (
    <div className='' >

    <div className='flex w-screen justify-center '  > 
 <div className=' mr-40 '>
        <div className="flex gap-96">
            <div className="">
                <Register />
            </div>
            <div className="">
                <Login />
            </div></div>
        </div>
    </div></div>
  )
}

export default LoginReg