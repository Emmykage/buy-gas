import React, { useEffect, useState } from 'react'
import AppModal from '../../../components/modal/Modal'
import { Button, Form } from 'antd'
import FormInput from '../../../components/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOADING } from '../../../redux/app';
import { toast } from 'react-toastify';
import { createAgent, getAgents, getUsers } from '../../../redux/actions/users';

const AdminUsers = () => {
    const [form] = Form.useForm();
    const {users, loading } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [isOpen, setOpen] = useState()
console.log(users)
    useEffect(()=> {
        dispatch(getUsers())
    },[])
    const handleSubmit = (data) => {
        dispatch(SET_LOADING(true))

        dispatch(createAgent(data)).then(result => {
            if(createAgent.fulfilled.match(result)){
                const data = result.payload 
                console.log(data)
                dispatch(SET_LOADING(false))
                setOpen(false)
                toast("Agent has been added", {type: "error"})
                
            }
            else{

                console.log(result)
                dispatch(SET_LOADING(false))

            }
        })

    }
  return (
    <>
    <div className=' className="bg-white rounded-xl shadow"'>

        {/* <button type="button" onClick={()=> setOpen(prev => !prev)} className='px-3 py-1.5 bg-alt text-white rounded-2xl mb-5 ml-auto block'>
            Add Agent
        </button> */}
        

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            User
                        </th>
                    
                        <th scope="col" className="px-6 py-3">
                            Location
                        </th>
                    
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? users.map(item =>(
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        

                        <td className="px-6 py-4  font-semibold">
                           {item.phone}
                        </td>
                        <td className="px-6 py-4">
                           {item.location}
                        </td>
                      

                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
        <FormInput required={true} className="add-fund" name="first_name" type='text' label={`First Name`}/>
        <FormInput  required={true}  className="add-fund" name="last_name" type='text' label={"Last Name"}  />
        <FormInput
        required={true}
        name={"location"}
        label={"Location"}
        placeHolder={"Select Location"} type={"select"} options={[{label: "wuse", value: "wuse"},
          {label: "maitama", value: "maitama"},
          {label: "Apo", value: "apo"},
          {label: "Gwarimpa", value: "gwarimpa"},
          {label: "Asokoro", value: "asokoro"}
        ]}/>
        <FormInput  required={true}  className="add-fund" name="phone" type='text' label={"Phone"}  />
        {/* <FormInput  required={true}  className="add-fund" name="hidden" type='text' label={"Type"}  /> */}

      
        <Form.Item label={null}>
            <Button loading={loading} htmlType="submit" className="border-alt m-auto block w-full h-20 bg-primary text-white rounded-lg  border shadow-md font-medium text-xl" type="primary" htmlType="submit">
                Create Agent
            </Button>

     
      </Form.Item>

    </Form>

    </AppModal>

    </>
  )
}

export default AdminUsers