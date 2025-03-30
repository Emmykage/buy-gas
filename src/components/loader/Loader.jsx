import { Spin } from 'antd'

const Loader = () => {
  return (
    <div className='bg-gray-900/60 h-screen fixed z-50 flex justify-center items-center w-full'>
         <Spin tip="Loading...">
   
   </Spin>
    </div>
  )
}

export default Loader