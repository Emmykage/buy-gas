import { Button, Form } from 'antd'
import React from 'react'
import FormInput from '../input/Input'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SET_LOGIN } from '../../redux/app'
import { addUser } from '../../redux/auth'

const HeroForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    
      const handleSubmit = (values) => {
          dispatch(SET_LOGIN(values))
          dispatch(addUser(values))
    
          navigate("/dashboard/payment-form")
    
      }
  return (
    <div className='bg-blue-700 md:my-10 m-auto heroform px-5 md:px-10 py-10 max-w-3xl text-white text-sm'>
        <p className='font-medium'>Fiar Prices, Fast Delivery</p>
        <p className='font-medium'>Get Cooking Gas for 1,300 per Kg Prices, Fast Delivery</p>
        <p className='mt-10 font-medium '>Enter your details to begin</p>


        <div  className='bg-white px-7 rounded-lg py-6'>


        <Form

        initialValues={{
            phone_no: "",
            location: ""
        }}
        name="login"
        className=" md:gap-5 flex flex-col"
      
        style={{
          maxWidth: 600,
        }}
        // initialValues={{
        //   remember: true,
        // }}
        onFinish={handleSubmit}
        onFinishFailed={() => {}}
        autoComplete="on"
        >

<FormInput name={"phone_no"} placeHolder={"Phone Number"}/>
<FormInput
        required={true}
        name={"location"}
        placeHolder={"Select Location"} type={"select"} options={[{label: "wuse", value: "wuse"},
          {label: "maitama", value: "maitama"},
          {label: "Apo", value: "apo"},
          {label: "Gwarimpa", value: "gwarimpa"},
          {label: "Asokoro", value: "asokoro"}
        ]}/>

<Button htmlType='submit' className='bg-blue-700'>
    Buy Gas
</Button>

        </Form>


       

        </div>
        <p className='my-10'>
            Need Help? call 09087654321
        </p>

        
    </div>
  )
}

export default HeroForm