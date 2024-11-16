import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFirebaseAuth } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const navigate = useNavigate();

    const {
        createUserWithEmailPassword, 
        createUserWithGoogle,
        updateUserProfile
        } = useFirebaseAuth();

  // ______________________state for form data

  const [formData, setFormData] = useState({
    name: '',
    photoUrl: '',
    email: '',
    password: '',
    terms: false
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    photoUrl: '',
    general: ''
  });

  // ______________________handleChange

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }


  const handleSignInWithEmailPassword = async (email, password) => {
    try {
      const user = await createUserWithEmailPassword(email, password);
      if (user?.email) {
        await updateUserProfile(user, formData.name, formData.photoUrl);
        setFormData({
          name: '',
          photoUrl: '',
          email: '',
          password: '',
          terms: false
        });
        navigate("/auth/login");
      }
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ ...errors, general: error.message });
    }
  }

  const handleGoogleSignIn = async () => {
    try {
     const user = await createUserWithGoogle();
      if (user?.email) {
        navigate("/");
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };


  // ______________________handleSubmit
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({
      name: '',
      email: '',
      password: '',
      photoUrl: ''
    });

    // Validation checks
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    if (formData.photoUrl && !formData.photoUrl.match(/^https?:\/\/.+/)) {
      newErrors.photoUrl = 'Please enter a valid URL starting with http:// or https://';
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, proceed with registration
    try {
      await handleSignInWithEmailPassword(formData.email, formData.password);
      navigate("/auth/login");
    } catch (error) {
      setErrors({ ...newErrors, general: error.message });
    }
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
              className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
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
              className={`w-full px-3 py-2 border ${errors.photoUrl ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500`}
              placeholder="Enter photo URL"
            />
            {errors.photoUrl && <p className="mt-1 text-sm text-red-500">{errors.photoUrl}</p>}
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
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
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
              className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
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
          <div className="space-y-3">
            <button
              onClick={() => handleSignInWithEmailPassword(formData.email, formData.password)}
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-[#403F3F] hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
            >
              Register
            </button>

            {/* Google Sign In Button */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm sm:text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
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