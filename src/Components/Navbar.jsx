import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className="navbar bg-gray-400">
  <div className="navbar-start">
    <div className="dropdown z-10">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="yellow">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-yellow-400">
      <NavLink>Home</NavLink>
      <NavLink>Our Student's</NavLink>
      <NavLink>About Us</NavLink>
      </ul>
    </div>
    <img className='rounded-full size-14' src="https://t3.ftcdn.net/jpg/05/08/80/36/360_F_508803603_V6Rt0NOVRXhsld8LGIQb97EWUPvBmWAK.jpg" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLink className="mr-3 p-1 text-yellow-300 text-xl border-b-2 border-yellow-400 hover:border-none hover:text-[18px] hover:text-green-600">Home</NavLink>
    <NavLink className="mr-3 p-1 text-yellow-300 text-xl border-b-2 border-yellow-400 hover:border-none hover:text-[18px] hover:text-green-600">Our Student's</NavLink>
      <NavLink className="mr-3 p-1 text-yellow-300 text-xl border-b-2 border-yellow-400 hover:border-none hover:text-[18px] hover:text-green-600">About Us</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login" className="btn text-yellow-300 bg-gray-500">Sign In</Link>
  </div>
</div>
  )
}

export default Navbar