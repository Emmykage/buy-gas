import  { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/heroBanner/Banner'
import { useLocation } from 'react-router-dom';

const TermsOfService = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
      
  return (
  <main className="">
    <Nav/>
    <Banner header={"Terms and Conditions"}/>
    <section className="py-8 px-5 text-justify font-medium bg-white/90 text-gray-600 leading-7" >
        <div className="100 max-w-4xl m-auto" >

            <h2 className="text-3xl font-bold text-gray-600 text-center"> Terms and Conditions </h2>

            <div>
                <p className='text-gray-600 font-semibold my-3'>
                This page contains information regarding the Terms and Conditions for use of the ValentPhama Services Ltd (“ValentPhama”) website at www.wilmorecare.com. ValentPhama reserves the right to change and/or amend this website (“the site”) at any time and without notice.
                </p>
               
            </div>

            <div>
              
                
                <p className="px-3 my-4"> 
                    Your viewing and use of the site is permitted on the following terms which you are deemed to have accepted by accessing the site.       
                </p>
                    <ul className="pl-3 leading-8 text-sm font-medium list-inside list-decimal md:pl-10">
                        <li className='my-3'>Whilst ValentPhama has taken due care in the preparation of the content of the site, it makes no representations, warranties or guarantees as to the accuracy, completeness, currency or adequacy of the content.</li>
                        <li className='my-3'>The materials contained in the site are for general information purposes only and do not constitute medical or other professional advice. ValentPhama shall not be liable to any person for any loss or damage which may arise from the use of or reliance upon the site or the information contained within it, except as may be required by law.</li>
                        <li className='my-3'>ValentPhama accepts no responsibility or liability for the material on any external internet site which is linked to or from the site. Any links are provided for convenience only and a link does not indicate ValentPhama’s endorsement of any site or vice versa. You may not create a link to the site or upload material to it without our prior written consent.</li>
                        <li className='my-3'>ValentPhama endeavours to ensure that the site is normally available 24 hours a day, but shall not be liable if for any reason the site is unavailable at any time or for any period. Access to the site may be suspended and without notice. If you do experience difficulties in using the site or find a broken link please use the 'Contact' webpage to tell us about it. </li>
                        <li className='my-3'> The content of the site and any intellectual property rights, including copyright, on it are owned by ValentPhama or its licensors. No part of the site may be copied, reproduced, translated or converted into any electronic or machine readable or other form in whole or in part without the prior written approval of ValentPhama.</li>
                        <li className='my-3'>ValentPhama advises all users that the site is not a secure site and that any personal information submitted to the site is done so in acknowledgement of this. ValentPhama shall not be liable to any person for any loss or damage which may arise out of the submission of any personal information to the site, except as required by law. </li>
                        <li className='my-3'>
                            ValentPhama excludes all liability and responsibility for any amount or kind of loss or damage that may result to you or a third party (including, without limitation, any direct, indirect, punitive or consequential loss or damages, or any loss of income, profits, goodwill, data, contracts, use of money, or loss or damages arising from or connected in any way to business interruption, and whether in tort (including, without limitation, negligence), contract or otherwise) in connection with the site in any way or in connection with the use, inability to use or the results of use of the site, any websites linked to the site or the material on such websites, including but not Ltd to loss or damage due to viruses that may infect your computer equipment, software, data or other property on account of your access to, use of, or browsing the site or your downloading of any material from the site or any websites linked to the site.
                            <br/>
                            <br/>
                            <p>
                            Nothing in this legal notice shall exclude or limit ValentPhama’s liability for:

                            </p>

                            <ul className='list-inside list px-6'>
                                <li> a. death or personal injury caused by negligence; or</li>
                                <li> b. fraud; or</li>
                                <li> c. misrepresentation as to a fundamental matter; or</li>
                                <li> d.  any liability which cannot be excluded or Ltd under applicable law.</li>
                            </ul>
                        </li>
                        <li className='my-3'>
                            You must not misuse the site by knowingly introducing viruses or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to the site, the server on which the site is stored, or any server, computer or database connected to the site. You must not attack the site via a denial-of-service attack or a distributed denial-of-service attack. By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990.
                        </li>
                        <li className='my-3'>These terms shall be governed by and construed in accordance with English law.</li>
                    </ul>
            </div>


                     
</div>

</section>

</main >
  )
}

export default TermsOfService