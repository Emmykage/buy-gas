import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { SET_LOADING } from '../redux/app'
import { LuLayoutDashboard } from 'react-icons/lu'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { IoPricetagOutline } from 'react-icons/io5'
import { SiMoneygram } from 'react-icons/si'
import { CiLogout, CiMenuFries } from 'react-icons/ci'
import FormInput from '../components/formInput/FormInput'
const AdminDashboardLayout = () => {
    const dispatch = useDispatch()

    const [toggleNav, setToggleNav] = useState(false)
    const {user, loading } = useSelector(state => state.auth)
    const navigate = useNavigate()


    useEffect(() => {

    }, [dispatch]);


    const handleLogOut = () => {
        dispatch(SET_LOADING(true))
        
        // dispatch(userLogout()).then(result => {
        //     if(userLogout.fulfilled.match(result)){
        //         dispatch(SET_LOADING(false))

        //         navigate("/admin/login")
        //     }else{
        //         dispatch(SET_LOADING(false))

        //     }
        // })
    }


    // useEffect(() => {
    //     if ((!loading && !user) || (user && !user.admin)) {

    //         navigate("/admin/login");
    //     }
    // }, [user, navigate]);

   

  return (
    <div className='admin flex relative   h-screen overflow-hidden'>
        <aside className={`${toggleNav ? "w-60" : "w-0 md:w-28"} h-full overflow-hidden px-0 transition-all ease-linear border border-gray-300/70 duration-150 shrink-0`}>
            <div className='flex items-center justify-center flex-col py-7 bg-blue-800/'>
                <div className='text-white text-wrap text-center flex-1'>
                           <NavLink to="/" className='text-2xl text-black  font-medium md:text-alt'> Co-<span className='text-green-600'>WorkSpace</span> </NavLink>
                    <p className='text-green-600'>Online</p>
                </div>
            </div>

            
            <ul className='text-gray-600 font-semibold mt-10 px-1'>
                <li className='my-2 py-2 px-3 bg-blue-80 text-sm text-left text-gray-600 '>
                     <NavLink to={"/admin/dashboard"} className={`flex ${toggleNav ? "flex-row" : "flex-col" } gap-2 items-center`}> 
                        <LuLayoutDashboard  className='text-2xl'/>
                        <span>
                            Dashboard
                        </span>

                    </NavLink>       
                </li>

               
                <li className='my-2 py-2 px-3 bg-blue-80 text-sm'> <NavLink to={"/admin/spaces"} className={`flex ${toggleNav ? "flex-row" : "flex-col" } gap-3 `}> 
                <IoPricetagOutline className='text-2xl'/>
                 Spaces </NavLink>       </li>
                
                <li className='my-2 py-2 px-3 bg-blue-80 text-sm'> <NavLink to={"/admin/bookings"} className={`flex ${toggleNav ? "flex-row" : "flex-col" } gap-3 `}> 
                <SiMoneygram className='text-2xl'/>
                Bookings </NavLink>       </li> 
                <li className='my-2 py-2 px-3 bg-blue-80 text-sm'> <NavLink to={"/admin/users"} className={`flex ${toggleNav ? "flex-row" : "flex-col" } gap-3 `}> 

                {/* <UsergroupAddOutlined className='text-2xl'/> */}
                <span>Users</span>
                
                 </NavLink>       </li> 
                 <li className='my-2 py-2 px-3 bg-blue-80 text-sm'> <a onClick={handleLogOut} 
                 className={`flex ${toggleNav ? "flex-row" : "flex-col" } gap-3`}> 

                <CiLogout className='text-2xl'/>
                <span>Log Out</span>
                
                 </a>       </li> 
                </ul>

        </aside>
        <div className='relative w-full m-0'>


        <div className='flex z-50 absolute items-center gap-5 bg-white shadow px-3 top-0 left-0 w-full justify-between rounded py-10 md:px-7 '>
            <span
            onClick={()=> {setToggleNav(prev => !prev)}} className='bg- shadow flex justify-center items-center w-10 h-10'>
            <CiMenuFries />
            </span>
            <input type="text" placeholder='Search' className='border w-96 border-gray-300 p-2 rounded-lg' />

            <div className=' w-ful  text-gray-200 justify-between  '>
                <ul className='flex gap-9'>
                    {/* <li><NavLink to={"#"} className={"text-gray-900"}> <BellOutlined /></NavLink></li> */}
                    {/* <li><NavLink to={"#"} className={"text-gray-900"}><InboxOutlined /></NavLink></li> */}
                
                </ul>
                

            </div>

        </div>
        <div className=' bg-gray-100 overflow-y-scroll pt-40 min-h-96 justify-between h-full px-4 md:px-10'>
            <Outlet/>
        </div>     
        
    </div>
    </div>

  )
}

// AdminDashboardLayout.propTypes = {
//     children: PropTypes.node
// }

export default AdminDashboardLayout