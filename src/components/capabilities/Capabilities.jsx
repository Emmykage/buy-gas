import React from 'react'
import clock from '../../assets/images/svgs/rewind-time.svg'
import file from '../../assets/images/svgs/file.svg'
import list from '../../assets/images/svgs/list.svg'
import presentation from '../../assets/images/svgs/presentation.svg'
const Capabilities = () => {
  return (
    <div className='m-auto my-10 max-w-7xl md:grid gap-4 grid-cols-4'>
        <div className='p-8 shadow text-center'>
            <img src={clock} alt="" className='m-auto w-20'/>
            <p className='my-8 font-medium text-xl'>24/7 SUPPORT</p>
        </div>
        <div className='p-8 shadow text-center'>
            <img src={file} alt="tax planning" className='m-auto w-20'/>
            <p className='my-8 font-medium text-xl uppercase'>Plannings</p>
        </div>
        <div className='p-8 shadow text-center'>
            <img src={list} alt="quality control" className='m-auto w-20'/>
            <p className='my-8 font-medium text-xl uppercase'>Quality Control</p>
        </div>
        <div className='p-8 shadow text-center'>
            <img src={presentation} alt="marketing" className='m-auto w-20'/>
            <p className='my-8 font-medium text-xl uppercase'>Marketing</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        </div>
  )
}

export default Capabilities