import React from 'react'

const JobsForm = () => {
  return (
    <form
      onSubmit={() => console.log('submit')}
      className="relative z-20 mt-6 flex w-full flex-col md:flex-row lg:w-3/4"
    >
      <div className="flex-1 rounded-t-md bg-white px-6 py-3 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-primary-300 md:rounded-l-md md:rounded-tr-none">
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
  )
}

export default JobsForm
