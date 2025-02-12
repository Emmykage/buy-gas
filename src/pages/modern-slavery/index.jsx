import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/heroBanner/Banner'
import { NavLink, useLocation } from 'react-router-dom'

const ModernSlavery = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
  return (

    <main className="">
        <Nav/>
        <Banner header={"Modern Slavery Statement"} />
        <section className="px-5 p-8 text-justify font-medium text-gray-600 leading-7" >
            <div className="100 max-w-4xl m-auto" >
            <p className='text-right italic font-normal'>Approved on 01 September 2024</p>

                <h2 className="text-3xl font-bold my-4 text-gray-600 text-center">Modern Slavery and Human Trafficking Statement                </h2>
                <div>
                    <h3 className="text-theme my-3 text-2xl font-semibold">Introduction</h3>
                    <p className="text-gray-600 font-medium"> 
                    This statement, made pursuant to section 54(1) of the Modern Slavery Act 2015, outlines ValentPhama's commitment to preventing modern slavery and human trafficking within our business and supply chain.


                    </p>

                    <h3 className="text-gray-600 my-3 text-xl font-bold">Business Description </h3>

                    <p className='my-3'>We are a payroll and accounting outsourcing business operating globally.</p>

                    <h3 className="text-gray-600 my-3 text-xl font-bold">Core Values and Governance              </h3>

                    <p> Our core values are listening, simplicity, and doing it right. We maintain transparent relationships with stakeholders, fostering diversity in our management team. We adhere to market and regulatory frameworks and regularly review conflicts of interest.                    </p>
                    <h4 className="font-semibold my-3 text-gray-800">  Supply Chains              </h4>
                    <p>
                    Our commitment to ethical standards includes:

                    </p>
                    <ul className='list-disc list-inside px-4'>
                        <li>Thorough assessment of new outsourcing providers and vendors.                    </li>
                        <li>Explicit anti-slavery clauses in supplier agreements.</li>

                        <li>Due diligence and oversight, guided by our Supplier & Outsourcing Policy.                        </li>
                        <li>A risk-based approach to identify and mitigate modern slavery risks.                        </li>
                        <li>Periodic sharing of supply chain guidelines and policies.                        </li>
                    </ul>

                    <p className='my-3'>
                    The Board of Directors and Audit and Risk Committees establish the control environment.

                    </p>

                </div>

                <div>
                    <h4 className="font-bold my-3 text-gray-600 text-lg">People </h4>
                    <p>
                    We foster a workplace culture based on fairness, equity, inclusivity, and transparency. Our Whistleblowing Policy ensures a secure mechanism for reporting concerns. Employee engagement surveys are conducted annually. We conduct pre-employment background checks and offer regular training on various topics, including modern slavery and human trafficking.


                    </p>

                    <h4 className='font-bold my-3 text-gray-600 text-lg'>
                    Customers and Partners

                    </h4>
                    <p className='my-3'>
                    We conduct comprehensive due diligence on customers and set high standards for partners, requesting modern slavery statements during onboarding.

                    </p>

                    
                    <h4 className='font-bold my-3 text-gray-600 text-lg'>Training</h4>
                    <p className='my-3'>
                    Regular training, including induction and refresher programs, is provided to all employees. Specialized teams receive additional training, and refresher training is conducted annually. Management ensures comprehensive training on modern slavery and human trafficking within supply chains.

                    </p>

                    <h4 className='font-bold my-3 text-gray-600 text-lg'>
                    Compliance

                    </h4>

                    <p className='my-3'>
                    Regular internal audits and external audits ensure compliance with our policies and procedures.

                    </p>

                    <h4 className='font-bold my-3 text-gray-600 text-lg'>
                    Test of Adequacy

                    </h4>

                    <p className='my-3'> Zero reports indicate modern slavery practices within our organization.                </p>

                    <h4 className='text-gray-600 font-bold text-lg'>Policies </h4>
                    <p className="px-0">
                    We use the following types of cookies on our website:
                    <ul className="px-5 list-inside list-disc">
                            <li> Modern Slavery Policy: Outlines our strategy for recognizing and addressing modern slavery and human trafficking risks.                            </li>
                            <li> Supplier and Outsourcing Policy: Ensures supplier alignment with our standards.
                            </li>
                            <li> Staff Handbook and Code of Conduct: Guides employee behavior.                            </li>
                            <li> Recruitment Policy: Ensures eligibility checks.                          </li>
                            <li> Whistleblowing Policy: Fosters an environment for reporting concerns.
                            </li>
                        </ul>
                    </p>
                    
                    <h3 className="font-bold my-3 text-gray-600 text-lg"> Moving Forward
                    </h3>
                    <p>
                    We commit to enhancing our Modern Slavery Statement annually, updating policies and procedures, and improving employee awareness. The Board Ethics and Sustainability Committee will monitor modern slavery matters quarterly and escalate issues as needed.
                    </p>
                    <h3 className="font-semibold my-3 text-gray-700 text-lg"> Signature
                    </h3>
                    <p className='my-2  font-bold'>
                    Olalekan Balogun <br/>
                    Managing Director
                    </p>

                   
                </div>               
            </div>

        </section>

    </main >

  )
}

export default ModernSlavery