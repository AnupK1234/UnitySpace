import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='bg-cyan-600'>
        {/* Create two divs one for copyright and one for contribution with github link */}
        <div className='text-center text-white p-2'>
          <p>© 2023 - All Rights Reserved</p>
        </div>
        <div className='text-center text-white p-2'>
          <p>Contribute at <a className='text-gray-600 font-bold hover:text-gray-700 transition-all duration-200 ease-in-out' href='https://github.com/AnupK1234/UnitySpace/tree/main' target='_blank' rel='noreferrer'>UnitySpace</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer