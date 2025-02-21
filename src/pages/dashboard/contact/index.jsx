import  { useEffect } from 'react'

import './contact.scss'
import {  useLocation } from 'react-router-dom'
import Navigation from '../components/navigation/Navigation'

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='bg-red container m-auto  h-screen'>
      <Navigation/>    

    
    </div>
  )
}

export default Contact