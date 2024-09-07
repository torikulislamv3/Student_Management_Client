import React from 'react'

const Login = () => {
  return (
    <div>
       <div className="hero bg-gray-500 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <img className='size-[400px]' src="https://cdn.pixabay.com/photo/2024/05/23/12/24/ai-generated-8783105_1280.jpg" alt="login...." />
    <div className="card bg-stone-600 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <div className='flex justify-between mt-1'>
                <p>Don't have an account ?</p>
                <a className='underline text-yellow-200' href="">Sign Up Now</a>
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