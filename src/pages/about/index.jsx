import { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/heroBanner/Banner'
import teamPhoto from "../../assets/images/about/raw-material-storag.webp"
import './about.scss'
import CTA from '../../components/CTA/CAT'
import { useLocation } from 'react-router-dom'
const About = () => {
  const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);

    }, [pathname]);
  
  return (
    <div className=''>
        <Nav/>
        <Banner header={"about"}/>
        <section className='py-16 px-4 bg-white/80'>
          <div className='grid gap-4 md:grid-cols-2 m-auto max-w-7xl'>
            <div>
              <h3 className='text-3xl font-semibold'> <span className='font-bold'>Trusted  Supply chain  </span> </h3>
              <p className='font-medium my-10'>
              Valent Pharma Ltd is a leading Nigerian-owned pharmaceutical company dedicated to bridging the gap in the supply chain for the pharmaceutical and food industries. Established during the COVID-19 pandemic, our company was founded on the urgent need to ensure uninterrupted access to essential raw materials and active pharmaceutical ingredients (API) required for pharmaceutical and food production.
              <br/> <br/>
              With a strong network of global partners in Europe and Asia, we deliver premium-quality raw materials that meet the highest international standards. Our commitment to quality assurance includes stringent product testing, on-site audits, and compliance with regulatory requirements, ensuring that our clients receive only the best inputs for their production needs.
    



              </p>
            </div>
            <div>
              <img src={teamPhoto} alt=""  className='w-full h-full' />
            </div>

          </div>
        </section>

       <section className='bg-gray-100 py-20'>
          <div className='text-center m-auto max-w-5xl my-10'>
            <h3 className='text-3xl font-semibold'>Our Mission</h3>
            <p className='text-gray-700 font-semibold leading-7'>
            Our mission is to be the backbone of the healthcare and food industries by supplying high-quality, innovative, and essential raw materials that empower businesses to thrive and consumers to enjoy safer, better products

            </p>
          </div>
        </section> 


        {/* <section className='uniquness py-20 px-5'>

          <div className='grid md:grid-cols-2 m-auto max-w-7xl'>

            <div className='max-w-7xl text-white leading-7'>
              <h3 className='text-3xl my-2 text-alt'> <span className='font-semibold'>Why ValentPhama Services Stands Out</span></h3>
              <ul className='list-inside list-dis px-5'>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                <p><span className='font-semibold text-nowrap'>Tailored Solutions:</span>  Every business is unique, so we offer customized accounting strategies that align with your specific needs</p> </li>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                <p><span className='font-semibold text-nowrap'>Expertise You Can Trust:</span>  Our accountants are certified professionals with extensive experience in UK tax regulations and financial reporting.</p> </li>
                <li className='flex items-cente gap-4 '> <span className='text-3xl'>&#8226;</span> 
                  <p><span className='font-semibold text-nowrap'>Business Growth Focus: </span> More than just compliance, we help businesses scale through strategic financial planning and consultancy.
                  </p> 
                </li>
                

              </ul>
            </div>
          </div>


        </section> */}


        <section className=''>
          <CTA/>
        </section>
    </div>
  )
}

export default About