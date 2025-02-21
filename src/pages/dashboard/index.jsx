import React from 'react'
import Navigation from './components/Navigation'
import { GiCampCookingPot } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-red container m-auto  h-screen'>
        <Navigation/>
        <div className='px-4'>

            <div>

                
            <div className='mt-10'>
            <h3 className='md:text-3xl text-xl font-semibold'>Hello, 07064334158</h3>
            <p className='font-medium text-gray-600'>Get your gas refilled today</p>
        </div>

            </div>


            <div className='my-7'>


            <div>
                    <h2>Quick Purchase</h2>
                </div>
        <div className='bg-red- overflow-x-auto flex gap-4 py-6'>
            <div onClick={() => navigate("/dashboard/payment-form")} className='w-56 p-10 flex shrink-0 cursor-pointer flex-col justify-center items-center bg-gray-50 border border-gray-200 rounded-2xl'>
                <GiCampCookingPot />
                <p className='text-2xl font-medium'>5Kg</p>


            </div>
            <div className='w-56 p-10 shrink-0 flex cursor-pointer flex-col justify-center items-center bg-gray-50 border border-gray-200 rounded-2xl'>
                <GiCampCookingPot />
                <p className='text-2xl font-medium'>12Kg</p>
            </div>
            <div className='w-56 p-10 flex shrink-0 cursor-pointer flex-col justify-center items-center bg-gray-50 border border-gray-200 rounded-2xl'>
                <GiCampCookingPot className='text-primary'/>
                <p className='text-2xl shrink-0 font-medium'>30kg</p>
            </div>
            <div className='w-56 p-10 shrink-0 flex cursor-pointer flex-col justify-center items-center bg-gray-50 border border-gray-200 rounded-2xl'>
                <GiCampCookingPot />
                <p className='text-2xl font-medium'>7Kg</p>
            </div>
            <div className='w-56 p-10 shrink-0 flex cursor-pointer flex-col justify-center items-center bg-gray-50 border border-gray-200 rounded-2xl'>
                <GiCampCookingPot />
                <p className='text-2xl font-medium'>12Kg</p>
            </div>

        </div>
        </div>

        <div>
            <p className='text-gray-600 font-medium'>
                Purchase History
            </p>
        </div>


        <div className='flex gap-4  shadow border-gray-200/30 overflow-x-auto rounded px-5 py-6'>
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



        </div>
        </div>

    </div>
  )
}

export default Dashboard