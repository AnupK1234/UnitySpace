import React from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = ({ user, setUser }) => {

  function handleSignOut() {
    setUser(null);
  }

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
          {user ? <Link to="/profile" className='text-xl font-semibold text-cyan-300 hover:text-white transition-all duration-300 ease-in-out p-2 rounded-md '>Profile</Link> : <Link to="/signin" className='text-xl font-semibold text-cyan-300 hover:text-white transition-all duration-300 ease-in-out bg-gray-700 p-2 rounded-md hover:bg-teal-700 '>Sign In</Link>}
          {user ?
            <div className='flex flex-col justify-center items-center'>
              <img src={user.picture} alt="" className='w-[50px] h-[50px] rounded-full' />
              <h3 className='font-semibold text-teal-200 text-center'>{user.name}</h3>
            </div> : <Link to="/signup" className='text-xl font-semibold text-cyan-300 hover:text-white transition-all duration-300 ease-in-out bg-gray-700 p-2 rounded-md hover:bg-teal-700 '>Sign Up</Link>}
          {user ? <button onClick={handleSignOut} className='text-xl font-semibold text-cyan-300 hover:text-white transition-all duration-300 ease-in-out bg-gray-700 p-2 rounded-md hover:bg-teal-700'>Sign Out</button> : null}
        </div>

      </nav>
    </div>
  )
}

export default Navbar