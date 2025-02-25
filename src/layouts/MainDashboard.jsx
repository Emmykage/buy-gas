import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const MainDashboard = props => {
  return (
    <div>
       <Outlet/>

       <Footer/>
    </div>
  )
}

MainDashboard.propTypes = {}

export default MainDashboard