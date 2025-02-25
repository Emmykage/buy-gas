import { Button, Form } from 'antd'
import { useNavigate, useSearchParams } from 'react-router-dom'
import FormInput from '../input/Input'
import AppButton from '../button/Button'
import { nairaFormat } from '../../utils/nairaFormat'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../redux/order'

const OrderForm = () => {
    const navigate = useNavigate()
    const [query] = useSearchParams()
    const [form] = Form.useForm();
    const [amount, setAmount] = useState(0)
    const {user} = useSelector(state => state.auth)
    const kg = query.get("kg")
    const rate = 1300
    const dispatch = useDispatch()

    console.log(user)



  return (
<Form
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
    location: user?.location,
    phone_no: user?.phone
  }}
  layout="vertical"
  style={{ maxWidth: "100%" }}
>  <FormInput label="Phone Number" required name="phone_no" disabled type="text" />
<FormInput
    required={true}
    name={"location"}
    disabled={!!user?.location}
    placeHolder={"Select Location"} type={"select"} options={[{label: "wuse", value: "wuse"},
      {label: "maitama", value: "maitama"},
      {label: "Apo", value: "apo"},
      {label: "Gwarimpa", value: "gwarimpa"},
      {label: "Asokoro", value: "asokoro"}
    ]}/>

  {/* <FormInput label="Full Name" required name="full_name" type="text" /> */}
  <FormInput label="Address" required={true} name="address" type="text" />
  <FormInput label="Amount in Kg" 
   onChange={(value) => setAmount(value * rate)}
   required name="kg" disabled={!!kg} type="number" />
 
  <span className='font-medium'>
    {nairaFormat(amount)}
  </span>
   <p className='text-gray-600 font-medium'>Rate = {rate}/Kg</p>
 
  <Form.Item>
    <AppButton htmlType="submit">Make Order</AppButton>
  </Form.Item>
</Form>  )
}

export default OrderForm