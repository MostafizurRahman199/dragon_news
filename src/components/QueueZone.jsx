import React from 'react'
import swimming from '../assets/swimming.png'
import playground from '../assets/playground.png'
import classImg from '../assets/class.png'

const QueueZone = () => {
  return (
    <div className="bg-[#F3F3F3] p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-5 text-[#403F3F]">Q-Zone</h2>

        <div className="space-y-4">
            <div className="p-2 rounded transition-all hover:shadow-md">
                <img src={swimming} alt="Swimming" className="w-full h-48 object-cover rounded" />
            </div>
            <div className="p-2 rounded transition-all hover:shadow-md">
                <img src={playground} alt="Playground" className="w-full h-48 object-cover rounded" />
            </div>
            <div className="p-2 rounded transition-all hover:shadow-md">
                <img src={classImg} alt="Class" className="w-full h-48 object-cover rounded" />
            </div>
        </div>
    </div>
  )
}

export default QueueZone