import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function HomeLayout() {
  return (
    <Fragment>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </Fragment>
  )
}
