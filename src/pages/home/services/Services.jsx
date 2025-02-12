import React from 'react'
import idea from '../../../assets/images/idea.svg'
import briefcase from '../../../assets/images/suitcase.svg'
import compliance from '../../../assets/images/presentation.svg'
import chat from '../../../assets/images/chat.svg'
import './services.scss'
import { NavLink } from 'react-router-dom'
const Services = ({details}) => {
  return (
    <div className='services grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl m-auto'>
         <div className='shadow text-center rounded-lg p-10'>
            <img src={compliance} alt="" className='w-10 m-auto' />
            <NavLink to='/bookkeeping-payroll'><p className='my-6 font-medium title'>Bookkeeping & Payroll Services
            </p></NavLink>
            {details &&  <p className='my-5'>Duis a est tincidunt, consectetur ex id, mollis tellus mauris feugiat elit.</p>}

        </div>
        <div className='shadow text-center rounded-lg p-10'>
            <img src={briefcase} alt="" className='w-10 m-auto' />
            <NavLink to={"/tax-planning"}><p className='my-6 font-medium title'>Tax Planning & Compliance            </p></NavLink>
            { details &&  <p className='my-5'>Duis a est tincidunt, consectetur ex id, mollis tellus mauris feugiat elit.</p>}

        </div>
        <div className='shadow text-center rounded-lg p-10'>
            <img src={idea} alt="" className='w-10 m-auto' />
                <NavLink to="/financial-reporting" >            
                <p className='my-6 font-medium title'>
                	Financial Reporting</p></NavLink>
           {details && <p className='my-5'>Duis a est tincidunt, consectetur ex id, mollis tellus mauris feugiat elit.</p> } 

        </div>    

       
        <div className='shadow text-center rounded-lg p-10'>
            <img src={chat} alt="" className='w-10 m-auto' />
            <NavLink to={'/business-consultancy'}>
            
            <p className='my-6 font-medium title'>Financial Consultancy for Business Growth

            </p>
            </NavLink>
            {details &&  <p className='my-5'>Duis a est tincidunt, consectetur ex id, mollis tellus mauris feugiat elit.</p>}

        </div>
        
    </div>
  )
}

export default Services