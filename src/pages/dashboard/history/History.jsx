import React, { useEffect } from 'react'
import Navigation from '../components/navigation/Navigation'
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../../../redux/actions/order';
import dateFormater from '../../../utils/dateFormatter';

const History = () => {
     const dispatch = useDispatch();
     const {orders} = useSelector(state => state.order)

     useEffect(()=> {
        dispatch(getUserOrders())
     },[])
  return (
    <div className='bg-red container m-auto  h-screen'>
        <Navigation/>


        {orders.map(item => (
                <div key={item.id} className='shadow p-4 my-2'>
                <p className='text-gray-600 text-sm font-semibold'>{item.quantity}KG, {dateFormater(item.created_at)}</p>
                <p className='font-bold text-gray-600'>{item.address}, {item.location}</p>
                </div>
        ))}
      
      
    </div>
  )
}

export default History