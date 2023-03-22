import React from 'react'

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white m-2 p-11 flex flex-col justify-center items-center gap-8 hover:bg-primary-300 transition duration-300 ease-in-out cursor-pointer rounded-4xl">
      <div className="w-6 h-6 m-2">
        <div>{category.icon}</div>
      </div>
      <div className="font-bold">{category.name}</div>
      <div className="text-sm text-secondary-900 text-opacity-60">
        {category.count} jobs
      </div>
    </div>
  )
}

export default CategoryCard
