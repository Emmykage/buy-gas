import React from 'react'
import { useNavigate } from 'react-router-dom'
import { nairaFormat } from '../../../utils/nairaFormat'
import Navigation from '../components/navigation/Navigation'

const PaymentDetails = () => {
    const navigate = useNavigate()
  return (
    <>
        <div className='bg-red container m-auto  h-screen'>

    <Navigation/>

    <div  className='bg-gray-300 w-full p-3 '>
        <p className='text-center text-gray-900 font-semibold'>
            Review Your Order 
        </p>

    </div>
    <div className='m-auto bg--200 max-w-4xl my-10'>
        <div className='max-w-2xl m-auto border rounded text-center overflow-hidden shadow p-5'>
            <div className='flex gap-5 my-3'>
                <p className='flex-1 font-medium text-gray-700'>Name:       </p>
                <p className='flex-1 text-gray-800 font-semibold'>Jon Christopher</p>
            </div>
            <div className='flex gap-5 my-3'>
                <p className='flex-1 font-medium text-gray-700'>Kg:       </p>
                <p className='flex-1 text-gray-800 font-semibold'>12.5k</p>
            </div>
            <div className='flex gap-5 my-3'>
                <p className='flex-1 font-medium text-gray-700'>Phone Number:       </p>
                <p className='flex-1 text-gray-800 font-semibold'>07064334160</p>
            </div>
            <div className='flex gap-5  my-3'>
                <p className='flex-1 font-medium text-gray-700'>Amount:       </p>
                <p className='flex-1 text-gray-800 font-semibold'>{nairaFormat(16000)}</p>
            </div>
            <div className='flex gap-5 my-3'>
                <p className='flex-1 font-medium text-gray-700'>Delivery:       </p>
                <p className='flex-1 text-gray-800 font-semibold'>{nairaFormat(2000)}</p>
            </div>
            <div className='flex gap-5'>
                <p className='flex-1 font-medium text-gray-700'>Net Total:       </p>
                <p className='flex-1 text-gray-800 font-semibold'>{nairaFormat(18000)}</p>
            </div>

            



            <div>
                <button className='bg-alt text-white text-sm rounded-2xl w-full my-10 p-4 block m-auto' onClick={() => {
                    navigate("/dashboard/confirm-payments")
                }}>
                    Pay with Card
                </button>
            </div>
          
        </div>
    </div>
    </div>

    </>
  )
}

export default PaymentDetails