
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
import { nairaFormat } from "../../../utils/nairaFormat";
import OrderForm from "../../../components/orderForm/OrderForm";


const PaymentForm = () => {
    const navigate = useNavigate()
    const [query] = useSearchParams()
    const [form] = Form.useForm();
    const [amount, setAmount] = useState()

    const kg = query.get("kg")
    const rate = 1300



  return (
    <>
                          <OrderForm/>

    </>
  );
};
export default PaymentForm