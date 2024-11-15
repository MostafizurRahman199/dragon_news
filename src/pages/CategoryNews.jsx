import { useLoaderData } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'

const CategoryNews = () => {
  const { data } = useLoaderData()
  
  return (
    <div className="h-[calc(100vh+400px)] pb-20 overflow-y-auto px-4 md:px-8 py-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {data.map(news => (
          <CategoryCard key={news._id} news={news} />
        ))}
      </div>
    </div>
  )
}

export default CategoryNews