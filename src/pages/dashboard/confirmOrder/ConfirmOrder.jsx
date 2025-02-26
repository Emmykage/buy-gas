import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { nairaFormat } from '../../../utils/nairaFormat'
import Navigation from '../components/navigation/Navigation'
import { useReactToPrint } from 'react-to-print'

const ConfirmOrder = () => {
    const navigate = useNavigate()

    const contentRef = useRef()

    const reactToPrintFn = useReactToPrint({ 
        contentRef,
        documentTitle: "Buy Gas Receipt Document Title",


    })
  return (
    <>
        <div className='bg-red container m-auto  min-h-screen'>

    <Navigation/>

    <div className='flex '>


        <aside className='max-w-60 md:block hidden w-full h-screen md:border-r mt-6 border-gray-300'>

            <ul>
                <li className='border-b border-gray-300 font-medium py-6 px-5'>
                    Order
                </li>
            </ul>

        </aside>

    <div className='flex-1'>



    <div className='m-auto mx-4 bg--200 max-w-4xl my-0'>
        <div  className='bg-alt/20 flex justify-between items-center max-w-2xl m-auto my-4 w-full p-3 '>
            <p className='text-center text-alt  font-semibold'>
                Order has been confirmed 
            </p>

            <button onClick={()=> reactToPrintFn()} type='button' className='border cursor-pointer md:px-8 md:py-3 px-3 py-1.5 md:text-base text-sm border-alt rounded-2xl text-alt font-semibold hover:text-primary hover:border-primary'>
                Print Receipt
            </button>

        </div>
        <div ref={contentRef} className='max-w-2xl m-auto md:border-l border-gray-400/50 rounded text-center overflow-hidden shadow p-5'>
            <div className='border-b border-gray-400 pb-10'>

            <div className='flex bg--200'>
                <span className='flex h-16 w-16 rounded shadow hover:shadow-none border-gray-300 shrink-0 justify-center items-center border'>
                    12kg

                </span>

                <div>
                    <div className=' flex px-4 flex-1 gap-5 my-0'>
                        <p className='flex-1 text-left text-gray-800 font-semibold'>7064334160</p>
                    </div>
                    <div className=' flex px-4 flex-1 gap-5 my-1'>
                    {/* <p className='flex-1 text-left font-medium text-gray-700'>Name:       </p> */}
                        <p className='flex-1 text-left text-gray-800 font-semibold'>Jon Christopher</p>
                    </div>
                </div>

            </div>

            <div className='flex my-4 text-left max-w-lg justify-between justify'>
                <p  className='fl font-medium text-gray-500'>Reference</p>
                <p>144322606-93971-1740259785228</p>
            </div>

            <div className='flex my-4 text-left  max-w-lg justify-between justify'>
                <p  className='fle font-medium text-gray-500'>Paid At</p>
                <p>12 Mar 2025</p>
            </div>
            </div>


            <div className='text-left mt-10'>
                <div className='flex gap-5 my-3'>
                    <p className='flex-1 font-medium text-gray-500'>Kg    </p>
                    <p className='flex-1 text-gray-800 font-semibold'>12.5k</p>
                </div>
                <div className='flex gap-5 my-3'>
                <p className='flex-1 font-medium text-gray-500'>Phone:       </p>
                <p className='flex-1 text-gray-800 font-semibold'>07064334160</p>
            </div>
            <div className='flex gap-5  my-3'>
                <p className='flex-1 font-medium text-gray-500'>Amount:       </p>
                <p className='flex-1 text-gray-800 font-semibold'>{nairaFormat(16000)}</p>
            </div>
            <div className='flex gap-5 my-3'>
                <p className='flex-1 font-medium text-gray-500'>Delivery</p>
                <p className='flex-1 text-gray-800 font-semibold'>{nairaFormat(2000)}</p>
            </div>
            <div className='flex gap-5'>
                <p className='flex-1 font-medium text-gray-500'>Net Total</p>
                <p className='flex-1 text-gray-800 font-semibold'>{nairaFormat(18000)}</p>
            </div>
         </div>
         <div className='text-left mt-10'>
            <p>
                Payments
            </p>


            <ul className='bg-gray-100 mt-7 border-teal-500 border-t '>
                <li className='p-8 mt-5'>
                    <p className='font-semibold text-gray-700'>LINK</p>
                    <p className='text-sm font-medium text-gray-500'>Sat, 22 Fev 2025 22:29:45</p>
                    <p className='text- font-medium text-gray-700'>Reference:</p>
                    <p className='text-sm font-medium text-gray-500'>144322606-93971-1740259785228</p>

                </li>
            </ul>
         </div>
           

            

            



            <div>
                {/* <button className='bg-alt text-white text-sm rounded-2xl w-full my-10 p-4 block m-auto' onClick={() => {
                    navigate("/dashboard/payment-details")
                }}>
                    Pay with Card
                </button> */}
            </div>
            <div>
                <p className='text-gray-700 my-4 font-medium'>
                    Our Agents will get in touch 
                </p>
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