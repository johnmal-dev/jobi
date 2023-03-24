import React from 'react'

const CategoryCard = ({ category }) => {
  return (
    <div className="m-2 flex cursor-pointer flex-col items-center justify-center gap-1 rounded-4xl bg-white p-8 text-center transition duration-300 ease-in-out hover:bg-primary-300 xs:gap-8 xs:p-11">
      <div className="m-2 h-6 w-6">
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
