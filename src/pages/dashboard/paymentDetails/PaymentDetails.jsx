import React from 'react'
import { NavLink, useNavigate, useOutletContext } from 'react-router-dom'
import { nairaFormat } from '../../../utils/nairaFormat'
import Navigation from '../components/navigation/Navigation'
import { useSelector } from 'react-redux'
import { PaystackButton } from 'react-paystack'

const PaymentDetails = () => {
    const [handleNext, handlePrev] = useOutletContext()

    const navigate = useNavigate()
    const {user} = useSelector(state => state.auth)
    const {amount } = useSelector(state => state.order)

    const componentProps = {
        email: "emmiemenz@gmail.com",
        amount: amount ? amount * 100  : 1600 * 100,
      
        publicKey: "pk_test_f833f603b86e23ffa37f40f2e90056de9b928bf7",
        text: 'Pay With Card',
        onSuccess: () => {
            navigate("/dashboard/confirm-payments")
            handleNext()

            },
        // onClose: () => alert('Are you sure'),
      }; 
      console.log(amount)
    
  return (
    <>
        <div className='bg-red container m-auto  min-h-screen'>
            <div className='md:m-auto max-w-4xl my-10'>
       
                <div className='max-w-lg my-10 m-auto border border-gray-500/40 bg-gray-50 rounded text-center overflow-hidden shadow p-5'>
                <div  className='bg-gray-300 mb-6 w-full p-3 '>
                    <p className='text-center text-gray-900 font-semibold'>
                        Review Your Order 
                    </p>

                </div>
                    <div className='flex gap-5 border-b-gray-300 my-3'>
                        <p className='flex-1 font-medium text-gray-700 text-left'>Phone Number</p>
                        <p className='flex-1 text-gray-800 font-semibold'>07064334160</p>
                    </div>
                    <div className='flex gap-5 my-4'>
                        <p className='flex-1 font-medium text-gray-700 text-left'>Quantity</p>
                        <p className='flex-1 text-gray-800 font-semibold'>07064334160</p>
                    </div>
                    <div className='flex gap-5 -gray-300  my-4'>
                        <p className='flex-1 font-medium text-gray-700 text-left'>Delivery Time</p>
                        <p className='flex-1 text-gray-800 font-semibold'>2 hours</p>
                    </div>
                    <div className='flex gap-5 border-b-gray-300 my-4'>
                        <p className='flex-1 font-medium text-gray-700 text-left'>Address</p>
                        <p className='flex-1 text-gray-800 font-semibold'>Congo street Lokogoa</p>

                    </div>

                    <div className='border-t'>
                        <div>
                            <h3 className='text-left text-lg font-semibold my-5'>
                                Payment Breakdown

                            </h3>
                        </div>
                    <div className='flex gap-5 '>
                        <p className='flex-1 font-medium text-gray-700 text-left'>Gas Price     </p>
                        <p className='flex-1 text-gray-800 font-semibold'>{nairaFormat(16000)}</p>
                    </div>
                    <div className='flex gap-5 my-4'>
                        <p className='flex-1 font-medium text-gray-700 text-left'>Delivery Fee       </p>
                        <p className='flex-1 text-gray-800 font-semibold'>{nairaFormat(2000)}</p>
                    </div>
                    <div className='flex gap-5 my-4'>
                        <p className='flex-1 font-medium text-gray-700 text-left'>Service Charge  </p>
                        <p className='flex-1 text-gray-800 font-semibold'>{nairaFormat(3000)}</p>
                    </div>
                    </div>
                    
                    <div className='flex gap-5 my-4'>
                        <p className='flex-1 font-medium text-gray-700 text-left'>Total       </p>
                        <p className='flex-1 text-gray-800 font-semibold'>{nairaFormat(18000)}</p>
                    </div>

                    



                    <div>
                    

                        <PaystackButton  className='bg-alt text-white text-sm rounded-lg w-full my-10 p-4 block m-auto'  {...componentProps}/>

                    </div>
                    <div className='font-medium text-gray-600'>
                        <a  onClick={()=> {
                                handlePrev()
                                navigate("/dashboard/payment-form")



                        }}>
                            Need to make changes?
                        </a>
                        <p> Click here to update your order</p>
                        <p>By clicking pay, you agree to pay the service above and to our privacy policy</p>
                        <p>
                            Need help? 09086743152
                        </p>
                    </div>
                
                </div>
    </div>
    </div>

    </>
  )
}

export default PaymentDetails