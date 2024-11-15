import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {

  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = today.toLocaleDateString('en-US', options);

  return (
    <div className="text-center space-y-2 sm:space-y-4 py-6 sm:py-10 font-poppins">
        <div className="flex justify-center">
            <img src={logo} alt="logo" className="h-8 sm:h-12" />
        </div>
        <p className="text-lg sm:text-xl font-thin text-gray-400">Journalism Without Fear or Favour</p>
        <p className="text-sm sm:text-base text-gray-500">{dateString}</p>
    </div>
  )
}

export default Header