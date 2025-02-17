import React from 'react'
import { TiThMenuOutline } from 'react-icons/ti'
import { NavLink, useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate()
  return (
    <header className='py-5 px-4 border-b border-gray-500'>

        <div className='flex items-center justify-between'>
            <NavLink to={"/"}>
                <img src="/logo.png" alt="" className='w-40 h-24' />
            </NavLink>

            <div className='text-alt  font-medium'>
                <ul className='hidden md:flex  gap-4'>
                <li>
                        <NavLink className={"hover:text-primary"} to={"#"}>Make Order</NavLink>
                    </li>   
                    <li>
                        <NavLink className={"hover:text-primary"} to={"#"}>Refill History</NavLink>
                    </li>
                    <li>
                        <NavLink className={"hover:text-primary"} to={"#"}>Contact Us</NavLink>
                    </li>
                    

                </ul>
            </div>


            <span className='md:hidden'>
            <TiThMenuOutline className='text-3xl text-primary'/>
            </span>
        </div>
        
    </header>
  )
}

export default Navigation