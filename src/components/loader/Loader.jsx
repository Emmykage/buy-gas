import { Spin } from 'antd'
import React from 'react'

const Loader = () => {
  return (
    <div className='bg-gray-900/60 h-screen fixed z-50 flex justify-center items-center w-full'>
         <Spin tip="Loading...">
   
   </Spin>
    </div>
  )
}

export default Loader