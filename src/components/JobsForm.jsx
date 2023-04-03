import React, { useContext } from 'react'

import jobCategories from '../utils/jobCategories'
import AppContext from './context/AppContext'

const JobsForm = () => {
  const { filter, setFilter } = useContext(AppContext)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const userInput = formData.get('keywordInput') ?? ''
        setFilter({ ...filter, keywords: userInput })
      }}
      className="relative z-20 mt-6 flex w-full flex-col md:flex-row lg:w-3/4"
    >
      <div className="flex-1 rounded-t-md bg-white px-6 py-3 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-primary-300 md:rounded-l-md md:rounded-tr-none">
        <label
          htmlFor="keywordInput"
          className="block text-xs font-medium text-secondary-500"
        >
          What are you looking for?
        </label>
        <input
          type="text"
          name="keywordInput"
          id="keywordInput"
          className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Job Title"
        />
      </div>
      <div className="flex-1 bg-white px-6 py-3 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-primary-300">
        <div>
          <label
            htmlFor="categorySelect"
            className="block text-xs font-medium text-secondary-500"
          >
            Category
          </label>
          <select
            id="categoryInput"
            name="categoryInput"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            defaultValue={'all'}
            onChange={() => console.log('value changed')}
          >
            <option value="all">All Categories</option>
            {jobCategories.map((category, index) => {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              )
            })}
          </select>
        </div>
      </div>
      <button className="flex-1 rounded-b-md bg-primary-300 px-10 py-3 uppercase shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 md:rounded-r-md md:rounded-bl-none">
        Search
      </button>
    </form>
  )
}

export default JobsForm
