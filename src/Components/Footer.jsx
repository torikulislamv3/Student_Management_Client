import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-gray-400 text-primary-content pt-10 pl-10 pr-10">
  <aside>
   <img className='rounded-full size-14' src="https://t3.ftcdn.net/jpg/05/08/80/36/360_F_508803603_V6Rt0NOVRXhsld8LGIQb97EWUPvBmWAK.jpg" alt="" />
    <p className="font-bold">
      <strong>Rangpur Polytechnic Institute</strong>
      <br />
      <span className='text-blue-900'>Computer Science & Technology</span>
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div>
        <a target='blank' className='mr-5 underline text-[16px]' href="https://rangpur.polytech.gov.bd/">About us</a>
        <a target='blank' className='mr-5 underline text-[16px]' href="https://rangpur.polytech.gov.bd/site/view/notices">Notice</a>
    </div>
    <p className='text-[10px]'>
        Made by : <a target='blank' className='underline text-green-600' href="https://www.facebook.com/mdtorikulislamtamim/">MD TORIKUL ISLAM</a>
    </p>
  </nav>
  
</footer>
  )
}

export default Footer