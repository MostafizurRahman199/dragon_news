import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaRegStar, FaRegEye, FaArrowLeft } from 'react-icons/fa';

const NewsDetails = ({ newsData }) => {
  const news = newsData.data[0];
  const { author, title, image_url, details, rating, total_view } = news;

  return (
    <div className="container mx-auto p-4">
      <div className="card border p-4">
        {/* Author info */}
        <div className="flex justify-between items-center mb-4 bg-gray-100 p-4 rounded-xl">
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
            <FaRegBookmark className="cursor-pointer" />
            <FaShareAlt className="cursor-pointer" />
          </div>
        </div>

        {/* News content */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <img src={image_url} alt={title} className="w-full h-96 object-cover mb-4" />
        <p className="text-gray-700 mb-4">{details}</p>

        {/* Rating and views footer */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, index) => (
              <FaRegStar
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
            <FaRegEye />
            <span>{total_view}</span>
          </div>
        </div>

        {/* Back button */}
        <Link 
          to={-1} 
          className="w-fit inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 my-4 rounded-md hover:bg-red-700"
        >
          <FaArrowLeft /> All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetails; 