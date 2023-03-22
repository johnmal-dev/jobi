import React from 'react'

const HomeBannerSection = () => {
  return (
    <div className="pt-6 bg-primary-700 relative">
      <div className="container mx-auto px-16 grid grid-cols-2">
        {/* Left */}
        <div className="py-24">
          <h1 className="font-eb-garamond text-8xl">
            <span className="block text-white">Find & Hire</span>
            <span className="block text-primary-300">Top 3% of Experts</span>
            <span className="block text-primary-400">on jobi.</span>
          </h1>
          <p className="mt-12 text-white text-xl font-gordita">
            We deliver blazing fast & striking work solutions
          </p>
          <form
            onSubmit={() => console.log('submit')}
            className="mt-6 flex w-full"
          >
            <div className="bg-white rounded-l-md px-3 pt-2.5 pb-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
              <label
                htmlFor="descriptionInput"
                className="block text-xs font-medium text-secondary-500"
              >
                What are you looking for?
              </label>
              <input
                type="text"
                name="descriptionInput"
                id="descriptionInput"
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Jane Smith"
              />
            </div>
            <div className="bg-white px-3 pt-2.5 pb-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
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
            <button className="bg-primary-300 rounded-r-md px-3 pt-2.5 pb-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 uppercase">
              Search
            </button>
          </form>
          <div className="pt-4 text-secondary-500">
            <span className="text-white">Popular:</span> Design, Art, Business,
            Video Editing
          </div>
        </div>
        {/* Right */}
        <div className="relative">
          <div className="absolute before:content-banner-art-2"></div>
          <div className="bg-secondary-500 h-full translate-x-4 max-w-2xl translate-y-16 overflow-visible">
            <img src="#" alt="" />
          </div>
        </div>
        {/* Banner Art */}
        <div className="absolute left-0 bottom-0 before:content-banner-art translate-y-2"></div>
      </div>
    </div>
  )
}

export default HomeBannerSection
