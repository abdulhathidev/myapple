import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AppLogo from '../../components/logo/AppLogo'

const Navbar = () => {
  return (
    <>
      <div className="flex gap-5 bg-yellow-500 p-2 font-bold items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-2">
            <AppLogo size={10} />
            <label>Home</label>
          </div>
        </Link>
        <div className="flex gap-5">
          <Link to="/registration">Sign Up</Link>
          <Link to="/registration">About</Link>
        </div>
      </div>
      <div className="p-3">
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default Navbar
