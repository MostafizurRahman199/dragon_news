import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);

  // ______________________useFirebaseAuth
  const {updateUserProfile} = useFirebaseAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const { createUserWithGoogle, signInWithEmailPassword } = useFirebaseAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
  
  };



// ______________________handleSignInWithEmailPassword

  const handleSignInWithEmailPassword = async () => {
    try {
      const user = await signInWithEmailPassword(formData.email, formData.password);
      if (user?.email) {
        handleLoginSuccess(user);
        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) { 
      if (error.code === "auth/invalid-credential" || 
          error.code === "auth/invalid-email" || 
          error.code === "auth/wrong-password") {
        setError("Invalid email or password");
      } else {
        setError(error.message);
      }
    }
  };



  // ______________________handleGoogleSignIn

  const handleGoogleSignIn = async () => {
    try {
      const result = await createUserWithGoogle();
      if (result?.user) {
        handleLoginSuccess(result.user);
        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      if(error.code === "auth/invalid-credential" || 
          error.code === "auth/invalid-email" || 
          error.code === "auth/wrong-password") {
        setError("Invalid email or password");
      }else{
        setError(error.message);
      }
    }
  };


// ______________________handleLoginSuccess and redirect to the saved location

  const handleLoginSuccess = (user) => {
    // Update profile if needed (for Google sign-in)
    if (user.photoURL && user.displayName) {
      updateUserProfile(user, user.displayName, user.photoURL);
    }
    // Redirect to the saved location or default to home
    const from = location.state?.from?.pathname || '/';
    navigate(from);
  };



  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow-lg ">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Login your account
          </h2>
        </div>

        {/* Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              onClick={handleSignInWithEmailPassword}
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-[#403F3F] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
            >
              Login
            </button>
          </div>

          {
            error && (
              <div className="text-red-500 text-sm mt-2">
                {error}
              </div>
            )
          }

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Google Sign In Button */}
          <div>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm sm:text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>
          </div>
        </form>

        {/* Register Link */}
        <div className="text-center text-sm sm:text-base">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="font-medium text-red-600 hover:text-red-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
