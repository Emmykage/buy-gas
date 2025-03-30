import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppButton from '../../../components/button/Button'
import {  getLocations } from '../../../redux/actions/location'
import { Button, Form } from 'antd'
import AppModal from '../../../components/modal/Modal'
import FormInput from '../../../components/input/Input'
import { SET_LOADING } from '../../../redux/app'
import { getStatistics, updateGasPrice } from '../../../redux/actions/statistics'
import { nairaFormat } from '../../../utils/nairaFormat'
import { toast } from 'react-toastify'
import SpinLoader from '../../../components/loader/SpinLoader'

const Settings = () => {
    const [isOpen, setOpen] = useState()
    const [form] = Form.useForm()
    
    const dispatch = useDispatch()
    const {statistics, loading} = useSelector(state => state.statistic)

    useEffect(()=> {
        dispatch(getLocations())
    },[])

    const handleSubmit = (values) => {
        dispatch(SET_LOADING(true))
        console.log({id:statistics.id, statistic: values})
        dispatch(updateGasPrice({id:statistics.id, statistic: values})).then(result => {
            if(updateGasPrice.fulfilled.match(result)){
                dispatch(getStatistics())
                dispatch(SET_LOADING(false))
                console.log(result.payload)
                toast(result.payload.message || "Price updated", {type: "success"})
                setOpen(false)

            }
            else{
                dispatch(SET_LOADING(false))
                toast(result.payload.message || "Price updated", {type: "success"})


            }
        })

    }

    console.log(statistics.gas_price, loading)
  return (
    <>
    <div className='bg-white rounded-xl shadow p-4'>

        <div>
            <p></p>
            <p className='te font-semibold text-center text-3xl'>Gas Price </p>
            <p className='te font-semibold text-center text-3xl text-gray-700 mt-3'> {loading ? <SpinLoader/> : nairaFormat(statistics?.gas_price)}</p>

            <AppButton  disabled={!statistics}  onClick={()=> setOpen(prev => !prev)}>Update Gas Price</AppButton>


        </div>

        <div>
      

        </div>

  
    </div>

    

<AppModal handleCancel={()=> setOpen(prev => !prev)} isModalOpen={isOpen}>

<Form
className=''
  layout={"vertical"}
  onFinish={(values) =>{
        handleSubmit({...values, role: "agent"})
  }}
  form={form}
  initialValues={{
    gas_price: "",
   
  
    }}
  style={{
    color: "white",
    maxWidth:  600,
  }}
>
    <FormInput required={true} className="input-form" name="gas_price" type='number' label={`Gas Price`}/>
    <Form.Item label={null}>
        <Button loading={loading} disabled={!statistics} className="border-alt m-auto block w-full h-20 bg-primary text-white rounded-lg  border shadow-md font-medium text-xl" type="primary" htmlType="submit">
            Update Price
        </Button>

 
  </Form.Item>

</Form>

</AppModal>
</>
  )
}

export default Settings