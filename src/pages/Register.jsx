import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFirebaseAuth } from '../provider/AuthProvider';

const Register = () => {


    const {createUserWithEmailPassword} = useFirebaseAuth();

  // ______________________state for form data

  const [formData, setFormData] = useState({
    name: '',
    photoUrl: '',
    email: '',
    password: '',
    terms: false
  })



  // ______________________handleChange

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }




  // ______________________handleSubmit
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your registration logic here
    createUserWithEmailPassword(formData.email, formData.password);
    setFormData({
      name: '',
      photoUrl: '',
      email: '',
      password: '',
      terms: false
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 my-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow-lg  ">
      
        {/* Header */}

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Create an account
          </h2>
        </div>




        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your name"
            />
          </div>



          {/* Photo URL Field */}
          <div>
            <label 
              htmlFor="photoUrl" 
              className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
            >
              Photo URL
            </label>
            <input
              id="photoUrl"
              name="photoUrl"
              type="url"
              required
              value={formData.photoUrl}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
              placeholder="Enter photo URL"
            />
          </div>



          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your email"
            />
          </div>



          {/* Password Field */}
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              checked={formData.terms}
              onChange={handleChange}
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{' '}
              <a href="#" className="text-red-600 hover:text-red-500">
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-[#403F3F] hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
            >
              Register
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="text-center text-sm sm:text-base">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/auth/login" className="font-medium text-red-600 hover:text-red-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register