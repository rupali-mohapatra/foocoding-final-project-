import React from 'react'

import {Outlet} from 'react-router-dom'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Outlet/>
    </div>
  )
}

export default Dashboard