import React from 'react'
import AppButton from '../button/Button'
import { useSelector } from 'react-redux'
import "./style.scss"

const Login = () => {
    const {user} = useSelector(state => state.app)
  return (

    <div className="max-w-lg login text-justify">

   
    <p className='bg-gray text-2xl text-left max-w-6xl mt-20 md:mt-16 md:text-4xl font-bold  text-gray-200 '>
    Get Reliable Supply of Cooking Gas For your household today.
    </p>
    <div className='text-gray-200 text-3xl text-center font-extrabold  bg-primary rounded-lg p-8 max-w-6xl tracking-widest md:text-5xl mt-5 '>
        <p className='text-lg  leading-8 tra'>Welcome </p>
     {user.phone}
    </div>
    <div className=" text-white">
        <p className='my-4 font-bold text-xl my- text-left'>        Enter your password to continue
        </p>
      <input type='password' className="py-6 focus:border-none  px-4 text-2xl bg-gray-200/10 border border-white rounded-2xl text-white w-full" placeholder="Enter Password" />
      <AppButton className={"h-80 text"}
      style={
        {
            fontSize: "20px"
        }
      }>
        Click To Continue
      </AppButton>
      <div className='gap-6 flex'>
      <button className='bg-gray-300 transition-all duration-200 ease-in-out hover:text-alt hover:bg-gray-100 text-alt font-semibold px-4 md:px-10 rounded py-2'> Forget your password   </button>
      <button className='bg-primary transition-all duration-200 ease-in-out hover:text-alt hover:bg-gray-100 text-white font-semibold px-4 md:px-10 rounded py-2'> Register </button>
         
      </div>
        
    </div>
    </div>
  )
}

export default Login