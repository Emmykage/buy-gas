import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTiktok } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import { IoMailSharp } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo/logo.png'
const Footer = () => {
  return (
    <section className='border bg-white/80'>

    <footer className='bg-gray-200 py-20 px-4'>
        <div className='m-auto max-w-7xl grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
            <div className=''>
                <h3 className='font-medium text-3xl mb-4 text-alt'><NavLink to={"/"} ><img src={logo} alt="logo" className='w-36 bg-red-32 block m-auto md:inline-block' /> </NavLink> </h3>
                <p className=' text-sm font-medium text-gray-800 text-center md:text-left'>
                ValentPharma provides comprehensive pharmaceutical solutions for businesses of all sizes across Nigeria.
<br/>
<br/>
        Our team of experts is dedicated to supporting your growth by delivering high-quality raw materials, finished products, and innovative healthcare solutions while ensuring strict adherence to industry standards and regulations.</p>

            </div>
            <div className='text- font-medium text-gray-800 text- md:px-10'>
                <h3 className='mb-6 text-primary font-bold text-lg text-center md:text-left'> Links</h3>
                <ul className='text-center md:text-left'>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to={"/"}> Home</NavLink> </li>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to="/services"> Services</NavLink></li>
                <li className='hover:text-gray-400 cursor-pointer'> <NavLink to={"about-us"}> About Us</NavLink></li>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to={"contact-us"}> Contact US</NavLink></li>
                </ul>
                
            </div>
            <div className='text- font-medium text-gray-800 text-center md:text-left'>
                <h3  className=' text-primary font-bold text-lg'>Contact Us</h3>
                <p></p>
                <div className='flex gap-5 my-4 flex-col md:flex-row items-center'>
                <FaHouse/> <address className='not-italic'>Plot 135 Alake Onile-Ere Crescent Gbagada Lagos</address>

                </div>
                <div className='flex gap-5 my-4 items-center flex-col md:flex-row'>
                <FaPhoneAlt/>       <a href="tel:++2347068111277">+2347068111277</a>


                </div>
                <div className='flex gap-5 my-4 items-center flex-col md:flex-row'>
                <IoMailSharp/> <a href="mailto:support@ValentPhama.com"> support@ValentPhama.com</a>

                </div>
                
            </div>   

            <div className='social-link font-medium text-gray-800'>
              <h5 className='text-primary font-bold text-lg text-center md:text-left'>
                Socials
              </h5>
              {/* <div className='flex gap-6 items-center my-6 justify-center md:justify-start' >
              <a href='https://www.facebook.com/profile.php?id=61566396171123' target='_blank'> <FaFacebook className='text-alt text-3xl' />   </a>
              <a  href='https://www.linkedin.com/company/105183786/admin/dashboard/' target='_blank'> <FaLinkedin className='text-alt text-3xl' />    </a>
              <a  href='https://www.instagram.com/ValentPhama/' target='_blank'> <FaInstagram  className='text-alt text-3xl' />   </a>
              <a  href='https://www.tiktok.com/@ValentPhama?lang=en' target='_blank'> <FaTiktok className='text-alt text-3xl'/>   </a>
              </div> */}
              
              
              </div>   
        </div>


        
    </footer>
    
    {/* <div className="text-center mt-20 px-5">
      <p className="text-sm text-gray-400">© 2024 ValentPhama – Plot 135 Alake Onile-Ere Crescent Gbagada Lagos 08093164341
      </p>

      <ul className="text-sm my-4  text-red-500 m-auto md:justify-center flex flex-col md:flex-row max-w-4xl flex-wrap gap-3 md:gap-0">

        <li className="border-r border-gray-400 px-4"> <NavLink to="/privacy-policy" class="hover:text-alt" >Privacy Policy </NavLink> </li>
        <li className="border-r border-gray-400 px-4"> <NavLink to="/cookies-policy" class="hover:text-alt" >Cookie Policy</NavLink></li>
        <li className="border-r border-gray-400 px-4"><NavLink to={"/modern-slavery"} class="hover:text-alt"> Modern Slavery Statement </NavLink></li>
        <li className="border-r border-gray-400 px-4"><NavLink to={"/site-map"} class="hover:text-alt">  Site Map </NavLink></li>
        <li className=" border-gray-400 px-4"><NavLink to={"/terms-of-service"} class="hover:text-alt"> Terms and Conditions</NavLink></li>
      </ul>
    </div> */}

    </section>

  )
}

export default Footer