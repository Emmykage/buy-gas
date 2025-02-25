
import { useLocation, useNavigate } from "react-router-dom"
import AppButton from "../button/Button"
import Login from "../login/Login"
import "./style.scss"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { SET_LOGIN } from "../../redux/app"
import { Button, Checkbox, Form, Input, Select } from "antd"
import FormInput from "../input/Input"
import OrderForm from "../orderForm/OrderForm"

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


<div>
  {/* <OrderForm/> */}
</div>

    


  </div>

</div>  )
}


const ContentHero = () => {
  const dispatch = useDispatch()
  const [phone, setPhone] = useState("")
  const navigate = useNavigate()

  const handleSubmit = ({phone}) => {
    console.log(phone)
    if(phone.trim() !== ""){
      dispatch(SET_LOGIN(phone))
      navigate("/dashboard")
    }

  }
  return(
    <div className="max-w- w-full text-justify">


   
    <p className='bg-gray text-2xl text-left max-w-6xl mt-0 md:mt-16 md:text-4xl font-bold  text-gray-200 '>
      Get Reliable Supply of Cooking Gas For your household today.
    </p>
    <p className='text-gray-200 text-left  max-w-6xl text-xl font-semibold md:text-3xl mt-10 '>
      Safe, Fast, and Efficient
    </p>

    <div className="pt-6">
    <Form
    name="login"
    className="space-y-3 gap-5 flex flex-col"
   
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={handleSubmit}
    onFinishFailed={() => {}}
    autoComplete="on"
  >
    <FormInput type="text" name={"phone"}
     placeHolder={"Phone Number"}/>
    <FormInput
    required={true}
    name={"location"}
    placeHolder={"Select Location"} type={"select"} options={[{label: "wuse", value: "wuse"},
      {label: "maitama", value: "maitama"},
      {label: "Apo", value: "apo"},
      {label: "Gwarimpa", value: "gwarimpa"},
      {label: "Asokoro", value: "asokoro"}
    ]}/>

   
    <Form.Item label={null}>
    

      <AppButton htmlType="submit" className={"h-80 text"}>
        Buy Gas
      </AppButton>
    </Form.Item>
  </Form>
    </div>
    
    </div>
  )
}

export default Hero