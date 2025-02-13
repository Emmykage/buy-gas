
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='border bg-white/80'>

    <footer className='bg-gray-200 py-20 px-4'>
        <div className='m-auto max-w-7xl grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='-mt-10'>
                  <NavLink to={"/"} ><img src={"/logo1.png"} alt="logo" className='w-36 bg-red-32 block m-auto md:inline-block' /> </NavLink> 

                <p className=' text-sm font-medium text-gray-800 text-center md:text-left'>
                &copy; 2025 BuyGas Inc.  Vortech Engineering. All Rights Reserved
                </p>

            </div>
            <div className='text- font-medium text-gray-800 text- md:px-10'>
                <h3 className='mb-6 text-primary font-bold text-lg text-center md:text-left'> Links</h3>
                <ul className='text-center md:text-left'>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to={"/"}> Buy Gas</NavLink> </li>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to="/services"> Delivery Mode</NavLink></li>

                </ul>
                
            </div>
            <div className='text- font-medium text-gray-800 text-center md:text-left'>
                <h3  className=' text-primary mb-6 font-bold text-lg'>Legal</h3>
                <ul className='text-center md:text-left'>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to={"/"}> Terms  Of Service</NavLink> </li>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to="/services"> Privacy Policy</NavLink></li>

                </ul>
                
                
            </div>   

            <div className='text- font-medium text-gray-800 text-center md:text-left'>
                <h3  className=' text-primary mb-6 font-bold text-lg'>Company</h3>
                <ul className='text-center md:text-left'>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to={"/"}> Contact Us</NavLink> </li>
                <li className='hover:text-gray-400 cursor-pointer'><NavLink to="/"> About</NavLink></li>

                </ul>
                
                
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
    
     <div className="text-center bg-white py-10 px-5">
      {/* <p className="text-sm text-gray-400">© 2024 ValentPhama – Plot 135 Alake Onile-Ere Crescent Gbagada Lagos 08093164341      </p> */}

       <ul className="text-sm my-4  text-red-500 m-auto md:justify-center flex flex-col md:flex-row max-w-4xl flex-wrap gap-3 md:gap-0">

        <li className="border-r border-gray-400 px-4"> <NavLink to="/" class="hover:text-alt" >Privacy Policy </NavLink> </li>
        <li className="border-r border-gray-400 px-4"> <NavLink to="/" class="hover:text-alt" >Cookie Policy</NavLink></li>
        <li className="border-r border-gray-400 px-4"><NavLink to={"/"} class="hover:text-alt"> Modern Slavery Statement </NavLink></li>
        <li className="border-r border-gray-400 px-4"><NavLink to={"/"} class="hover:text-alt">  Site Map </NavLink></li>
        <li className=" border-gray-400 px-4"><NavLink to={"/terms-of-service"} class="hover:text-alt"> Terms and Conditions</NavLink></li>
      </ul> 
    </div>

    </section>

  )
}

export default Footer