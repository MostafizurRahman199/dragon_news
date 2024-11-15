import { useLoaderData } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'

const CategoryNews = () => {
  const { data } = useLoaderData()
  
  return (
    <div className="h-[calc(100vh+400px)] pb-20 overflow-y-auto px-4 md:px-8 py-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {data?.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No News Found</h2>
            <p className="text-gray-500">There are currently no news articles in this category.</p>
          </div>
        ) : (
          data?.map(news => (
            <CategoryCard key={news._id} news={news} />
          ))
        )}
      </div>
    </div>
  )
}

export default CategoryNews