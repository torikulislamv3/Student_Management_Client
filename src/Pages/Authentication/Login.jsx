import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
       <div className="hero bg-gray-500 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <img className='size-[400px]' src="https://cdn.pixabay.com/photo/2024/05/23/12/24/ai-generated-8783105_1280.jpg" alt="login...." />
    <div className="card bg-stone-600 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className='text-center pt-10 text-3xl font-bold text-yellow-400'>Sign In Your Profile </h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered text-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered text-white" required />
          <div className='flex justify-between mt-1'>
                <p className='text-white'>Don't have an account ?</p>
                <Link to="/registration" className='underline text-yellow-200'>Sign Up Now</Link>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-yellow-400 bg-black hover:bg-stone-700">Sign In</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login