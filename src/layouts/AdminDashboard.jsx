import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink, Outlet } from 'react-router-dom'
import { TiThMenuOutline } from 'react-icons/ti'
import { LuLayoutDashboard } from 'react-icons/lu'
import { CiLogout } from 'react-icons/ci'

const AdminDashboard = (props) => {
    
    const [showMenu, setShowMenu] = useState(false)
    const [navBg, setNavBg] = useState("")
    const [toggleNav, setToggleNave] = useState(true)
    
    const active = "bg-gray-100 flex item-center gap-4 h-full py-4 px-2 text-alt"
    const inActive = " flex item-center gap-4 h-full py-4 px-2 text-alt/80"

  return (
    <div className='flex h-screen overflow-hidden'>
        <aside className={`${showMenu ? "w-0" :  "md:w-80 w-20"} shrink-0 transition-all duration-200 ease-in-out h-screen border overflow-hidden border-alt/40`}>
        <NavLink to={"/"} className='text-3xl text-theme font-semibold p-1 block text-center mt-10 md:text-alt'>
            Gas <span className='text-primary'>Waka</span>
            </NavLink>
            <ul className='px-4 mt-10'>
                <li className='rounded font-medium cursor-pointer  bg-blue-80  text-left text-gray-600'>
                    <NavLink to="/admin/home" className={({isActive}) => (isActive ? active : inActive)}>
                       <LuLayoutDashboard className='text-2xl'/>
                        <span> Home </span>                    

                    </NavLink>
                </li>

              
          
          
                <li className='rounded my-2 font-medium cursor-pointer'>
                    <NavLink to="/admin/users" className={({isActive}) => (isActive ? active : inActive)}>
                    
                    <LuLayoutDashboard className='text-2xl'/>
                    Users </NavLink>
                    
                </li>
                <li className=' rounded font-medium cursor-pointer'>
                    <NavLink  to="/admin/orders" className={({isActive}) => (isActive ? active : inActive)}>  
                        <LuLayoutDashboard className='text-2xl'/>
                        Orders     
                    </NavLink>
                    
                </li>   
                <li className=' rounded font-medium cursor-pointer'>
                    <NavLink  to="/admin/agents" className={({isActive}) => (isActive ? active : inActive)}>  
                        <LuLayoutDashboard className='text-2xl'/>
                        Agents     
                    </NavLink>
                    
                </li>

                <li className='my-2 rounded font-medium cursor-pointer'>
                    <NavLink  to="/auth/admin-login" className={({isActive}) => (isActive ? active : inActive)}>  
                    <CiLogout className='text-2xl'/>
                        Log Out
                    </NavLink>
                    
                </li>
            </ul>

            </aside>


        <div className='w-full flex flex-col bg-gray-100'>
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
            <div className='md:px-10 py-10 block flex-1  overflow-auto'>
                <Outlet/>

            </div>
        </div>
    </div>
  )
}

AdminDashboard.propTypes = {}

export default AdminDashboard