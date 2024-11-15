import React from 'react'
import NewsDetails from './NewsDetails'
import RightSidebar from '../LayoutComponent/RightSidebar'
import { useLoaderData } from 'react-router-dom'
import Header from '../components/Header'

const News = () => {
  const newsData = useLoaderData();
    
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 lg:w-10/12 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-9">
          <NewsDetails newsData={newsData} />
        </div>
        <div className="lg:col-span-3">
          <RightSidebar />
        </div>
      </div>
    </>
  )
}

export default News