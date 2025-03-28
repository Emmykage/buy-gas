import { useState } from 'react'
import { TiThMenuOutline } from 'react-icons/ti'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate()
    const {user} = useSelector(state => state.auth)
    const [show, setShow] = useState(false)
  return (
    <header className='py-5 px-4 border-b border-gray-500 z-50'>

        <div className='flex items-center justify-between'>
            <NavLink to={"/"} className='text-3xl text-theme font-semibold p-1 md:text-alt'>
            Gas <span className='text-primary'>Waka</span>
            </NavLink>


            <div className='text-alt  font-medium'>
                <ul className={`${show ? "right-0"  :  "right-full"} md:flex absolute w-full bg-blue-50 z-50 md:bg-transparent  top-0 h-screen md:h-auto pt-10 md:pt-0 px-4 md:static transition-all duration-300 ease-in-out gap-4`}>
                    <TiThMenuOutline onClick={() => setShow(prev => !prev)} className='text-3xl text-primary md:hidden'/>

                    <li className='mt-10 md:mt-0'>
                            <NavLink className={"hover:text-primary"} to={"/dashboard/payment-form"}>Make Order</NavLink>
                        </li>   
                        <li className='mt-4 md:mt-0'>
                            <NavLink className={"hover:text-primary"} to={"/dashboard/history"}>Refill History</NavLink>
                        </li>
                        <li className='mt-4 md:mt-0'>
                            <NavLink className={"hover:text-primary"} to={"/dashboard/contact-us"}>Contact Us</NavLink>
                        </li>
                        

                    </ul>
                </div>


<div className='flex items-center md:hidden gap-5 justify-between'>
    <div className=''>
        <h3 className='md:text-3xl text-xl font-semibold flex justify-between'>
        {user?.phone}</h3>

    </div>
    <span className='md:hidden'>
        <TiThMenuOutline onClick={() => setShow(prev => !prev)} className='text-3xl text-alt'/>
    </span>
   </div>

           
        </div>
        
    </header>
  )
}

export default Navigation