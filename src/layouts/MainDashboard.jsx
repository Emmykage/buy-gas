import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

const MainDashboard = props => {
  return (
    <div>
       <Outlet/>
    </div>
  )
}

MainDashboard.propTypes = {}

export default MainDashboard