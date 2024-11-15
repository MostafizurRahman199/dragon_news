import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import user from '../assets/user.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const getNavLinkClass = (isActive) => 
    `hover:text-red-600 transition-colors ${isActive ? 'text-red-600' : 'text-gray-600'}`

  const navLinks = [
    {display:"Home",path:"/"},
    {display:"About",path:"/about"},
    {display:"Career",path:"/career"}
  ]

  // Add this new component for the profile/login section
  const ProfileSection = () => (
    <div className='flex items-center space-x-4'>
      <img src={user} alt="profile" className="h-8 w-8 rounded-full" />
      <Link to="/auth/login" className='bg-black text-white px-8 py-2 rounded-md hover:bg-red-700 transition-colors'>
        Login
      </Link>
    </div>
  )

  return (
    <nav className='bg-transparent  py-3'>
      <div className='w-10/12 mx-auto'>
        <div className='flex justify-between items-center'>
          {/* Logo/Brand - Add a logo container */}
          
          <div className='flex-1'>
          </div>
           

          {/* Desktop Navigation - Center the links */}
          <div className='hidden md:flex  justify-center flex-1'>
            <div className='flex space-x-8'>
             {
                navLinks.map((link, index) => (
                    <NavLink 
                        key={link.path} 
                        to={link.path} 
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >
                        {link.display}
                    </NavLink>
                ))
             }
            </div>
          </div>

          {/* Profile and Login - Desktop */}
          <div className='hidden md:flex justify-end flex-1'>
            <ProfileSection />
          </div>

          {/* Mobile menu button - Move to the right */}
          <div className='md:hidden flex-shrink-0'>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-600 hover:text-gray-800'
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu - Improve spacing and transitions */}
        {isOpen && (
          <div className='md:hidden mt-4 space-y-4 transition-all duration-300 ease-in-out'>
            {
                navLinks.map((link) => (
                    <NavLink 
                        key={link.path} 
                        to={link.path}  
                        className={({ isActive }) => 
                          `block hover:text-red-600 transition-colors ${isActive ? 'text-red-600' : 'text-gray-600'}`
                        }
                    >
                        {link.display}
                    </NavLink>
                ))
             }
            <div className='pt-4 border-t border-gray-200'>
              <ProfileSection />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar