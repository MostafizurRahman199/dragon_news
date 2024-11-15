import React from 'react'
import { FaBookmark, FaShare, FaStar, FaEye } from 'react-icons/fa'

const CategoryCard = ({ news }) => {
  const { author, title, image_url, details, rating, total_view } = news

  return (
    <div className="card border p-4 mb-4">
      {/* Author info and icons header */}
      <div className="flex justify-between items-center mb-4">
       
        <div className="flex items-center gap-3">

          <img 
            src={author.img} 
            alt={author.name} 
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h4 className="font-semibold">{author.name}</h4>
            <p className="text-gray-600">{author.published_date}</p>
          </div>

        </div>

        <div className="flex gap-2">
          <FaBookmark className="cursor-pointer" />
          <FaShare className="cursor-pointer" />
        </div>

      </div>

      {/* News content */}
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <img src={image_url} alt={title} className="w-full mb-3" />
      <p className="text-gray-700 mb-3">{details.slice(0, 200)}...</p>
      <p className="text-yellow-500 hover:underline hover:font-semibold cursor-pointer mb-4">See more</p>

      <hr className="mb-4" />

      {/* Rating and views footer */}
      <div className="flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`${
                index < Math.floor(rating.number)
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span>{rating.number}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard