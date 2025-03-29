import React from 'react'

const AdminHome = () => {
  return (
    <div className='bg-white rounded-xl shadow p-4'>
        <div className='min-h-44 w-full py-4 -200 grid sm:grid-cols-3 gap-4'>
            <div className='border shadow flex justify-center items-center flex-col rounded border-gray-200 '>
                <span className='text-xl font-medium text-gray-700'>Users</span>
                <span className='text-gray-600 font-semibold text-lg'>200</span>
            </div>
            <div className='border shadow flex justify-center items-center flex-col rounded border-gray-200 '>
                <span className='text-xl font-medium text-gray-700'>Active Orders</span>
                <span className='text-gray-600 font-semibold text-lg'>200</span>

            </div>
            <div className='border shadow flex justify-center items-center flex-col rounded border-gray-200 '>
                <span className='text-xl font-medium text-gray-700'>Delivered</span>
                <span className='text-gray-600 font-semibold text-lg'>200</span>

            </div>
       </div>
    </div>
  )
}

export default AdminHome