
import "./style.scss"

import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,

  DatePicker,
  Form,
  Input,
  InputNumber,

} from 'antd';
import FormInput from "../../../components/input/Input";
import Navigation from "../components/navigation/Navigation";
import { useNavigate, useSearchParams } from "react-router-dom";


const PaymentForm = () => {
    const navigate = useNavigate()
    const [query] = useSearchParams()
    const [form] = Form.useForm();

    const kg = query.get("kg")

    console.log(kg)


  return (
    <>
        <div className='bg-red container m-auto  h-screen'>

    <Navigation/>
    <div className='m-auto max-w-4xl p-10'>

    <Form
  form={form}
  onFinish={(values) => 
    navigate("/dashboard/payment-details")
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
    <Button htmlType="submit">Make Order</Button>
  </Form.Item>
</Form>
      </div>
</div>
    </>
  );
};
export default PaymentForm