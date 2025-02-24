import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.scss";
import { TiThMenuOutline } from 'react-icons/ti';
const Nav = () => {

  const [showMenu, setShowMenu] = useState(false)
    const [navBg, setNavBg] = useState("")

  

    useEffect(()=> {
      const scrollNav = () => {
        if(window.scrollY > 120){

          setNavBg("md:bg-white/6 opacity-60 ")
        }
        else{
          setNavBg("bg-white")
        }
      }
      window.addEventListener("scroll", scrollNav)
    }, [])
  return (
    <nav className={`absolute flex items-center bg-gray-800/40 py-2 left-0 w-full z-10 justify-between px-10 text-white`}>
        <NavLink to="/" className='text-3xl text-black w-32 h-24 p-1 font-medium md:text-alt'>
          <img src={"/logo1.png"} alt="logo" className=' object-cover w-full h-full bg-red-20' /> 
        </NavLink>
        <ul className={`${showMenu && "show"} text-white font-medium text-blac md:text-gray-700  basis-1/2`}>
            <li className='px-4 py-2 cursor-pointer font-semibold'><NavLink to="/" className={({isActive}) => (isActive ? "" : "text-white")}> Home </NavLink></li>
          <li  className='px-4 py-2 cursor-pointer font-semibold'><NavLink to={'/services'} className={({isActive}) => (isActive ? "" : "text-white")}> Merchant </NavLink>
          </li> 
            <li  className='px-4 py-2 cursor-pointer font-semibold'><NavLink to={'/contact-us'} className={({isActive}) => (isActive ? "" : "text-white")}> Contact Us </NavLink></li> 
        </ul>

        <span className={`${showMenu && "z-50 text-white"} md:hidden`} onClick={() => setShowMenu(prev => !prev)}>
        <TiThMenuOutline className={`${showMenu && "z-50 text-alt"} text-black`}/>
        </span>
        
    </nav>
  )
}

export default Nav