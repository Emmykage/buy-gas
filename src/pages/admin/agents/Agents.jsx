import React, { useState } from 'react'
import AppModal from '../../../components/modal/Modal'
import { Button, Form } from 'antd'
import FormInput from '../../../components/input/Input';

const AdminAgents = () => {
    const [form] = Form.useForm();
    const [isOpen, setOpen] = useState()
    const handleSubmit = () => {

    }
  return (
    <>
    <div className=' className="bg-white rounded-xl shadow"'>

        <button type="button" onClick={()=> setOpen(prev => !prev)} className='px-3 py-1.5 bg-alt text-white rounded-2xl mb-5 ml-auto block'>
            Add Agent
        </button>
        

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Phone Number
                        </th>
                    
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                    
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            O7064334160
                        </th>
                    
                        <td className="px-6 py-4">
                            Kubwa Abuja
                        </td>
                    
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            O7064334160
                        </th>
                    
                        <td className="px-6 py-4">
                            Kubwa Abuja
                        </td>
                    
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            O7064334160
                        </th>
                    
                        <td className="px-6 py-4">
                            Kubwa Abuja
                        </td>
                    
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

    </div>

    <AppModal handleCancel={()=> setOpen(prev => !prev)} isModalOpen={isOpen}>

    <Form
    className=''
      layout={"vertical"}
      onFinish={(values) =>{
            handleSubmit(values)
      }}
      form={form}
      initialValues={{
        first_name: "",
        address: "" ,
        last_name: "",
        phone_number: "",
        role: "agent"
        }}
      style={{
        color: "white",
        maxWidth:  600,
      }}
    >
        <FormInput required={true} className="add-fund" name="first_name" type='text' label={`Firts Name`}/>
        <FormInput  required={true}  className="add-fund" name="last_name" type='text' label={"Last Name"}  />
        <FormInput  required={true}  className="add-fund" name="last_name" type='text' label={"Address"}  />
        <FormInput  required={true}  className="add-fund" name="hidden" type='text' label={"Type"}  />

      
        <Form.Item label={null}>
            <Button htmlType="submit" className="border-alt m-auto block w-full h-20 bg-primary text-white rounded-lg  border shadow-md font-medium text-xl" type="primary" htmlType="submit">
                Create Agent
            </Button>

     
      </Form.Item>

    </Form>

    </AppModal>

    </>
  )
}

export default AdminAgents