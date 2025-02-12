import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/heroBanner/Banner'
import './appointment.scss'
import ContactDetails from '../../components/contact-details/ContactDetails'
import { useLocation } from 'react-router-dom'

const BookApointment = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
  return (
    <div>
        <Nav/>
        <Banner title="appointment" header={"appointment"}/>

        <section className='py-20 px-5'>
            <div>
                <h3 className='text-xl text-center'>Contact us today to schedule your free consultation!
                </h3>

            </div>
        </section>
        <section className='py-10 px-4 text-white bookAppointment '>
            <div className='max-w-3xl m-auto'>
                <h4 className='text-xl text-center md:text-4xl font-semibold text-white'>Book Your Free Consultation</h4>
                <p className='text-lg text-center font-medium text-gray-300'>Interested in learning how ValentPhama Services can help your business thrive? Book your free consultation today!


                </p>
            </div>
            <div className='border-4 m-auto my-6 max-w-5xl md:p-10'>
                <form action="https://formspree.io/f/meojbarv"  method="post">
                    <p className='italic'>Fill Out the Form Below:
                    </p>
                    <div className='grid md:grid-cols-21 my-4'>
                        <div>
                            <label htmlFor="">Full Name</label>
                            <input type="text"  name='name' className='w-full py-4'/>
                        </div>

                    </div>
                    <div className='my-4 grid gap-10 md:grid-cols-2'>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' className='w-full py-3' />
                    </div>
                    <div>
                    <label htmlFor="number">Phone Number</label>
                    <input type="text" name='number' className='w-full py-3'/>

                    </div>
                    </div>
                    <div className='grid  my-4'>
                        <div>
                            <label htmlFor="">Business Name</label>
                            <input type="text" name='business-name' className='focus:outline-none w-full py-4'/>
                        </div>

                    </div>
                    <div className='grid grid-cols-3 gap-4 my-4'>
                        <div>
                            <label htmlFor="appointment">Pick Appointment</label>
                            <select className='w-full text-black p-4' name='appointment' id='appointment'>
                            <option value="book_keeping"> Book Keeping & Payroll</option>
                            <option value="tax_planning"> Tax Planning </option>
                            <option value="financial_reporting"> Financial Reporting</option>
                            <option value="financial_reporting"> Business Consultancy </option>
                            <option value="business_consultancy"> Business Consultancy </option>
                            <option value="other"> Other (please specify)</option>
                            
                            </select>
                        </div>
                        <div>
                        <label htmlFor="time">Time</label>

                        <input type="time" name='time' className='w-full text-black p-4' />

                        </div>
                        <div>
                        <label htmlFor="date">Pick Appointment</label>

                        <input type="date" name='date' className='w-full text-black p-4' />

                        </div>
                    </div>
                    <div className='my-4'>
                        <div>
                            <label htmlFor="method" className='italic'>Preferred  Consultation Method</label>
                            <select name="contact-method"  className='w-full text-black p-4' id='method' defaultValue={"phone"}>
                            <option value="phone"> Phone</option>
                            <option value="video"> Video call </option>
                            <option value="in-person-meeting"> In Person Meeting Reporting</option>
                            <option value="financial_reporting"> Business Consultancy </option>
                        </select>
                        </div>

                    </div>

                    <div>
                        <button type='submit' className='text-black bg-white py-3 px-12 m-auto font-medium block w-full md:w-max hover:bg-gray-800 hover:text-white transition-all duration-200 ease-out'>
                            Book Appointment
                        </button>
                    </div>

                </form>
            </div>

        </section>
        <section className='px-4 py-20'>
            <h3 className='text-3xl text-center'>Prefer to Reach Out Directly?</h3>
            <p className='text-xl text-center'>
                No problem! Feel free to contact us via phone or email.
                </p>
            <ContactDetails/>
        </section>
    </div>
  )
}

export default BookApointment