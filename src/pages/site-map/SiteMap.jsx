import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/heroBanner/Banner'

const SiteMap = () => {
  return (
    <>
    <Nav/>
    <Banner header={"Site Map"} />
   
    <section className='py-20  text-gray-700 px-5 bg-white'>

    <div className='100 max-w-4xl m-auto'>
        <h2 className='text-3xl text-center font-bold '>SiteMap</h2>
        <h4 className='text-2xl my-3 font-semibold'>Main Navigation</h4>

        <ul className='leading-7 px-5 list-disc list-inside text-gray-600 font-semibold'>
        <li><NavLink to="/about-us" className="underline">About Us</NavLink></li>

        <li><NavLink to="/book-appointment" className="underline">Book Appointment</NavLink></li>
        <li><NavLink to="/contact-us" className="underline">Contact Us</NavLink></li>
        <li><NavLink to="/services" className="underline">Services Us</NavLink>

        {/* <ul  className='px-5 list-disc list-inside'>
        <li><NavLink to="/" className="underline"> Financial Reporting</NavLink></li>
        <li><NavLink to="/" className="underline"> Tax planning</NavLink></li>
        <li><NavLink to="/" className="underline"> Book Keeping & Payroll</NavLink></li>
        <li><NavLink to="/" className="underline"> Business Consultancy</NavLink></li>
        </ul>
         */}
        </li>
        <li><NavLink to="/contact-us" className="underline">Contact Us</NavLink></li>
        <li><NavLink to="/cookies-policies" className="underline">Cookies Policy</NavLink></li>
        <li><NavLink to="/privacy-policies" className="underline">Privacy Policy</NavLink></li>
        </ul>
        
    </div>


    </section>
    </>

  )
}

export default SiteMap