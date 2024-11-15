import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


const SocialLogin = () => {
  return (
    <div className="flex flex-col items-start gap-4 p-4  w-full">

    <h2 className="text-lg font-semibold">Login With</h2>

    <button className="flex w-full items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100">
      <FcGoogle className="text-xl " />
      Login with Google
    </button>

    <button className="flex w-full items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100">
      <BsGithub className="text-xl" />
      Login with GitHub
    </button>
    
  </div>
  )
}

export default SocialLogin