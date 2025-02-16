
import { useLocation, useNavigate } from "react-router-dom"
import AppButton from "../button/Button"
import Login from "../login/Login"
import "./style.scss"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { SET_LOGIN } from "../../redux/app"

const Hero = () => {

  const {pathname} = useLocation()
  return (
<div className='md:h-[900px] h-screen hero flex justify-left px-4 flex-col items-center hero'>
  <div className="grid md:grid-cols-2 m-auto max-w-7xl">


    {pathname === "/auth" ? 
      <Login/>
       :    
       pathname == "/signup" ? 
       <Login/>
       :

       <ContentHero/>
      }


    


  </div>

</div>  )
}


const ContentHero = () => {
  const dispatch = useDispatch()
  const [phone, setPhone] = useState("")
  const navigate = useNavigate()

  const handleSubmit = () => {
    if(phone.trim() !== ""){
      dispatch(SET_LOGIN(phone))
      navigate("/dashboard")
    }

  }
  return(
    <div className="max-w-lg text-justify">

   
    <p className='bg-gray text-2xl text-left max-w-6xl mt-0 md:mt-16 md:text-4xl font-bold  text-gray-200 '>
      Get Reliable Supply of Cooking Gas For your household today.
    </p>
    <p className='text-gray-200 text-left  max-w-6xl text-xl font-semibold md:text-3xl mt-10 '>
      Safe, Fast, and Efficient
    </p>
    <div className="my-4">
      <input 
        name="phone"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      className="py-6 px-4 text-2xl bg-gray-200/10 border border-white rounded-2xl text-white w-full" placeholder="Enter Number" />
      <AppButton onClick={handleSubmit} className={"h-80 text"}>
        Buy Gas
      </AppButton>
    </div>
    </div>
  )
}

export default Hero