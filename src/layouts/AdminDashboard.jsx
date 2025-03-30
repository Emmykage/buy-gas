import { useEffect, useState } from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import { TiTags, TiThMenuOutline } from 'react-icons/ti'
import { LuLayoutDashboard } from 'react-icons/lu'
import { CiLogout, CiUser } from 'react-icons/ci'
import { TbTruckDelivery } from "react-icons/tb";
import { useDispatch } from 'react-redux'
import { getStatistics } from '../redux/actions/statistics'
import { FaMapLocation } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";

const AdminDashboard = () => {
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)
    
    const active = "bg-gray-100 flex item-center gap-4 h-full py-4 px-2 text-alt"
    const inActive = " flex item-center gap-4 h-full py-4 px-2 text-alt/80"

    useEffect(()=> {
        dispatch(getStatistics())
    },[])
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
                        <span  className='sm:block hidden '> Home </span>                    

                    </NavLink>
                </li>

              
          
          
                <li className='rounded my-2 font-medium cursor-pointer'>
                    <NavLink to="/admin/users" className={({isActive}) => (isActive ? active : inActive)}>
                    
                    <CiUser className='text-2xl'/>
                    <span  className='sm:block hidden '> Users </span>                    

                     </NavLink>
                    
                </li>
                <li className=' rounded font-medium cursor-pointer'>
                    <NavLink  to="/admin/orders" className={({isActive}) => (isActive ? active : inActive)}>  
                        <TiTags className='text-2xl'/>
                        <span  className='sm:block hidden '> Orders </span>                    

                             
                    </NavLink>
                    
                </li>   
                <li className=' rounded font-medium cursor-pointer'>
                    <NavLink  to="/admin/agents" className={({isActive}) => (isActive ? active : inActive)}>  
                        <TbTruckDelivery className='text-2xl'/>
                        <span  className='sm:block hidden '> Agents </span>                    

                             
                    </NavLink>
                    
                </li>
                <li className=' rounded font-medium cursor-pointer'>
                    <NavLink  to="/admin/locations" className={({isActive}) => (isActive ? active : inActive)}>  
                        <FaMapLocation className='text-2xl'/>
                        <span  className='sm:block hidden '> Locations </span>                    

                             
                    </NavLink>
                    
                </li>

                <li className=' rounded font-medium cursor-pointer'>
                    <NavLink  to="/admin/setting" className={({isActive}) => (isActive ? active : inActive)}>  
                        <FiSettings className='text-2xl'/>
                        <span  className='sm:block hidden '> Settings </span>                    

                             
                    </NavLink>
                    
                </li>
               


                <li className='my-2 rounded font-medium cursor-pointer'>
                    <NavLink  to="/auth/admin-login" className={({isActive}) => (isActive ? active : inActive)}>  
                    <CiLogout className='text-2xl'/>
                    <span  className='sm:block hidden '>  Log Out </span>                    

                       
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