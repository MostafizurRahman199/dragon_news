import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Careers = () => {
  return (
    <div className="min-h-screen w-11/12 md:w-10/12 mx-auto bg-gradient-to-b from-white to-gray-50 my-8 rounded-2xl shadow-xl">
      <Header/>
      <Navbar/>
      {/* Hero Section */}
      <div className="relative h-[45vh] bg-gradient-to-r from-pink-50 to-blue-50 my-8 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              Join Our Newsroom ✨
            </h1>
            <p className="text-lg md:text-xl text-gray-600 animate-slide-up">
              Shape the future of journalism with us 🚀
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Current Openings */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Current Openings
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job Cards */}
            <JobCard 
              title="Senior Journalist"
              department="Editorial"
              location="New York, NY"
              type="Full-time"
            />
            <JobCard 
              title="News Editor"
              department="Editorial"
              location="Remote"
              type="Full-time"
            />
            <JobCard 
              title="Digital Content Producer"
              department="Digital Media"
              location="Los Angeles, CA"
              type="Full-time"
            />
          </div>
        </div>

        {/* Why Join Us */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Why Join Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard 
              title="Growth Opportunities"
              description="Continuous learning and career advancement paths"
              icon="📈"
            />
            <BenefitCard 
              title="Competitive Benefits"
              description="Comprehensive health coverage and retirement plans"
              icon="🏥"
            />
            <BenefitCard 
              title="Work-Life Balance"
              description="Flexible schedules and remote work options"
              icon="⚖️"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const JobCard = ({ title, department, location, type }) => (
  <div className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-all border-l-4 border-red-500 shadow-md hover:shadow-xl transform hover:-translate-y-1 duration-200">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <div className="space-y-3 mb-4">
      <p className="text-gray-600 flex items-center gap-3 hover:text-blue-500 transition-colors">
        <span className="w-5 h-5 flex items-center justify-center bg-blue-50 rounded-full">🏢</span> {department}
      </p>
      <p className="text-gray-600 flex items-center gap-3 hover:text-blue-500 transition-colors">
        <span className="w-5 h-5 flex items-center justify-center bg-pink-50 rounded-full">📍</span> {location}
      </p>
      <p className="text-gray-600 flex items-center gap-3 hover:text-blue-500 transition-colors">
        <span className="w-5 h-5 flex items-center justify-center bg-purple-50 rounded-full">⏰</span> {type}
      </p>
    </div>
    <button className="bg-red-500 text-white px-6 py-2.5 rounded-lg hover:bg-red-600 transition-colors w-full transform hover:scale-[1.02] duration-200 shadow-sm hover:shadow-md">
      Apply Now
    </button>
  </div>
)

const BenefitCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-xl p-8 hover:bg-gray-50 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1 duration-200">
    <span className="text-5xl mb-6 block bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">{icon}</span>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
)

export default Careers