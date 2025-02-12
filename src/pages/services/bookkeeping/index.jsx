import React from 'react'
import Nav from '../../../components/nav/Nav'
import Banner from '../../../components/heroBanner/Banner'
import TitleBox from '../../../components/titleBox/TitleBox'
import bookkeeping from '../../../assets/images/services/bookkeeping_img.jpg'
import payroll from "../../../assets/images/services/payroll-management.jpg"
import CTA from '../../../components/CTA/CAT'
const BookkeepingPayroll = () => {
  return (
    <div>
        <Nav/>
        <Banner header={"bookkeeping"}/>
                
        <section className='py-20 px-5'>
            <div className='max-w-7xl m-auto'>
                <div>
                    
                    <TitleBox title={"Bookkeeping & Payroll Services"}/>
                </div>

                <div className='mt-6'>
                    <p> At ValentPhama Services, we understand that efficient bookkeeping and accurate payroll management are crucial to the success of any business. That’s why we offer comprehensive bookkeeping and payroll services tailored to meet the unique needs of small and medium-sized businesses across the UK.</p>
                    <h4 className='text-2xl font-semibold my-6 text-center'>Bookkeeping Services</h4>
                    <div className='grid md:grid-cols-2 gap-10 py-0'>
                        <div className='h-96 p-10'>
                            <img src={bookkeeping} alt="" className='h-full w-full' />

                        </div>
                        <div className='py-10'>
                        <p> Keeping your financial records organized and up to date is essential for managing cash flow, preparing for tax season, and making informed business decisions. Our professional bookkeeping services ensure that your accounts are always accurate and compliant with UK regulations. </p>

                        <h4 className='font-semibold'>Our Bookkeeping Services Include:</h4>
                    <ul className='list-disc list-inside px-4'>
                        <li className=''> Recording daily financial transactions</li>
                        <li className=''> <>Organizing receipts and invoices</></li>
                        <li className=''> <>Bank reconciliations to ensure accurate cash flow tracking</></li>
                        <li className=''> <>Preparing financial statements (profit & loss, balance sheets)</></li>
                        <li className=''> <>VAT calculations and submissions</></li>
                        <li className=''> <>Monitoring accounts receivable and payable</></li>
                    </ul>
                    
                        </div>
                    </div>
                   
                    <p className='max-w-2xl my-4'>Whether you're a startup or an established business, we can help you maintain a clear and accurate financial picture. </p>
                    
                </div>
  
            </div>

            <div  className='max-w-7xl m-auto'>
                <h4 className='text-2xl font-semibold my-6 text-center'>Payroll Services </h4>

                <div className='grid md:grid-cols-2 gap-10'>
                <div className='h-96 p-10'>
                    <img src={payroll} alt="" className='h-full w-full'/>
                </div>
                <div className='py-10'>
                <p>Managing payroll can be time-consuming and complex. Our payroll services ensure your employees are paid accurately and on time, while also ensuring compliance with UK tax laws, national insurance contributions, and pension requirements.</p>
                <div>
                    <h4>Our Payroll Services Include:</h4>
                        <ul className='list-disc list-inside px-4'>
                        <li>Employee salary and wage calculations              </li>
                        <li>Processing employee deductions (taxes, National Insurance, pensions)
                        </li>
                        <li>PAYE and NIC management
                        </li>
                        <li>Generating payslips for employees
                        </li>
                        <li>Managing employee benefits and bonuses
                        </li>
                        <li>Automatic pension enrollment compliance
                        </li>
                        <li>Year-end payroll summaries and P60s
                        </li>

                    </ul>
                </div>
                </div>
                </div>
                <p  className='max-w-3xl'>
                With our professional payroll services, you no longer have to worry about the ever-changing payroll regulations. We’ll handle all the details so you can focus on growing your business.


                </p>
                
            </div>

        </section>
        <section className='uniquness py-20 px-5'>

            <div className='grid md:grid-cols-2 m-auto max-w-7xl'>

            <div className='max-w-7xl text-white leading-7'>
                <h3 className='text-3xl my-2 text-alt'> <span className='font-semibold'>Why Outsource Bookkeeping & Payroll?                </span></h3>
                <p>Outsourcing your bookkeeping and payroll services can offer several advantages:
                </p>
                <ul className='list-inside list-dis px-5'>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                <p><span className='font-semibold text-nowrap'>Save Time:</span>  Focus on your business while we handle the day-to-day financial management.</p> </li>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                <p><span className='font-semibold text-nowrap'>Reduce Errors:</span>  : Avoid costly payroll and accounting mistakes with professional oversight.</p> </li>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                    <p><span className='font-semibold text-nowrap'>Ensure Compliance: </span> Stay up to date with UK tax regulations, payroll laws, and VAT submissions without hassle</p> 

                </li>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                    <p><span className='font-semibold text-nowrap'>Improve Cash Flow: </span> Gain a clear picture of your finances to better manage your cash flow and business growth</p> 
                    
                </li>
                

                </ul>
            </div>
            </div>


            </section>
            <section className='px-5 py-20'> 
                <div className='max-w-7xl m-auto'>

                <h3 className='text-2xl text-center my-6 font-semibold '>
                Ready to Simplify Your Bookkeeping & Payroll?

                </h3>
                <p className='text-center max-w-4xl m-auto font-medium text-gray-600'>
At ValentPhama Services, we take pride in offering personalized, reliable, and accurate bookkeeping and payroll solutions that fit your business needs. Whether you need help with daily financial management or comprehensive payroll support, we’re here to assist.

                </p>
                </div>

            </section>

            <CTA text={"for a free consultation and learn how our bookkeeping and payroll services can benefit your business."} buttonText={"Contact Us Today "}/>
        </div>
  )
}

export default BookkeepingPayroll