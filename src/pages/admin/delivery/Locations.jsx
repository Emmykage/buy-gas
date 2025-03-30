import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AppButton from '../../../components/button/Button'
import { createLocations, getLocations } from '../../../redux/actions/location'
import { Button, Form, Spin } from 'antd'
import AppModal from '../../../components/modal/Modal'
import FormInput from '../../../components/input/Input'
import { nairaFormat } from '../../../utils/nairaFormat'
import { SET_LOADING } from '../../../redux/app'

const Locations = () => {
    const [isOpen, setOpen] = useState()
    const [form] = Form.useForm()
    
    const dispatch = useDispatch()
    const {statistics} = useSelector(state => state.statistic)
    const {locations, loading} = useSelector(state => state.location)

    useEffect(()=> {
        dispatch(getLocations())
    },[])

    const handleSubmit = (values) => {
        dispatch(SET_LOADING(true))
        dispatch(createLocations({location: values})).then(result => {
            if(createLocations.fulfilled.match(result)){
                dispatch(getLocations())
                dispatch(SET_LOADING(false))
                setOpen(false)

            }else if(createLocations.pending.match(result)){
                console.log("is pending")
            }
            else{
                dispatch(SET_LOADING(false))

            }
        })

    }

    console.log(statistics, locations, loading)
  return (
    <>
    <div className='bg-white rounded-xl shadow p-4'>


        <div>
        <button type="button" onClick={()=> setOpen(prev => !prev)} className='px-3 py-1.5 bg-alt text-white rounded-2xl mb-5 ml-auto block'>
            Add Location
        </button>
        

        </div>

        
<div className="relative overflow-x-auto h-96 p-4 shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Area
                </th>
                <th scope="col" className="px-6 py-3">
                    Delivery Fee
                </th>
                <th scope="col" className="px-6 py-3">
                    Delivery Time
                </th>
             
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
         {loading ? <tr className='bg-bl'>
            <td colSpan={4} className='bg- py-10 bg-gray-100 text-center text- justify-center '>
            <Spin tip="Loading..."></Spin>
            </td>

         </tr> : 
         locations?.length > 0 ? locations.map(item =>(
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        

                        <td className="px-6 py-4  font-semibold capitalize">
                           {item.area}
                        </td>
                        <td className="px-6 py-4">
                           {nairaFormat(item.delivery_fee)}
                        </td>
                        <td className="px-6 py-4">
                           {item.delivery_time} hours
                        </td>
                      
                       

                        <td className="px-6 py-4 text-right">
                            <NavLink to={`/admin/orders/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</NavLink>
                        </td>
                        </tr>
                    ))  : 
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        
                        <td colSpan={4} className='text-center text-lg font-semibold py-10'> No Agent Created                        </td>
                    </tr>
                    }
       
        </tbody>
    </table>
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
    area: "",
    delivery_fee: "" ,
    delivery_time: "",
  
    }}
  style={{
    color: "white",
    maxWidth:  600,
  }}
>
    <FormInput required={true} className="input-form" name="area" type='text' label={`Location`}/>
    <FormInput  required={true}  className="add-fund" name="delivery_fee" type='number' label={"Delivery Fee (NGN)"}  />
    <FormInput  required={true}  className="add-fund" name="delivery_time" type='number' label={"Delivery Time (hr)"}  />
    
    <Form.Item label={null}>
        <Button loading={loading}  className="border-alt m-auto block w-full h-20 bg-primary text-white rounded-lg  border shadow-md font-medium text-xl" type="primary" htmlType="submit">
            Add A Location
        </Button>

 
  </Form.Item>

</Form>

</AppModal>
</>
  )
}

export default Locations