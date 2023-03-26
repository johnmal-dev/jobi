import React from 'react'
import { Link } from 'react-router-dom'

const articles = [
  {
    image: '',
    category: 'Developer, Code',
    title: 'Print, publishing qui visual layout mockups',
    author: 'Rashed Kabir',
  },
  {
    image: '',
    category: 'Design, Art',
    title: "Designer's checklist for every UX/UI project.",
    author: 'Julie Margot',
  },
  {
    image: '',
    category: 'Solution, Work',
    title: 'Make more productive work flow in fewer steps.',
    author: 'Jubayer Al Hasan',
  },
]

const JobiGuidesSection = () => {
  return (
    <div className="container">
      {/* Top */}
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <h3 className="font-heading text-5xl text-primary-700 sm:text-6xl">
          Jobi Guides
        </h3>
        <Link
          to="/"
          className="mt-10 inline-block rounded-3xl bg-primary-300 px-10 py-3"
        >
          Explore More
        </Link>
      </div>
      {/* Articles */}
      <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="m-auto h-48 w-3/4 bg-secondary-500 sm:m-0 sm:w-full lg:h-64">
                <img src={article.image} alt="" />
              </div>
              <div className="mt-9 text-black text-opacity-40">
                {article.category}
              </div>
              <div className="mt-3 text-xl font-bold sm:text-2xl">
                {article.title}
              </div>
              <div className="mt-4 font-bold">
                <span className="font-medium text-black text-opacity-30">
                  By{' '}
                </span>
                {article.author}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default JobiGuidesSection
