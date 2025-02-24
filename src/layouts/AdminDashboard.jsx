import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink, Outlet } from 'react-router-dom'
import { TiThMenuOutline } from 'react-icons/ti'

const AdminDashboard = props => {
    
    const [showMenu, setShowMenu] = useState(false)
    const [navBg, setNavBg] = useState("")
    
    const active = "bg-gray-100 block h-full py-4 px-2 text-alt"
    const inActive = " block h-full py-4 px-2 text-alt/80"

  return (
    <div className='flex'>
        <aside className={`${showMenu ? "w-0" :  "md:w-80 w-20"} bg-red-100 transition-all duration-200 ease-in-out h-screen border overflow-hidden border-alt/40`}>

            <ul className='px-4 mt-20'>
                <li className='rounded  my-2 font-medium cursor-pointer'>
                    <NavLink to="/admin/home" className={({isActive}) => (isActive ? active : inActive)}>
                    Home

                    </NavLink>
                </li>
                <li className='rounded my-2 font-medium cursor-pointer'>
                    <NavLink to="/admin/users" className={({isActive}) => (isActive ? active : inActive)}> Users </NavLink>
                    
                </li>
                <li className=' rounded font-medium cursor-pointer'>
                    <NavLink  to="/admin/orders" className={({isActive}) => (isActive ? active : inActive)}>  Orders     </NavLink>
                    
                </li>
            </ul>

            </aside>


        <div className='flex-1'>
            <header className='bg-alt/90 text-white py-8 md:px-10 px-4 flex justify-between'>

                <span className={`${showMenu && "z-50 text-white"} `} onClick={() => setShowMenu(prev => !prev)}>
                <TiThMenuOutline className={`${showMenu && "z-50  "} text-3xl text-white/60`}/>
                </span>

                <ul>

                </ul>

                <div>
                    <p className='text-white font-semibold'>Jon Doe</p>
                    <span className='font-medium'>Account Admin</span>
                </div>
            </header>
            <div className='px-10 py-10'>
            <Outlet/>

            </div>
        </div>
    </div>
  )
}

AdminDashboard.propTypes = {}

export default AdminDashboard