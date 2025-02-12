import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import { IoMailSharp } from 'react-icons/io5'

const ContactDetails = () => {
  return (


<div>
 <div className='grid md:grid-cols-3 max-w-7xl m-auto gap-8'>
    <div className='text-center shadow p-8'>
      <span className='block m-auto text-center w-max my-3'><FaHouse className='text-3xl' /></span>
      <h4 className='text-xl font-medium text-gray-600 uppercase'>office address</h4>
      <p className='text-lg'><address>Plot 135 Alake Onile-Ere Crescent Gbagada Lagos</address>
      </p>
    </div>
    <div className='text-center shadow md:p-8'>
      <span className='block m-auto text-center w-max my-3'><FaPhoneAlt className='text-3xl' /></span>
      <h4 className='text-xl font-medium text-gray-600 uppercase'>contact number</h4>
      <a href="tel:+2347068111277">+2347068111277</a>
    </div>
    <div className='text-center shadow p-8'>
      <span className='block m-auto text-center w-max my-3'><IoMailSharp className='text-3xl'/></span>
      <h4 className='text-xl font-medium text-gray-600 uppercase'>
      email id</h4>
      <p className='text-lg'><a href="mailto:support@ValentPhama.com"> support@valentPhama.com</a></p>
    </div>

  </div>
</div>
     )
}

export default ContactDetails