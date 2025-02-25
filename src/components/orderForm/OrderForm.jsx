import { Button, Form } from 'antd'
import { useNavigate, useSearchParams } from 'react-router-dom'
import FormInput from '../input/Input'
import AppButton from '../button/Button'

const OrderForm = () => {
    const navigate = useNavigate()
    const [query] = useSearchParams()
    const [form] = Form.useForm();

    const kg = query.get("kg")



  return (
<Form
  form={form}
  onFinish={(values) => {
    console.log(values)
    navigate("/dashboard/payment-details")

  }
    }
  initialValues={{
    full_name: "",
    kg: kg ?? "",
    amount: "",
    address: "",
    phone_no: "+234706123456"
  }}
  layout="vertical"
  style={{ maxWidth: "100%" }}
>
  <FormInput label="Full Name" required name="full_name" type="text" />
  <FormInput label="Address" required={true} name="address" type="text" />
  <FormInput label="Phone Number" required name="phone_no" disabled type="text" />
  <FormInput label="Amount in Kg" required name="kg" disabled={!!kg} type="number" />

  <Form.Item>
    <AppButton htmlType="submit">Make Order</AppButton>
  </Form.Item>
</Form>  )
}

export default OrderForm