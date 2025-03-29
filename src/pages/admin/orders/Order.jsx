import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getOrders } from "../../../redux/actions/order"

const AdminOrder = () => {
    const {orders, loading } = useSelector(state => state.order)
    const dispatch = useDispatch()
    const [isOpen, setOpen] = useState()
console.log(orders)
    useEffect(()=> {
        dispatch(getOrders())
    },[])

  return (
    <div className="bg-white rounded-xl shadow">
        

<div className="relative overflow-x-auto h-96 p-4 shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
        {orders.length > 0 ? orders.map(item =>(
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        

                        <td className="px-6 py-4  font-semibold">
                           {item.phone}
                        </td>
                        <td className="px-6 py-4">
                           {item.quantity}
                        </td>
                        <td className="px-6 py-4">
                           {item.location}
                        </td>
                      
                        <td className="px-6 py-4">
                           {item.status}
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
  )
}

export default AdminOrder