import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
        const result = await response.json();
        setCategories(result.data.news_category);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  return (
    <aside className="w-full bg-white shadow-md p-4 border-2">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">All Categories({categories.length})</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.category_id} className="hover:bg-gray-100 rounded-md">
            <NavLink
              key={category.category_id}
              to={`/category/${category.category_id}`}
              className={({ isActive }) =>
                `btn bg-transparent font-semibold flex items-center px-4 py-2.5 text-sm transition-all duration-200
                ${isActive 
                  ? 'bg-gray-200 text-gray-900 rounded-md' 
                  : 'text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-md'
                }`
              }
            >
              <span>{category.category_name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;