import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div>
    <div className="hero bg-gray-500 min-h-screen">
<div className="hero-content flex-col lg:flex-row-reverse">
<img className='size-[400px]' src="https://cdn.pixabay.com/photo/2017/05/15/13/56/sign-up-2314914_1280.png" alt="login...." />
 <div className="card bg-stone-600 w-full max-w-sm shrink-0 shadow-2xl">
   <form className="card-body">
     <div className="form-control">
       <label className="label">
         <span className="label-text text-white">Your Name</span>
       </label>
       <input type="text" placeholder="Enter Your Name" className="input input-bordered text-white" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text text-white">Your Email</span>
       </label>
       <input type="email" placeholder="Enter Your Email" className="input input-bordered text-white" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text text-white">Your Password</span>
       </label>
       <input type="password" placeholder="Enter Your Password" className="input input-bordered text-white" required />
       <span className="label-text text-white mt-5">Select Your Role</span>
       <select className="select select-error w-full max-w-xs mt-1">
  <option disabled selected>Select Your Role</option>
  <option>Student</option>
  <option>Teacher</option>
</select>
       <div className='flex justify-between mt-1'>
             <p>Allready have an account ?</p>
             <Link to="/login" className='underline text-yellow-200'>Sign In Now</Link>
       </div>
     </div>
     <div className="form-control mt-6">
       <button className="btn btn-primary text-yellow-400 bg-black hover:bg-stone-700">Sign Up</button>
     </div>
   </form>
 </div>
</div>
</div>
 </div>
  )
}

export default Registration