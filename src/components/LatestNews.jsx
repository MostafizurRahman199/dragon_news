import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const LatestNews = () => {

  const newsItems = [
    {
      text: "Breaking: Major tech breakthrough announced",
      link: "/news/tech-breakthrough"
    },
    {
      text: "Markets reach all-time high",
      link: "/news/markets"
    },
    {
      text: "New environmental policy implemented",
      link: "/news/environment"
    },
    {
      text: "Sports: Championship finals scheduled for next week",
      link: "/news/sports"
    }
  ];

  return (
    <div className=" w-full  md:w-10/12 lg:w-10/12 mx-auto py-2 max-w-screen-2xl">
      <div className="flex flex-col sm:flex-row items-center bg-gray-100">
        <div className="w-full sm:w-auto rounded-md z-10 bg-red-600 sm:px-4 sm:py-2 shadow-md m-2">
          <span className="font-semibold text-white flex items-center gap-2 justify-center sm:justify-start">
            Latest
          </span>
        </div>
        
       
          <Marquee
            pauseOnHover={true}
            speed={50}
            gradient={true}
            gradientColor={[64, 63, 63]}
            gradientWidth={100}
            className="overflow-hidden py-2 sm:py-4"
          >
            <div className="flex gap-6 sm:gap-12 pr-0">
              {newsItems.map((item, index) => (
                <div key={index} className="text-sm sm:text-base text-gray-700 font-medium">
                  • <Link to={item.link} className="hover:text-red-600">{item.text}</Link>
                </div>
              ))}
            </div>
          </Marquee>
        
      </div>
    </div>
  );
};

export default LatestNews;
