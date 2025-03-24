
import "./style.scss"

import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,

  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Space,

} from 'antd';
import FormInput from "../../../components/input/Input";
import Navigation from "../components/navigation/Navigation";
import { useNavigate, useOutletContext, useSearchParams } from "react-router-dom";
import { nairaFormat } from "../../../utils/nairaFormat";
import OrderForm from "../../../components/orderForm/OrderForm";


const PaymentForm = () => {
    const navigate = useNavigate()
    const [query] = useSearchParams()
    const [form] = Form.useForm();
    const [amount, setAmount] = useState()
    const [handleNext] = useOutletContext()
    const [selected, setSelected] = useState(null)


    const kg = query.get("kg")
    const rate = 1300

    
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
    <>
      <OrderForm handleNext={handleNext}/>

      

    </>
  );
};
export default PaymentForm