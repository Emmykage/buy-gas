import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/heroBanner/Banner'
import { NavLink, useLocation } from 'react-router-dom'

const CookiesPolicy = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
  return (

    <main className="">
        <Nav/>
        <Banner header={"Coolies Policy"} />
        <section className="px-5 p-8 bg-white/90 text-justify font-medium text-gray-600 leading-7" >
            <div className="100 max-w-4xl m-auto" >
            <p className='text-right italic font-normal'>Effective Date: 1st January 2024            </p>

                <h2 className="text-3xl font-bold text-gray-600 text-center">  Cookie  Policy </h2>

                <div>
                    <h3 className="text-theme my-3 text-2xl font-bold">Introduction</h3>
                    <p className="text-gray-600 font-medium"> 
                    Welcome to Rapid Pay's Cookie Policy. This policy outlines how we use cookies and similar technologies on our website, <NavLink to="/" className={"text-blue-700 underline hover:text-blue-400"}> www.ValentPhama.com.</NavLink>  By continuing to use our website, you consent to our use of cookies as described in this policy.


                    </p>
                    <p className='my-3'>
                    We may update this Cookie Policy periodically to keep you informed of our latest practices regarding cookies and similar technologies. Please check this policy each time you visit our website to stay informed of any changes.



                    </p>
                    <p> We recommend saving a copy of this Cookie Policy for your records.</p>
                    <h4 className="font-bold text-xl my-3 text-gray-600">  Contents </h4>
                    <ul className='list-disc list-inside px-4'>
                        <li> <a href="#about-cookies" className='underline'> About Cookies</a> </li>
                        <li> <a href="#cookies-type" className='text-blue- underline'>Types of Cookies Used</a>

                            <ul className='px-10 list-disc  '>
                            <li>Essential Cookies</li>
                            <li>Functional Cookies</li>
                            <li>Analytical or Performance Cookies</li>
                            <li>Targeting Cookies</li>
                            </ul>
                        </li>

                        <li><a href="#cookies-type" className='underline'>Third-Party Cookies </a></li>
                        <li><a href="#how-to" className='underline'>How to Accept or Reject Cookies</a></li>
                        <li> <a href="#copyright" className='underline'>Copyright, Credit, and Logo</a></li>
                    </ul>

                </div>

                <div>
                    <h4 className="font-bold my-3 text-gray-600 text-lg" id='about-cookies'> About Cookies</h4>
                    <p>
                    Cookies are data files sent between web servers and web browsers, memory, or hard drives to recognize a user's device when accessing a website. They serve various purposes, such as customizing a website, facilitating navigation, improving the user experience, and storing preferences and login information.


                    </p>
                    <p className='my-3'>
                    Cookies can be classified as 'session' or 'persistent.' Session cookies are temporary and expire when you close your browser, while persistent cookies remain on your computer until a fixed expiration date or manual deletion.

                    </p>
                    <p className='my-3'>
                    Cookies can be 'first-party' (set by our website server) or 'third-party' (set by third-party domains). They typically do not contain personal information but may be used in combination with other data to identify you.

                    </p>

                    <p className='my-3'>
                    For more information about cookies, visit www.allaboutcookies.org.

                    </p>

                    <h4 className='text-gray-600 font-bold text-lg' id='cookies-type'>Types of Cookies Used         </h4>
                    <p className="px-0">
                    We use the following types of cookies on our website:
                    <ul className="px-5 list-inside list-disc">
                            <li> <strong>Essential Cookies: </strong> Necessary for the website's core functionality, including administering the website and ensuring proper operation when you interact with it. They also remember information you enter on our website forms.                            </li>
                            <li> <strong> Functional Cookies:</strong>  Store preferences and recognize you when you return to our website, enhancing your experience. They identify your browser and settings and support our contact form and blog comments.                            </li>
                            <li> <strong> Analytical or Performance Cookies:  </strong> Gather data on user interactions with our website to improve its usability, functionality, content, and user experience. Information collected is anonymized.
                            </li>
                            <li> <strong>Targeting Cookies:  </strong>We do not use targeting cookies on our website
                            </li>
                        </ul>
                    </p>
                    
                    <h3 className="font-bold my-3 text-gray-600 text-lg"> Third-Party Cookies</h3>
                    <p>
                    Third parties may use cookies to analyze your use of our website, such as Google Analytics cookies. These cookies collect and process data anonymously. For more information on how Google uses data, visit Google's privacy policy.
                    </p>

                    <p className='my-2'>
                    We cannot control how third parties use information gathered from cookies.

                    </p>

                    <h4 className='text-gray-600 font-bold text-lg'> How to Accept or Reject Cookies               </h4>
                       <p className="mt-4 px-3"> Managing cookies can be done through your browser settings. If you're unsure how to do this, you can find instructions for commonly used browsers here:
                        <ul className="pl-3 leading-8 text-sm font-medium list-inside list-disc">
                        <li> <a href="">Google Chrome</a>  </li>
                        <li> <a href="">Mozilla Firefox</a>  </li>
                        <li> <a href="">Microsoft Internet Explorer</a>  </li>
                        <li> <a href="">Apple Safari</a>  </li>
                                                   
                        </ul>
                    </p>

                    <p>
                    Some browsers offer 'incognito' mode to limit data storage. You can also use third-party applications to block or manage cookies.

                    </p>

                    <p>
                    Opt-out of Google Analytics tracking here.

                    </p>

                    <p>
                    Feel free to block some or all of our cookies, but note that this may affect website functionality.

                    </p>

                    <p>
                    For more details on cookies and adjusting settings, visit www.allaboutcookies.org.

                    </p>
                </div>


                <div>
                    <h3 className="my-3 font-bold text-theme"> Copyright, Credit, and Logo</h3>
                    <p>
                    This Cookie Policy is based on a General Data Protection Regulation (GDPR) compliant template provided by GDPR Privacy Policy. The copyright for this Cookie Policy is either owned by or licensed to us, protected by copyright laws worldwide and copyright protection software. All intellectual property rights are reserved.
                    </p>

                </div>
            </div>

        </section>

    </main >

  )
}

export default CookiesPolicy