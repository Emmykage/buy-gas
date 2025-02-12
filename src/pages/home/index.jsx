import { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import './home.scss'

import WWAImage from '../../assets/images/home/supply-chain.jpg'
import experts from '../../assets/images/home/integrated-supply.webp'
import CTA from '../../components/CTA/CAT'
import { useLocation } from 'react-router-dom'
import Hero from '../../components/heroBanner/Hero'


const Home = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)

    }, [pathname])
  

  return (
    <div className='home relative'>
        <Nav/>
        <Hero/>
    


            <section  className='md:py-20 py-0 px-4 my-6 bg-gray-100/20'>

            <h2 className='text-3xl text-center font-semibold text-gray-700'>
                You Can Count On US
            </h2>

                        <div className='m-auto max-w-7xl flex-col md:flex-row flex gap-5 my-20 '>
                            <div className='shadow flex-1 p-5 rounded'>
                                <span className='bg-gray-200 shadow-sm m-auto h-16 overflow-hidden w-16 flex rounded-full justify-center items-center'>
                                {/* <GiDeadWood className='text-2xl text-alt'/> */}
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
                        
        {/* <section className='who-we-ar bg-white py-24 px-4'>
            <div  className='grid gap-10 p-4 rounded shadow items-center bg-white md:grid-cols-2 max-w-7xl m-auto'>
                <div  className='wwa-image'>
                    <img src={WWAImage} alt="" className='w-full h-full object-cover rounded-xl' />


                </div>

                <div   className='wwa-text p-3'>
                    <h3 className='font-semibold text-2xl uppercase mb-10'>
                        Your Trusted Pharmaceutical Partner in Nigeria
                    </h3>
                    <p>
                        At ValentPharma, we pride ourselves on delivering pharmaceutical solutions tailored to meet the unique needs of businesses in the nutraceutical and pharmaceutical sectors.
                    
                    <br/> <br/>
                        With years of experience supporting industries across healthcare and wellness, we ensure your business has access to high-quality raw materials, innovative products, and expert support to drive success.
                    </p>

                </div>
            </div>
            <div  className='grid gap-10 p-4 items-center rounded shadow md:grid-cols-2 my-10 max-w-7xl m-auto '>
           
            <div  className='p-3'> 
                <h3 className='text-2xl uppercase font-semibold mb-10'>
                    Empowering Healthcare with Expert Solutions

                </h3>
                <p className='my-6'>
                We understand the challenges of sourcing reliable pharmaceutical products, but with ValentPharma, you're in safe hands. Our services are designed to simplify your supply chain, ensure regulatory compliance, and support the growth of your business in Nigeria and beyond.
                </p>
            </div>
            <div className='h-96'>
                <img src={experts} alt="accounting expert" className='w-full h-full object-cover rounded-xl'/>
            </div>
            </div>
        </section> */}
        <CTA  buttonText={"Discover Our Services"} link="/services" title={"Get Stared Today"} text={"Reach Out for a Free Consultation and Discover How ValentPharma Can Help Your Business Grow."}/>

    </div>

  )
}

export default Home