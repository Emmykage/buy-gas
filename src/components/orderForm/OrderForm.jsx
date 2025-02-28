import { Button, Flex, Form } from 'antd'
import { useNavigate, useSearchParams } from 'react-router-dom'
import FormInput from '../input/Input'
import AppButton from '../button/Button'
import { nairaFormat } from '../../utils/nairaFormat'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../redux/order'
import "./style.scss"
const OrderForm = () => {
    const navigate = useNavigate()
    const [query] = useSearchParams()
    const [form] = Form.useForm();
    const [amount, setAmount] = useState(0)
    const {user} = useSelector(state => state.auth)
    const kg = query.get("kg")
    const rate = 1300
    const dispatch = useDispatch()

    const [selected, setSelected] = useState(null)

    console.log(user)

    const items = [{
        kg: 7.5,
        amount: 12000,
        id: 1
    },
    {
        kg: 9.5,
        amount: 13000,
        id: 2
    },
    {
        kg: 12.5,
        amount: 16000,
        id: 3
    },
    {
        kg: 25,
        amount: 20000,
        id: 4
    }]



  return (
<Form
className='order-form'
  form={form}
  onFinish={(values) => {
    console.log(values)
    dispatch(createOrder(amount))
    navigate("/dashboard/payment-details")

  }
    }
  initialValues={{
    full_name: "",
    kg: kg ?? "",
    amount: "",
    address: "",
    instruction: "",
    delivery_option: "",
    location: user?.location,
    phone_no: user?.phone
  }}

  layout="vertical"
  style={{ maxWidth: "100%" }}
>  
<FormInput label="Phone Number"
disabled={!!user?.phone}
required={true}
name="phone_no"  
type="text" />


<FormInput
    required={true}
    label={"Location"}
    name={"location"}
    disabled={!!user?.location}
    placeHolder={"Select Location"} type={"select"} options={[{label: "wuse", value: "wuse"},
      {label: "maitama", value: "maitama"},
      {label: "Apo", value: "apo"},
      {label: "Gwarimpa", value: "gwarimpa"},
      {label: "Asokoro", value: "asokoro"}
    ]}/>
    
<FormInput
    required={true}
    label={"Delivery Option"}
    name={"Delivery"}
    // disabled={!!user?.location}
    placeHolder={"Delivery Option"} type={"select"} options={[
        {label: "wuse", value: "wuse"},
        {label: "maitama", value: "maitama"},
        {label: "Apo", value: "apo"},
        {label: "Gwarimpa", value: "gwarimpa"},
        {label: "Asokoro", value: "asokoro"}
    ]}/>

  {/* <FormInput label="Full Name" required name="full_name" type="text" /> */}

  <div>
    <p className='text-gray-600 font-bold my-4'>Quantity and Amount</p>
  </div>
  
    <Flex gap="small" wrap justify='space-between' className='overflow-x-auto'>
        {items.map(item => (
            <Button 
            onClick={() => setSelected(item.kg)} 
            key={item.id} color="primary" variant="solid" className={`${selected === item.kg ? "active" : "" } flex gap-0 flex-1 flex-col`} >
            <span className='font-medium'>
            {item.kg}KG

            </span>
            <span className='font-medium'>
                {nairaFormat(item.amount)}
            

            </span>
          </Button>
        ))}
          
          
      
         
       
        </Flex>

        <FormInput label="Address" required={true} name="address" type="text" placeHolder={"Enter Address"} />
        <FormInput label="Delivery Instructions (optional)" required={false} name="instruction" type="text" placeHolder={"Enter Addition Instuction"} />

 
  {/* <span className='font-medium'>
    {nairaFormat(amount)}
  </span> */}
   {/* <p className='text-gray-600 font-medium'>Rate = {rate}/Kg</p> */}
 
  <Form.Item>
    <AppButton htmlType="submit">Make Order</AppButton>
  </Form.Item>
</Form>  )
}

export default OrderForm