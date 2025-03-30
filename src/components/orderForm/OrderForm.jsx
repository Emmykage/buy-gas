import { Button, Flex, Form } from 'antd'
import { useNavigate, useSearchParams } from 'react-router-dom'
import FormInput from '../input/Input'
import AppButton from '../button/Button'
import { nairaFormat } from '../../utils/nairaFormat'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./style.scss"
import { createOrder } from '../../redux/actions/order'
import { SET_LOADING } from '../../redux/app'
import { getStatistics } from '../../redux/actions/statistics'
const OrderForm = ({
    handleNext
}) => {
    const navigate = useNavigate()
    const [query] = useSearchParams()
    const {statistics} = useSelector(state => state.statistic)
    const [form] = Form.useForm();
    const [amount, setAmount] = useState(0)
    const {user} = useSelector(state => state.auth)
    const kg = query.get("kg")

    const [rate, setRate] = useState(0)
    const dispatch = useDispatch()

    const [selected, setSelected] = useState(null)


    // const kg_amount = Form.useWatch("quantity", form)

    // console.log(kg_amount,amount, user)

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




    useEffect(()=> {
      form.setFieldsValue({
        location: user?.location,
        phone: user?.phone
      })

    }, [user])


    useEffect(()=> {
      dispatch(getStatistics())

    }, [])

    
    useEffect(()=> {
      setRate(statistics.gas_price ?? 0)

    }, [statistics])

    console.log(statistics.gas_price)
  return (
<Form
className='order-form'
  form={form}
  onFinish={(values) => {
    dispatch(SET_LOADING(true))
    const data = {order:{ ...values, amount}}
    console.log(data)
    dispatch(createOrder(data)).then(result => {
      if(createOrder.fulfilled.match(result)){
        console.log(result)

        const order_id = result.payload.id
        console.log(result)
        dispatch(SET_LOADING(false))

        navigate(`/dashboard/payment-details?request_id=${order_id}`)
        handleNext()
      }else{
        dispatch(SET_LOADING(false))


      }
    })



    // navigate("/dashboard/payment-details")
    // handleNext()
  



  }
    }
  initialValues={{
    full_name: "",
    quantity: kg ?? "",
    amount: amount,
    address: "",
    instruction: "",
    delivery_option: "",
    location: user?.location,
    phone: user?.phone
  }}

  layout="vertical"
  style={{ maxWidth: "100%" }}
>  
<FormInput label="Phone Number"
disabled={!!user?.phone}
required={true}
name="phone"  
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
    required={false}
    label={"Delivery Option"}
    // disabled={!!user?.location}
    placeHolder={"Delivery Option"} name="delivery_option" type={"select"} options={[
        {label: "Immediate", value: "immediate"},
       
    ]}/>
<div>
<FormInput 
onChange={(value) => setAmount(value * rate)} label="Quantity(Kg)" max={50} required={false} name="quantity" type="number" />


  

   <p className='text-gray-600 font-medium'><span className='font-medium'>
    {nairaFormat(amount)}
  </span> @ {rate}/Kg</p>
 
</div>

  <div>
    <p className='text-gray-600 font-bold my-4'>Quantity and Amount</p>
  </div>
  
    <Flex gap="small" wrap justify='space-between' className='overflow-x-auto'>
        {items.map(item => (
            <Button 
            onClick={() => {
              form.setFieldsValue({
                quantity: item.kg
              })
                setSelected(item.kg)
                setAmount(item.kg * rate)
            }
            } 
            key={item.id} color="primary" variant="solid" className={`${selected === item.kg ? "active" : "" } flex gap-0 flex-1 flex-col`} >
            <span className='font-medium'>
            {item.kg}KG

            </span>
            <span className='font-medium'>
                {nairaFormat(item.kg * rate)}
            

            </span>
          </Button>
        ))}
          
          
      
         
       
        </Flex>

        <FormInput label="Address" required={true} name="address" type="text" placeHolder={"Enter Address"} />
        <FormInput label="Delivery Instructions (optional)" required={false} name="instruction" type="text" placeHolder={"Enter Addition Instuction"} />

 
  <Form.Item>
    <AppButton htmlType="submit">Make Order</AppButton>
  </Form.Item>
</Form>  )
}

// OrderForm.propTypes = {
//   handleNext: PropTypes.func
// }

export default OrderForm