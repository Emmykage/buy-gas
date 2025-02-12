import { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/heroBanner/Banner'

import CTA from '../../components/CTA/CAT'
import {  useLocation } from 'react-router-dom'
import './service.scss'
const Services = () => {
    const  {pathname}  = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
  
  return (
    <div className=''>
        <Nav/>
        <Banner header={"service"}/>


         <section className='py-16 px-4 service-tab bg-white'>

            <h3 className='text-center text-3xl font-semibold mb-6'>Explore Our Services</h3>
            <p className='text-center max-w-5xl m-auto'>
            At Valent Pharma Ltd, we offer a range of specialized services to support the pharmaceutical and food industries:
            </p>
            <div className='services md:gap-10  grid sm:grid-cols-2 gap-6 max-w-7xl m-auto'>
                <div className='shadow relative flex flex-col sm:flex-row gap-5 text-center items-center rounded-lg p-10 py-5'>

                 
                    <div className='order-2'>
                        <p className='my-2 font-medium text-center sm:text-right title'>Sourcing & Supply of Raw Materials
                        </p>
                        <p className='my-5 text-center sm:text-right'>We procure and distribute high-quality raw materials and active pharmaceutical ingredients (API) essential for pharmaceutical and food production.                        </p>
                    </div>
                    {/* <div className='bg-red-50 w-10 ml-10 shrink-0'> */}
                        <img src={"/svgs/sourcing-materials.svg"} alt="" className='w-16 bg-gray-400 rounded-lg p-1 order-1 sm:order-2'  />

                    {/* </div> */}
                </div>
                <div className='shadow relative flex flex-col sm:flex-row  gap-5 items-center text-center rounded-lg p-10 py-5 '>

                <img src={"/svgs/workshop-svgrepo.svg"} alt="" className='w-16 bg-[#2596be] rounded-lg p-1'  />
        
                    <div className=''>
                        <p className='my-2 font-medium text-center sm:text-left title'>Quality Control & Compliance                        </p>
                        <p className='my-5 text-center sm:text-left'>We ensure the highest quality standards by conducting rigorous product testing, on-site audits, and compliance checks in line with international regulatory requirements. </p>
                    </div>

                </div>

                <div className='shadow relative flex flex-col sm:flex-row  gap-5 items-center text-center rounded-lg p-10 py-5'>

                 
                    <div className='order-2'>
                        <p className='my-2 font-medium text-center sm:text-right title'>Innovative Product Solutions </p>
                        <p className='my-5 text-center sm:text-right'>We partner with top manufacturers to introduce innovative and high-quality pharmaceutical and food ingredients to the Nigerian and West African markets.  </p>
                    </div>
                    <img src={"/svgs/idea-man-person-svgrepo.svg"} alt="" className='w-16 bg-[#0fb793] rounded-lg p-1 order-1 sm:order-2'  />
                    </div>
                <div className='shadow relative flex flex-col sm:flex-row gap-5 items-center text-center rounded-lg p-10 py-5 '>

                <img src={"/svgs/solution-key-connect-svgrepo.svg"} alt="" className='w-16 bg-[#a9429a] rounded-lg p-1'  />
        
                    <div className=''>
                        <p className='my-2 font-medium text-center sm:text-left title'>Pharmaceutical & Food Industry Consultation    </p>
                        <p className='my-5 text-center sm:text-left'>Our experts provide advisory services to help businesses navigate raw material selection, supply chain optimization, and compliance with industry regulations.</p>
                    </div>

                </div>

                <div className='shadow relative flex flex-col sm:flex-row  gap-5 items-center text-center rounded-lg p-10 py-5'>

                 
                    <div className='order-2'>
                        <p className='my-2 font-medium text-center sm:text-right title'>Supply Chain Management </p>
                        <p className='my-5 text-center sm:text-right'>We streamline the logistics and distribution of raw materials, ensuring timely and efficient delivery to pharmaceutical and food companies across Nigeria and West Africa.</p>
                    </div>
                    <img src={"/svgs/circular-connection-svgrepo.svg"} alt="" className='w-16 bg-[#3955a6] rounded-lg p-1 order-1 sm:order-2'  />
                    </div>
                <div className='shadow relative flex flex-col sm:flex-row gap-5 items-center text-center rounded-lg p-10 py-5 '>

                <img src={"/svgs/color-blocks-documentation.svg"} alt="" className='w-16 bg-[#3dc4db] rounded-lg p-1'  />
        
                    <div className=''>
                        <p className='my-2 font-medium text-center sm:text-left title'>Regulatory Support & Documentation</p>
                        <p className='my-5 text-center sm:text-left'>We partner with top manufacturers to introduce innovative and high-quality pharmaceutical and food ingredients to the Nigerian and West African markets.</p>
                    </div>

                </div>
        
    </div>
        </section> 
        {/* <Offers/> */}

        
        <CTA text={"Contact our team today to discuss your needs and discover how ValentPharma can support your business with top-quality solutions."} buttonText={"Contact Us Now!"} title={"Ready to Elevate Your Pharmaceutical Supply Chain? "}/>


    </div>
  )
}

export default Services