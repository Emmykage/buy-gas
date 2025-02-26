
import { useLocation, useNavigate } from "react-router-dom"
import AppButton from "../button/Button"
import Login from "../login/Login"
import "./style.scss"
import { useDispatch } from "react-redux"
import { SET_LOGIN } from "../../redux/app"
import { Form } from "antd"
import FormInput from "../input/Input"
import { addUser } from "../../redux/auth"

const Hero = () => {

  const {pathname} = useLocation()
  return (
<div className='h-full hero flex justify-left px-4 flex-col items-center'>
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
  const navigate = useNavigate()

  const handleSubmit = (values) => {
      dispatch(SET_LOGIN(values))
      dispatch(addUser(values))

      navigate("/dashboard")

  }
  return(
    <div className="max-w- w-full md:bg-gray-800/50 bg-gray-800/70 rounded-2xl p-4 text-justify">


   
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