import { Button, Form } from 'antd'
import FormInput from '../input/Input'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SET_LOADING, SET_LOGIN } from '../../redux/app'
import { userLogin } from '../../redux/actions/auth'

const HeroForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    
      const handleSubmit = (values) => {
        dispatch(SET_LOADING(true))
          dispatch(SET_LOGIN(values))
          dispatch(userLogin({user: values})).then(result => {
            if(userLogin.fulfilled.match(result)){
              navigate("/dashboard/payment-form")
              dispatch(SET_LOADING(false))


            }else{
              dispatch(SET_LOADING(false))
              navigate("/dashboard/payment-form")


            }
          })
    
    
      }
  return (
    <div className='bg-gray-0 w-full md:my-0 m-auto heroform px-5 md:px-10 py-10 max-w-3xl text-black text-center text-sm'>
        <p className=' my-10 text-4xl text-theme font-semibold'>Gas <span className='text-primary'>Waka</span> </p>
        <p className='font-semibold text-gray-700 text-2xl'>Fair Prices, Fast Delivery        </p>
        <p className='font-medium text-gray-700 text-lg'>Get Cooking Gas for 1,300 per Kg</p>
        <p className='mt-10 font-medium text-lg text-gray-700 my-2'>Enter your details to begin</p>


        <div  className='bg-white border border-gray-200 shadow-xl px-7 rounded-lg py-6'>


        <Form

        initialValues={{
            phone: "",
            location: null
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
        <FormInput name={"phone"} placeHolder={"Phone Number"}/>
        <FormInput
        required={true}
        name={"location"}
        placeHolder={"Select Location"} 
        type={"select"} options={[{label: "Wuse", value: "wuse"},
          {label: "Maitama", value: "maitama"},
          {label: "Apo", value: "apo"},
          {label: "Gwarimpa", value: "gwarimpa"},
          {label: "Asokoro", value: "asokoro"}
        ]}/>

<Button htmlType='submit' className='bg-theme'>
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