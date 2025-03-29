import React, { useEffect } from 'react'
import { NavLink, useNavigate, useOutletContext, useSearchParams } from 'react-router-dom'
import { nairaFormat } from '../../../utils/nairaFormat'
import Navigation from '../components/navigation/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import { PaystackButton } from 'react-paystack'
import { getOrder, updateOrder } from '../../../redux/actions/order'
import { SET_LOADING } from '../../../redux/app'

const PaymentDetails = () => {
    const dispatch= useDispatch()
    const [queryParam] = useSearchParams()


    const {order} = useSelector(state => state.order)
    const id = queryParam.get("request_id")
    const [handleNext, handlePrev] = useOutletContext()

    const navigate = useNavigate()



    useEffect(()=> {
        dispatch(getOrder(id))
    }, [id])


    const handleConfirmation = () => {
        dispatch(updateOrder({id: id, data: {status: "completed"} })).then(result => {
            if(updateOrder.fulfilled.match(result)){
                const order_id = result.payload.id

                dispatch(SET_LOADING(false))
                navigate(`/dashboard/confirm-payments?request_id=${order_id}`)
                handleNext()
            }else{
                dispatch(SET_LOADING(false))
                navigate(`/dashboard/confirm-payments?request_id=${"Randominputuuidnumber"}`)
                handleNext()

            }
        })

    }


    console.log(id, order)
    const componentProps = {
        email: "emmiemenz@gmail.com",
        amount: order.total_amount * 100 ,
      
        publicKey: "pk_test_5febea7cede921954d429814da61a644f8a93d11",
        text: 'Pay With Card',
        onSuccess: () => {
            handleConfirmation()
      

            },
        // onClose: () => alert('Are you sure'),
      }; 
    
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
                        <p className='flex-1 text-gray-800 font-medium text-sm text-right'>{order?.phone ?? "07064123456"}</p>
                    </div>
                    <div className='flex gap-5 my-4'>
                        <p className='flex-1 font-medium text-gray-700 text-left'>Quantity</p>
                        <p className='flex-1 text-gray-800 font-medium text-sm text-right'>{order?.quantity ?? 12.5}Kg</p>
                    </div>
                    <div className='flex gap-5 -gray-300  my-4'>
                        <p className='flex-1 font-medium text-gray-700 text-left'>Delivery Time</p>
                        <p className='flex-1 text-gray-800 font-medium text-sm text-right'>{order?.delivery_time ?? "N/A"} hours</p>
                    </div>
                    <div className='flex gap-5 border-b-gray-300 my-4'>
                        <p className=' font-medium text-gray-700 text-left'>Address</p>
                        <p className='flex-1  text-gray-800 font-medium text-sm text-right '>{(order?.address ?? "Kano Crescent Wuse II" )+ " " + (order?.location ?? "Kado")}</p>

                    </div>

                    <div className='border-t'>
                        <div>
                            <h3 className='text-left text-lg font-semibold my-5'>
                                Payment Breakdown

                            </h3>
                        </div>
                    <div className='flex gap-5 '>
                        <p className='flex-1 font-medium text-gray-700 text-left'>Gas Price     </p>
                        <p className='flex-1 text-gray-800 font-medium text-sm text-right'>{nairaFormat(order?.amount  ?? 10400)}</p>
                    </div>
                    <div className='flex gap-5 my-4'>
                        <p className='flex-1 font-medium text-gray-700 text-left'>Delivery Fee       </p>
                        <p className='flex-1 text-gray-800 font-medium text-sm text-right'>{nairaFormat(order?.delivery_fee ?? 0)}</p>
                    </div>
                    <div className='flex gap-5 my-4'>
                        <p className='flex-1 font-medium text-gray-700 text-left'>Service Charge  </p>
                        <p className='flex-1 text-gray-800 font-medium text-sm text-right'>{nairaFormat(order?.service_charge ?? 3000)}</p>
                    </div>
                    </div>
                    
                    <div className='flex gap-5 my-4'>
                        <p className='flex-1 font-medium text-gray-700 text-left'>Total       </p>
                        <p className='flex-1 text-gray-800 font-medium text-sm text-right'>{nairaFormat(order?.total_amount ??  13400)}</p>
                    </div>

                    



                    <div>
                    

                        <PaystackButton onClick={
                            () => {
                                dispatch(SET_LOADING(true))
                            }
                        }  className='bg-blue-700 text-white text-sm rounded-lg w-full my-10 p-4 block m-auto'  {...componentProps}/>

                    </div>
                    <div className='font-medium text-gray-600'>
                        <a className='text-blue-700'  onClick={()=> {
                                handlePrev()
                                navigate("/dashboard/payment-form")



                        }}>
                            Need to make changes?
                        </a>
                        <p className='text-sm'> Click here to update your order</p>
                        <p className='text-sm'>By clicking pay, you agree to pay the service above and to our privacy policy</p>
                        <p className='text-sm font-semibold'>
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