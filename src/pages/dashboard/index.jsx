import React from 'react'
import Navigation from './components/navigation/Navigation'
import { GiCampCookingPot } from 'react-icons/gi'
import { Outlet, useNavigate } from 'react-router-dom'
import OrderForm from '../../components/orderForm/OrderForm'
import { useSelector } from 'react-redux'
import "./style.scss"
const Dashboard = () => {
    const navigate = useNavigate()
    const {user} = useSelector(state => state.auth)
  return (
    <div className='bg-red container m-auto  min-h-screen'>
        <Navigation/>
        <div className='px-4'>

            <div>

                
            <div className='mt-10'>
            <h3 className='md:text-3xl text-xl font-semibold'>Hello, {user?.phone}</h3>
            <p className='font-medium text-gray-600'>Get your gas refilled today</p>
        </div>

            </div>


            <div className='my-10'>
                <div className='grid  grid-cols-3'>
                <div className='bg-alt h-10 clip-triangl'></div>
                <div className='bg-gray-200 clip-triangle  border-r border-r-gray-/ '></div>
                <div className='bg-gray-200 clip-triangle'></div>
                </div>



  

                <div className='max-w-2xl m-auto mt-10 bg--50'>
                    {/* <button onClick={() => navigate("/dashboard/payment-form")} className='py-5 bg-alt text-white max-w-lg block w-full rounded-2xl font-semibold my-4'>
                        Buy Gas
                    </button> */}


                    <Outlet/>
                </div>

                {/* <div>
                    <h2 className='text-primary font-semibold'>Quick Purchase</h2>
                </div> */}
                {/* <div className='bg-red- overflow-x-auto flex gap-4 py-6'>
                    <div onClick={() => navigate("/dashboard/payment-form?kg=5")} className='md:w-56 w-40 p-6 md:p-10 flex shrink-0 cursor-pointer flex-col justify-center items-center bg-gray-50 border border-gray-200 rounded-2xl'>
                        <GiCampCookingPot />
                        <p className='text- md:text-2xl text-xl font-medium'>5Kg</p>


                    </div>
                    <div onClick={() => navigate("/dashboard/payment-form?kg=12.5")} className='md:w-56 w-40  p-6 md:p-10 shrink-0 flex cursor-pointer flex-col justify-center items-center bg-gray-50 border border-gray-200 rounded-2xl'>
                        <GiCampCookingPot />
                        <p className='text- md:text-2xl text-xl font-medium'>12Kg</p>
                    </div>
                    <div onClick={() => navigate("/dashboard/payment-form?kg=30")} className='w-56  p-6 md:p-10 flex shrink-0 cursor-pointer flex-col justify-center items-center bg-gray-50 border border-gray-200 rounded-2xl'>
                        <GiCampCookingPot className='text-primary'/>
                        <p className='text-2xl shrink-0 font-medium'>30kg</p>
                    </div>
                    <div onClick={() => navigate("/dashboard/payment-form?kg=7")} className='md:w-56 w-40  p-6 md:p-10 shrink-0 flex cursor-pointer flex-col justify-center items-center bg-gray-50 border border-gray-200 rounded-2xl'>
                        <GiCampCookingPot />
                        <p className='md:text-2xl text-xl font-medium'>7Kg</p>
                    </div>
                    <div onClick={() => navigate("/dashboard/payment-form?kg=12")} className='md:w-56 w-40  p-6 md:p-10 shrink-0 flex cursor-pointer flex-col justify-center items-center bg-gray-50 border border-gray-200 rounded-2xl'>
                        <GiCampCookingPot />
                        <p className='md:text-2xl text-xl font-medium'>12Kg</p>
                    </div>

                </div> */}
            </div>

        {/* <div>
            <p className='text-gray-600 font-medium'>
                Purchase History
            </p>
        </div> */}


        {/* <div className='flex gap-4 my-10  shadow border-gray-200/30 overflow-x-auto rounded px-5 py-6'>
            <div className='w-72 gap-4 p-3 py-3 md:py-8 shrink-0 flex items-center bg-gray-50 border border-gray-200 rounded-2xl'>
                <div className='bg-gray-100 border rounded p-2 shadow border-gray-300'>
                <GiCampCookingPot className='text-primary'/>

                </div>
            <div>
                <p className='font-medium'>23/04/2025</p>
                <p>NO 10 GraceVille Drive</p>
            </div>


            </div>
            <div className='w-72 gap-4 p-3  py-3 md:py-8 shrink-0 flex items-center bg-gray-50 border border-gray-200 rounded-2xl'>
                <div className='bg-gray-100 border rounded p-2 shadow border-gray-300'>
                <GiCampCookingPot className='text-primary'/>

                    </div>
                <div>
                    <p className='font-medium'>23/04/2025</p>
                    <p>NO 10 GraceVille Drive</p>
                </div>


            </div>
            <div className='w-72 gap-4 p-3 py-3 md:py-8 shrink-0 flex items-center bg-gray-50 border border-gray-200 rounded-2xl'>
                <div className='bg-gray-100 border rounded p-2 shadow border-gray-300'>
                <GiCampCookingPot className='text-primary'/>

                    </div>
                <div>
                    <p className='font-medium'>23/04/2025</p>
                    <p>NO 10 GraceVille Drive</p>
                </div>


            </div>
            <div className='w-72 gap-4 p-3 py-3 md:py-8 shrink-0 flex items-center bg-gray-50 border border-gray-200 rounded-2xl'>
                <div className='bg-gray-100 border rounded p-2 shadow border-gray-300'>
                <GiCampCookingPot className='text-primary'/>

                    </div>
                <div>
                    <p className='font-medium'>23/04/2025</p>
                    <p>NO 10 GraceVille Drive</p>
                </div>


            </div>



        </div> */}
        </div>

    </div>
  )
}

export default Dashboard