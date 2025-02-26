import { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import './home.scss'

import CTA from '../../components/CTA/CAT'
import { useLocation } from 'react-router-dom'
import Hero from '../../components/heroBanner/Hero'
import FooterInfo from '../../components/footer-info/FooterInfo'
import Footer from '../../components/footer/Footer'


const Home = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)

    }, [pathname])
  

  return (
    <div className='home relative'>
        <Nav/>
        <Hero/>
    


            {/* <section  className='md:py-20 py-0 px-4 my-6 bg-gray-100/20'>

            <h2 className='text-3xl text-center font-semibold text-gray-700'>
                Why Choose US
            </h2>

                        <div className='m-auto max-w-7xl flex-col md:flex-row flex gap-5 my-20 '>
                            <div className='shadow flex-1 p-5 rounded'>
                                <span className='bg-gray-200 shadow-sm m-auto h-16 overflow-hidden w-16 flex rounded-full justify-center items-center'>

                                <img src="/svg/safe-and-stable.svg" alt="" className='bg-' /> 
                                </span>
                                <p className='my-5 text-xl text-center text-gray-600'>
                                Quality gas, seamless distribution, and exceptional service for homes and businesses.
                                </p>
                            </div>
                            <div className='shadow flex-1 p-5 rounded'>
                                <span className='bg-gray-200 shadow-sm m-auto h-16 w-16 flex rounded-full justify-center items-center'>
                                <img src="/svg/bank-svgrepo.svg" alt="" className='h-10' /> 
                                </span>
                                <p className='my-5 text-xl text-center text-gray-600'>
                                Reliable Gas Supply, Anytime, Anywhere – Safe, efficient,
                                </p>
                            </div>
                            <div className='shadow flex-1 p-5 rounded'>
                                <span className='bg-gray-200 shadow-sm m-auto h-16 w-16 flex rounded-full justify-center items-center'>
                                <img src="/svg/delivery-man.svg" alt="" className='h-10' /> 
                                </span>
                                <p className='my-5 text-xl text-center text-gray-600'>
                                City distribution in any quantity, Quick and effective

                                </p>
                            </div>
                            
                            
                        </div>

             </section>
                        
       
        <CTA  buttonText={"Get Started"} link="/services" title={"Get Stared Today"} />
        <FooterInfo/>
        <Footer/> */}
    </div>

  )
}

export default Home