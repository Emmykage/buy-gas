import  { useEffect } from 'react'

import './contact.scss'
import {  useLocation } from 'react-router-dom'
import Navigation from '../components/navigation/Navigation'

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='bg-red container m-auto  h-screen'>
      <Navigation/>    


      <div className='max-w-2xl m-auto'>
      <section id='contact-form' className='get-in-touch text-white py-20 px-4'>
        
        <form action="https://formspree.io/f/meojbarv"  method="post" className='max-w-7xl m-auto md:p-10 border rounded-lg px-3 border-gray-300'>
         
          
          <div className='flex-1'>
              <label htmlFor="email">
              <input type="text" required placeholder='Email' name='email' className='p-5 rounded focus:outline-none bg-gray-100 text-gray-900 w-full font-semibold'/>

              </label>
            </div>

            <div className='flex-1 mt-6'>
              <label htmlFor="reason">
              <input type="text" required placeholder='Reason' name='email' className='p-5 rounded focus:outline-none bg-gray-100 text-gray-900 w-full font-semibold'/>

              </label>
            </div>
        

          <div className='my-6'>
            <label htmlFor="business_name"></label>
            <textarea  required placeholder='Business Name' name='Business Name' className='p-5 rounded bg-gray-100 focus:outline-none text-gray-900 w-full font-semibold'></textarea>


          </div>

       
          

          


          <div>
            <button className='py-4 px-14 bg-alt my-5 rounded w-full m'>Submit</button>
          </div>
        </form>
      </section>
      </div>

    
    </div>
  )
}

export default Contact