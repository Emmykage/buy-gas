import  { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/heroBanner/Banner'

import './contact.scss'
import {  useLocation } from 'react-router-dom'
import { IoMailSharp } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Nav/>
      <Banner header="contact"/>

       <section className='py-10 bg-white/90 px-5'>
        <div>
          <h3 className='text-3xl text-center font-semibold'>Need Assistance?</h3>
          <p className='text-center font-medium text-gray-600 max-w-4xl m-auto my-6'>Whether you need assistance with sourcing premium raw materials, regulatory compliance, or supply chain management, our team of experts is here to support your business. We provide tailored solutions and expert advice to ensure you receive the highest quality products and services</p>
          <div className='grid md:grid-cols-2 max-w-7xl m-auto gap-8'>
            {/* <div className='text-center shadow p-8'>
              <span className='block m-auto text-center w-max my-3'><FaHouse className='text-3xl' /></span>
              <h4 className='text-xl font-medium text-gray-600 capitalize'>office address</h4>
              <p className='text-lg'><address className='not-italic'>Plot 135 Alake Onile-Ere Crescent Gbagada Lagos</address>
              </p>
            </div> */}
            <div className='text-center shadow md:p-8'>
              <span className='block m-auto text-center w-max my-3'><FaPhoneAlt className='text-3xl' /></span>
              <h4 className='text-xl font-medium text-gray-600 capitalize'>contact number</h4>
              <a href="tel:+2347068111277">+2347068111277</a>
            </div>
            <div className='text-center shadow p-8'>
              <span className='block m-auto text-center w-max my-3'><IoMailSharp className='text-3xl'/></span>
              <h4 className='text-xl font-medium text-gray-600 capitalize'>
              email</h4>
              <p className='text-lg'><a href="mailto:support@ValentPhama.com"> support@valentPhama.com</a></p>
            </div>
        
          </div>
        </div>
      </section>

      <section id='contact-form' className='get-in-touch text-white py-20 px-4'>
        <div className='max-w-4xl  m-auto my-14'>
        <h3 className='text-5xl text-center font-semibold '>Get In Touch</h3>
        <p className='md:text-2xl my-5 text-center'>Contact Us Today to schedule a free consultation and discover how ValentPhama Services can help your business thrive.
        </p>

        </div>
        <form 
        // action="https://formspree.io/f/meojbarv" 
       
         method="post" className='max-w-7xl m-auto md:p-10 border-[5px] px-3 border-gray-300'>
          <div className='flex flex-col md:flex-row gap-6 my-6'>
            <div className='flex-1'>
              <label htmlFor="name"></label>
              <input type="text" placeholder='Name' name='name' className='border rounded p-5 focus:border-none text-gray-900 w-full font-semibold'/>

            </div>
          
            <div className='flex-1'>
              <label htmlFor="email">
              <input type="text"  placeholder='Email' name='email' className='p-5 rounded focus:outline-none text-gray-900 w-full font-semibold'/>

              </label>
            </div>
          </div>
          <div className='my-6'>
          <div className='flex-1'>
              <label htmlFor="phone_no">
              <input type="text"  placeholder='Phone Number' name='Phone Number' className='p-5 rounded focus:outline-none text-gray-900 w-full font-semibold'/>

              </label>
            </div>
          </div>
          <div>
            <textarea name="message" id="message" placeholder='Message' className='p-5 focus:outline-none h-40 rounded-lg text-gray-900 w-full font-semibold'></textarea>
          </div>

          <div>
            <button className='py-4 px-14 bg-alt my-5 rounded w-full md:w-max'>Submit</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Contact