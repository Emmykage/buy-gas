import React from 'react'

const AdminHome = () => {
  return (
    <div>
        <div className='h-44 w-full py-4 -200 grid sm:grid-cols-3 gap-4'>
            <div className='border shadow flex justify-center items-center flex-col rounded border-gray-200 '>
                    <span className='text-xl font-medium text-gray-700'>User</span>
                    <span className='text-gray-600 font-medium'>200</span>

            </div>
            <div className='border shadow flex justify-center items-center flex-col rounded border-gray-200 '>
                    <span className='text-xl font-medium text-gray-700'>Active Orders</span>
                    <span className='text-gray-600 font-medium'>200</span>

            </div>
            <div className='border shadow flex justify-center items-center flex-col rounded border-gray-200 '>
                    <span className='text-xl font-medium text-gray-700'>Delivered</span>
                    <span className='text-gray-600 font-medium'>200</span>

            </div>
       </div>
    </div>
  )
}

export default AdminHome