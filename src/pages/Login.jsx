import React, { useState } from 'react'

const Login = () => {

  const [currentState,setCurrentState] = useState('Sign Up');
  const onSubmitHandler = async(e) => {
    e.preventDefault();
  }

  return (
    <form  onSubmit={onSubmitHandler}  className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prate-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>
        {currentState === 'Log In' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Full Name' required/>}
        <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
        <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
        {currentState === 'Log In' ? '' : <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Retype Password' required/>}
        <div className='w-full flex justify-between text-sm mt-[8px]'>
            <p className='cursor-pointer hover:font-bold transition-all duration-100'>Forget Password?</p>
            {
              currentState === 'Log In' ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer hover:font-bold transition-all duration-100'>Join Us!</p> : <p onClick={()=>setCurrentState('Log In')}className='cursor-pointer hover:font-bold transition-all duration-100'>Already a member?</p>
            }
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Log In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login