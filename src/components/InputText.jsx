import React from 'react'

const InputText = ({ label, placeholder, id }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block h-5 text-sm font-medium leading-6 text-gray-900"
      >
        {label ? label : ''}
      </label>
      <div className="mt-2">
        <input
          type={id}
          name={id}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default InputText
