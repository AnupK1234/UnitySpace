import React from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-cyan-700'>
      <nav className='flex justify-between items-center p-3'>
        <div className='flex justify-center items-center gap-5'>
          <Link to="/">
            <img src={logo} alt="UnitySpace Logo" width={60} height={50} className='outline-none rounded-md' />
          </Link>
          <Link to="/"><h1 className='font-bold text-3xl text-white'>UnitySpace</h1></Link>
        </div>
        <div className='flex justify-around items-center gap-5'>
          <Link to="/aware" className='text-xl font-semibold text-cyan-300 hover:text-white transition-all duration-300 ease-in-out'>Aware</Link>
          <Link to="/events" className='text-xl font-semibold text-cyan-300 hover:text-white transition-all duration-300 ease-in-out'>Events</Link>
          <Link to="/signin" className='text-xl font-semibold text-cyan-300 hover:text-white transition-all duration-300 ease-in-out bg-gray-700 p-2 rounded-md hover:bg-teal-700 '>Sign In</Link>
          <Link to="/signup" className='text-xl font-semibold text-cyan-300 hover:text-white transition-all duration-300 ease-in-out bg-gray-700 p-2 rounded-md hover:bg-teal-700 '>Sign Up</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar