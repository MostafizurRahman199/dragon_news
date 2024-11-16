import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const About = () => {
  return (
    <div className="min-h-screen w-11/12 md:w-10/12 mx-auto bg-white my-8">
      <Header />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-red-50 to-white rounded-2xl overflow-hidden my-8">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          {/* Dragon illustration or pattern could go here */}
          🐉
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Dragon News <span className="text-red-600">Story</span> 🐲
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Breathing fire into journalism since 2024
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Our <span className="text-red-600">Mission</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Dragon News, we believe in the power of fearless journalism. 
              Like our mythical namesake, we soar above the ordinary, bringing 
              you stories that ignite minds and inspire hearts.
            </p>
            <div className="flex gap-4">
              <Stat number="1M+" label="Daily Readers" />
              <Stat number="50+" label="Journalists" />
              <Stat number="24/7" label="Coverage" />
            </div>
          </div>
          <div className="bg-red-50 rounded-2xl p-8 shadow-inner">
            <ValueCard 
              icon="🔥"
              title="Truth & Transparency"
              description="We illuminate the truth with the same intensity as dragon's fire."
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Our <span className="text-red-600">Team</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <TeamCard 
            name="Sarah Chen"
            role="Editor-in-Chief"
            image={'https://lastfm.freetls.fastly.net/i/u/ar0/23a874fdbd89ab75ed27e44d862dbace.jpg'}
          />
          <TeamCard 
            name="James Wilson"
            role="Head of Digital"
            image={'https://www.adalovelaceinstitute.org/wp-content/uploads/2021/11/James-Wilson.jpg'}
          />
          <TeamCard 
            name="Maria Garcia"
            role="Senior Reporter"
            image={'https://www.alantra.com/wp-content/uploads/2020/03/Mar%C3%ADa-Garc%C3%ADa-Mi%C3%B1aur-1.png'}
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-6 py-12 bg-gradient-to-b from-white to-red-50 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our <span className="text-red-600">Values</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard 
            icon="⚡"
            title="Speed & Accuracy"
            description="Swift like dragon wings, precise like dragon eyes"
          />
          <ValueCard 
            icon="🌍"
            title="Global Perspective"
            description="Soaring across borders, bringing world news home"
          />
          <ValueCard 
            icon="💝"
            title="Community First"
            description="Guarding our community's interests with fierce dedication"
          />
        </div>
      </div>
    </div>
  )
}

const Stat = ({ number, label }) => (
  <div className="text-center">
    <div className="text-2xl font-bold text-red-600">{number}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
)

const TeamCard = ({ name, role, image }) => (
  <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-red-100 hover:-translate-y-1">
    <div className="mb-4 w-16 h-16 mx-auto">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{name}</h3>
    <p className="text-red-600 text-center text-sm">{role}</p>
  </div>
)

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
    <div className="text-3xl mb-4 bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
)

export default About