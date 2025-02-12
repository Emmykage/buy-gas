import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/heroBanner/Banner'
import { useLocation } from 'react-router-dom';

const PrivacyPolicy = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    
  return (
  <main className="">
    <Nav/>
    <Banner header={"Cookies Policies"}/>
    <section className="py-8 px-5 bg-white/90 text-justify font-medium text-gray-600 leading-7" >
        <div className="100 max-w-4xl m-auto" >

            <h2 className="text-3xl font-bold text-gray-600 text-center">  Privacy Policy </h2>

            <div>
                <h3 className="text-theme my-3 text-2xl font-semibold text-gray-900">Notice For Employees, Workers, and Subcontractors       </h3>
                <h4 className='text-lg text-gray-800 font-semibold my-3'>Purpose of this Document</h4>
                <p className="text-gray-600 font-medium my-3"> 
                Valent Pharma Ltd respects your privacy and is committed to protecting your personal data. This policy outlines how we collect, use, and safeguard the information you provide when using our website.
                </p>
                
            </div>

            <div>
               
                
                <h3 className="font-semibold my-3 text-gray-800 text-lg">  Information We Collect            </h3>
                <p className="px-3"> 
                We will comply with data protection law, which requires that the personal information we hold about you must be:
                <ul className="pl-3 leading-8 text-sm font-medium list-inside list-disc">
                    <li>Personal details (name, email, phone number) when you contact us.</li>
                    <li>Browsing data collected through cookies and analytics tools.</li>
                    <li>Any additional information provided voluntarily through inquiries or service requests.</li>
                  
                </ul>
                </p>
            </div>

            <div>
                <h3 className="font-semibold my-3 text-gray-800 text-lg">Data Security </h3>
                <p className="px-3">
                We implement security measures to ensure your data is protected from unauthorized access, alteration, disclosure, or destruction.
                </p>
             
            </div>

            <div>
                <h3 className="font-semibold my-3 text-gray-800 text-lg">  Your Rights            </h3>
                <p className="px-3">You have the right to access, modify, or request the deletion of your personal data by contacting us. </p>
                
            </div>
                     
</div>

</section>

</main >
  )
}

export default PrivacyPolicy