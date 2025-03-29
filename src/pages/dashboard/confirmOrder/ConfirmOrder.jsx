import { useEffect, useRef } from 'react'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { nairaFormat } from '../../../utils/nairaFormat'
import { useReactToPrint } from 'react-to-print'
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../../../redux/actions/order'
import dateFormater from '../../../utils/dateFormatter'

const ConfirmOrder = () => {
    const dispatch= useDispatch()

    const navigate = useNavigate()
    const [queryParam] = useSearchParams()


    const id = queryParam.get("request_id")

    const {order} = useSelector(state => state.order)

    const contentRef = useRef()

      useEffect(()=> {
            dispatch(getOrder(id))
        }, [id])
    
    


    const reactToPrintFn = useReactToPrint({ 
        contentRef,
        documentTitle: "Buy Gas Receipt Document Title",


    })
  return (
    <>
        <div className='bg-red container m-auto  min-h-screen'>
    <div className='flex '>


        <aside className='max-w-60 md:block hidden w-full h-screen md:border-r mt-6 border-gray-300 gap-5'>

            <ul>
                <li className='border-b border-gray-300 font-medium py-6 px-5'>
                    Order
                </li>
            </ul>

        </aside>

    <div className='flex-1 '>



    <div className='m-auto max-w-4xl my-0'>
        <div  className='bg-alt/20 flex justify-between items-center max-w-2xl m-auto my-4 w-full p-3 '>
            <p className='text-center text-alt  font-semibold'>
                Order has been confirmed 
            </p>

            <button onClick={()=> reactToPrintFn()} type='button' className='border cursor-pointer md:px-8 md:py-3 px-3 py-1.5 md:text-base text-sm border-alt rounded-2xl text-alt font-semibold hover:text-primary hover:border-primary'>
                Print Receipt
            </button>

        </div>
        <div ref={contentRef} className='max-w-2xl w-full px-2 m-auto md:border-l border-gray-400/50 rounded text-center overflow-hidden shadow py-5'>
            <div className='border-b border-gray-400 pb-10'>

            {/* <div className='flex bg--200'>
                <span className='flex h-16 w-16 rounded shadow hover:shadow-none border-gray-300 shrink-0 justify-center items-center border'>
                    {order?.quantity ?? 12.5}kg

                </span>

                <div>
                    <div className=' flex px-4 flex-1 gap-5 my-0'>
                        <p className='flex-1 text-left text-gray-800 font-semibold'>{order?.phone ?? "07064334160"}</p>
                    </div>
                    <div className=' flex px-4 flex-1 gap-5 my-1'>
                        <p className='flex-1 text-left text-sm text-red-600 font-normal'>Unverified User</p>
                    </div>
                </div>

            </div> */}

            <div className='flex my-4 text-left max-w- justify-between justify'>
                <p  className='fl font-medium text-gray-500'>Reference</p>
                <p>{order?.id}</p>
            </div>

            <div className='flex my-4 text-left  max-w-lg justify-between justify'>
                <p  className='fle font-medium text-gray-500'>Paid At</p>
                <p>{ dateFormater(order?.created_at ?? "24-10-2026") }</p>
            </div>
            </div>


            <div className='text-left mt-10'>
                <div className='flex gap-5 my-3'>
                    <p className='flex-1 font-medium text-gray-500'>Quantity    </p>
                    <p className='flex-1 text-gray-800 font-medium text-sm text-right'>{order?.quantity ?? 12.5}Kg</p>
                </div>
                <div className='flex gap-5 my-3'>
                <p className='flex-1 font-medium text-gray-500'>Phone:       </p>
                <p className='flex-1 text-gray-800 font-medium text-sm text-right'>{order?.phone ?? "0706123456"}</p>
            </div>
            <div className='flex gap-5  my-3'>
                <p className='flex-1 font-medium text-gray-500'>Amount:       </p>
                <p className='flex-1 text-gray-800 font-medium text-sm text-right'>{nairaFormat(order?.amount ??  10000)}</p>
            </div>
            <div className='flex gap-5 my-3'>
                <p className='flex-1 font-medium text-gray-500'>Delivery</p>
                <p className='flex-1 text-gray-800 font-medium text-sm text-right'>{nairaFormat(order?.delivery_fee ?? 0)}</p>
            </div>
            <div className='flex gap-5 my-4'>
                            <p className='flex-1 font-medium text-gray-500 text-left'>Service Charge  </p>
                            <p className='flex-1 text-gray-800 font-medium text-sm text-right'>{nairaFormat(order?.service_charge ?? 3000)}</p>
                        </div>
            <div className='flex gap-5'>
                <p className='flex-1 font-medium text-gray-500'>Net Total</p>
                <p className='flex-1 text-gray-800 font-medium text-sm text-right'>{nairaFormat(order?.total_amount ?? 13000)}</p>
            </div>
         </div>
         <div className='text-left mt-10'>
            <p>
                Payments
            </p>


            <ul className='bg-gray-100 mt-7 border-teal-500 border-t '>
                <li className='p-8 mt-5'>
                    <p className='font-semibold text-gray-700'>LINK</p>
                    <p className='text-sm font-medium text-gray-500'>{order?.updated_at ?? "Sat, 22 Fev 2025 22:29:45"}</p>
                    <p className='text- font-medium text-gray-700'>Reference:</p>
                    <p className='text-sm font-medium text-gray-500'>{order?.id}</p>

                </li>
            </ul>
         </div>
            <div>
                <NavLink to={"/dashboard/payment-form"} className='text-gray-700 my-4 block hover:text-alt font-medium'>
                    Back to Home 
                </NavLink>
            </div>
        </div>
    </div>
    </div>
    </div>

</div>
    </>
  )
}

export default ConfirmOrder