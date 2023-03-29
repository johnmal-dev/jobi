import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../context/AppContext'

const HomeBannerSection = () => {
  const { setFilter } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className="relative bg-primary-700 pt-0 lg:pt-6">
      <div className="container relative flex flex-col pt-12 pb-16 lg:pt-24 lg:pb-40">
        <h1 className="z-20 font-heading text-5xl sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <span className="block text-white">Find & Hire</span>
          <span className="block text-primary-300">Top 3% of Experts</span>
          <span className="block text-primary-400">on jobi.</span>
        </h1>
        <p className="mt-12 text-xl text-white">
          We deliver blazing fast & striking work solutions
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const filter = formData.get('keywordInput') ?? undefined
            setFilter(filter)
            navigate('/jobs')
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
                id="categorySelect"
                name="categorySelect"
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              >
                <option>Web Design</option>
                <option>Art</option>
                <option>Business</option>
                <option>Video Editing</option>
              </select>
            </div>
          </div>
          <button className="flex-1 rounded-b-md bg-primary-300 px-10 py-3 uppercase shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 md:rounded-r-md md:rounded-bl-none">
            Search
          </button>
        </form>
        <div className="pt-4 text-secondary-500">
          <span className="text-white">Popular:</span> Design, Art, Business,
          Video Editing
        </div>
        <div className="hidden lg:block">
          <div className="absolute right-0 top-0 z-10 h-full w-1/2 -translate-x-5 translate-y-10 bg-secondary-500"></div>
          <div className="absolute top-0 right-0 z-0 w-1/2 -translate-x-32 scale-75 before:absolute before:w-full before:content-banner-art-2 xl:-translate-x-16 xl:scale-100"></div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 hidden content-banner-art lg:block"></div>
    </div>
  )
}

export default HomeBannerSection
