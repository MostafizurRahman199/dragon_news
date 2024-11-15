import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const AuthLayout = () => {
  return (
   <div className='bg-gray-100 font-poppins'>
     <div className='min-h-screen bg-gray-100  w-10/12 mx-auto py-8'>
        <Navbar/>
        {/* here have login and register page */}
        <Outlet/>
    </div>
   </div>
  )
}

export default AuthLayout