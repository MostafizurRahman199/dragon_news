import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Dragon News</h2>
            <p className="text-gray-600">
              Your trusted source for the latest news and updates from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-red-600">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-red-600">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-red-600">Contact</a></li>
              <li><a href="/categories" className="text-gray-600 hover:text-red-600">Categories</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-600">
              <p>Email: info@dragonnews.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 News Street, City, Country</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Dragon News. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-red-600">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer