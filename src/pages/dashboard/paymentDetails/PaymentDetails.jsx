import React from 'react'
import { useNavigate } from 'react-router-dom'
import { nairaFormat } from '../../../utils/nairaFormat'
import Navigation from '../components/navigation/Navigation'
import { useSelector } from 'react-redux'
import { PaystackButton } from 'react-paystack'

const PaymentDetails = () => {
    const navigate = useNavigate()
    const {user} = useSelector(state => state.auth)

    const componentProps = {
        email: "emmiemenz@gmail.com",
        amount: 1600 * 100,
      
        publicKey: "pk_test_f833f603b86e23ffa37f40f2e90056de9b928bf7",
        text: 'Pay With Card',
        onSuccess: () => {
            navigate("/dashboard/confirm-payments")
            },
        // onClose: () => alert('Are you sure'),
      }; 
    
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
        <div className='max-w-lg m-auto border border-gray-500/40 bg-gray-50 rounded text-center overflow-hidden shadow p-5'>
            <div className='flex gap-5 my-3'>
                <p className='flex-1 font-medium text-gray-700'>Name:       </p>
                <p className='flex-1 text-gray-800 font-semibold'>Jon Christopher</p>
            </div>
            <div className='flex gap-5 border-b border-b-gray-300 my-3'>
                <p className='flex-1 font-medium text-gray-700'>Kg:       </p>
                <p className='flex-1 text-gray-800 font-semibold'>12.5k</p>
            </div>
            <div className='flex gap-5 border-b border-b-gray-300 py-4 my-3'>
                <p className='flex-1 font-medium text-gray-700'>Phone Number:       </p>
                <p className='flex-1 text-gray-800 font-semibold'>07064334160</p>
            </div>
            <div className='flex gap-5  border-b border-b-gray-300 py-4 my-3'>
                <p className='flex-1 font-medium text-gray-700'>Amount:       </p>
                <p className='flex-1 text-gray-800 font-semibold'>{nairaFormat(16000)}</p>
            </div>
            <div className='flex gap-5 border-b border-b-gray-300 py-4 my-3'>
                <p className='flex-1 font-medium text-gray-700'>Delivery:       </p>
                <p className='flex-1 text-gray-800 font-semibold'>{nairaFormat(2000)}</p>
            </div>
            <div className='flex gap-5  border-b border-b-gray-300 py-4'>
                <p className='flex-1 font-medium text-gray-700'>Net Total:       </p>
                <p className='flex-1 text-gray-800 font-semibold'>{nairaFormat(18000)}</p>
            </div>

            



            <div>
               

                <PaystackButton  className='bg-alt text-white text-sm rounded-2xl w-full my-10 p-4 block m-auto'  {...componentProps}/>

            </div>
          
        </div>
    </div>
    </div>

    </>
  )
}

export default PaymentDetails