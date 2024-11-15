import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"

const SocialFollow = () => {
  return (
    <div className="p-4 sm:p-6 md:p-4">

      <p className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Find Us On</p>

      <ul className="flex flex-col ">

        <li className="w-full">

          <Link 
            to="/facebook" 
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white border text-gray-800 hover:bg-gray-50 transition-colors w-full rounded-none"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-xl sm:text-2xl text-[#3B5998]" />
            <span className="font-medium text-sm sm:text-base">Facebook</span>
          </Link>

        </li>

        <li className="w-full">

          <Link 
            to="/twitter" 
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white border text-gray-800 hover:bg-gray-50 transition-colors w-full rounded-none"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-xl sm:text-2xl text-[#1DA1F2]" />
            <span className="font-medium text-sm sm:text-base">Twitter</span>
          </Link>

        </li>

        <li className="w-full">

          <Link 
            to="/instagram" 
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white border text-gray-800 hover:bg-gray-50 transition-colors w-full rounded-none"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-xl sm:text-2xl text-[#E1306C]" />
            <span className="font-medium text-sm sm:text-base">Instagram</span>
          </Link>

        </li>

      </ul>
    </div>
  )
}

export default SocialFollow